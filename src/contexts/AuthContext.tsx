import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import {
  signInWithGoogle,
  signInWithTwitter,
  firebaseSignOut,
  onAuthChange,
  isFirebaseConfigured,
} from '../services/firebase';
import type { FirebaseUser } from '../services/firebase';

// Auth types
export type AuthMethod = 'guest' | 'google' | 'twitter';

export interface User {
  id: string;
  name: string;
  email?: string;
  authMethod: AuthMethod;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  isFirebaseReady: boolean;
  loginAsGuest: () => void;
  loginWithGoogle: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Storage key for persisting guest auth state
const GUEST_AUTH_STORAGE_KEY = 'mythology_guest_user';

/**
 * Convert Firebase user to our User type
 */
const firebaseUserToUser = (firebaseUser: FirebaseUser, method: 'google' | 'twitter'): User => ({
  id: firebaseUser.uid,
  name: firebaseUser.displayName || 'User',
  email: firebaseUser.email || undefined,
  authMethod: method,
  avatar: firebaseUser.photoURL || undefined,
});

/**
 * AuthProvider - Manages authentication state across the app
 *
 * Supports:
 * - Guest login (local storage, no real auth)
 * - Google OAuth (via Firebase)
 * - Twitter/X OAuth (via Firebase)
 *
 * Auth state persists across page refreshes:
 * - OAuth users: Firebase handles session persistence
 * - Guest users: localStorage
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);

  const isFirebaseReady = isFirebaseConfigured();

  // Listen for Firebase auth state changes
  useEffect(() => {
    // Check for guest user in localStorage first
    const storedGuest = localStorage.getItem(GUEST_AUTH_STORAGE_KEY);
    if (storedGuest) {
      try {
        const guestUser = JSON.parse(storedGuest) as User;
        if (guestUser.authMethod === 'guest') {
          setUser(guestUser);
          setAuthMethod('guest');
          setIsLoading(false);
          return;
        }
      } catch (e) {
        console.error('Failed to parse stored guest:', e);
        localStorage.removeItem(GUEST_AUTH_STORAGE_KEY);
      }
    }

    // Subscribe to Firebase auth state changes
    const unsubscribe = onAuthChange((firebaseUser) => {
      if (firebaseUser) {
        // Determine auth method from provider data
        const providerData = firebaseUser.providerData[0];
        let method: 'google' | 'twitter' = 'google';
        if (providerData?.providerId === 'twitter.com') {
          method = 'twitter';
        }
        setUser(firebaseUserToUser(firebaseUser, method));
        setAuthMethod(method);
      } else if (!storedGuest) {
        // Only clear user if there's no guest session
        setUser(null);
        setAuthMethod(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  /**
   * Guest login - creates a local session (no real auth)
   * Stored in localStorage for persistence
   */
  const loginAsGuest = useCallback(() => {
    const guestUser: User = {
      id: `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Guest Explorer',
      authMethod: 'guest',
    };
    setUser(guestUser);
    setAuthMethod('guest');
    localStorage.setItem(GUEST_AUTH_STORAGE_KEY, JSON.stringify(guestUser));
  }, []);

  /**
   * Google OAuth login via Firebase
   * Opens a popup for Google authentication
   */
  const loginWithGoogle = useCallback(async () => {
    if (!isFirebaseReady) {
      setError('Firebase is not configured. Please set up environment variables.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const firebaseUser = await signInWithGoogle();
      setUser(firebaseUserToUser(firebaseUser, 'google'));
      setAuthMethod('google');
      // Clear any guest session
      localStorage.removeItem(GUEST_AUTH_STORAGE_KEY);
    } catch (err) {
      console.error('Google login error:', err);
      if (err instanceof Error) {
        // Handle specific Firebase errors
        if (err.message.includes('popup-closed-by-user')) {
          setError('Login cancelled. Please try again.');
        } else if (err.message.includes('network-request-failed')) {
          setError('Network error. Please check your connection.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Failed to sign in with Google. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [isFirebaseReady]);

  /**
   * Twitter/X OAuth login via Firebase
   * Opens a popup for Twitter authentication
   */
  const loginWithTwitter = useCallback(async () => {
    if (!isFirebaseReady) {
      setError('Firebase is not configured. Please set up environment variables.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const firebaseUser = await signInWithTwitter();
      setUser(firebaseUserToUser(firebaseUser, 'twitter'));
      setAuthMethod('twitter');
      // Clear any guest session
      localStorage.removeItem(GUEST_AUTH_STORAGE_KEY);
    } catch (err) {
      console.error('Twitter login error:', err);
      if (err instanceof Error) {
        if (err.message.includes('popup-closed-by-user')) {
          setError('Login cancelled. Please try again.');
        } else if (err.message.includes('network-request-failed')) {
          setError('Network error. Please check your connection.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Failed to sign in with X. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [isFirebaseReady]);

  /**
   * Logout - clears auth state
   * For OAuth users, also signs out from Firebase
   */
  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      if (authMethod !== 'guest' && isFirebaseReady) {
        await firebaseSignOut();
      }
      // Clear guest session
      localStorage.removeItem(GUEST_AUTH_STORAGE_KEY);
      setUser(null);
      setAuthMethod(null);
    } catch (err) {
      console.error('Logout error:', err);
      setError('Failed to logout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [authMethod, isFirebaseReady]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        isFirebaseReady,
        loginAsGuest,
        loginWithGoogle,
        loginWithTwitter,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook to use auth context
 * Must be used within an AuthProvider
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
