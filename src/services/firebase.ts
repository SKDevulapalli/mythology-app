import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';

/**
 * Firebase Configuration
 *
 * REQUIRED SETUP:
 * 1. Create a Firebase project at https://console.firebase.google.com
 * 2. Enable Authentication and add Google and Twitter sign-in providers
 * 3. Create a .env file in the project root with the following variables:
 *
 * For Google OAuth:
 * - In Firebase Console > Authentication > Sign-in method > Google > Enable
 * - No additional setup needed - Firebase handles it
 *
 * For Twitter/X OAuth:
 * - Go to https://developer.twitter.com/en/portal/dashboard
 * - Create a new app or use existing one
 * - Get API Key and API Secret
 * - Set callback URL to: https://YOUR-PROJECT.firebaseapp.com/__/auth/handler
 * - In Firebase Console > Authentication > Sign-in method > Twitter
 * - Enter your Twitter API Key and API Secret
 *
 * Environment Variables (.env file):
 * VITE_FIREBASE_API_KEY=your-api-key
 * VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
 * VITE_FIREBASE_PROJECT_ID=your-project-id
 * VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
 * VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
 * VITE_FIREBASE_APP_ID=your-app-id
 */

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check if Firebase is configured
export const isFirebaseConfigured = (): boolean => {
  return !!(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId
  );
};

// Initialize Firebase only if configured
let app: ReturnType<typeof initializeApp> | null = null;
let auth: ReturnType<typeof getAuth> | null = null;

if (isFirebaseConfigured()) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}

// Auth providers
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

// Export auth instance
export { auth };
export type { FirebaseUser };

/**
 * Sign in with Google OAuth
 * Opens a popup for Google authentication
 */
export const signInWithGoogle = async (): Promise<FirebaseUser> => {
  if (!auth) {
    throw new Error('Firebase is not configured. Please set up environment variables.');
  }
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

/**
 * Sign in with Twitter/X OAuth
 * Opens a popup for Twitter authentication
 */
export const signInWithTwitter = async (): Promise<FirebaseUser> => {
  if (!auth) {
    throw new Error('Firebase is not configured. Please set up environment variables.');
  }
  const result = await signInWithPopup(auth, twitterProvider);
  return result.user;
};

/**
 * Sign out the current user
 */
export const firebaseSignOut = async (): Promise<void> => {
  if (!auth) {
    throw new Error('Firebase is not configured.');
  }
  await signOut(auth);
};

/**
 * Subscribe to auth state changes
 * Returns an unsubscribe function
 */
export const onAuthChange = (
  callback: (user: FirebaseUser | null) => void
): (() => void) => {
  if (!auth) {
    // If Firebase not configured, call with null immediately
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
};
