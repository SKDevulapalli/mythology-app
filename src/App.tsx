import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StoryLibrary } from './pages/StoryLibrary';
import { StoryView } from './pages/StoryView';
import { ParentDashboard } from './pages/ParentDashboard';
import { CollectionsPage } from './pages/CollectionsPage';
import { LoginPage } from './pages/LoginPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import type { ReactNode } from 'react';

/**
 * ProtectedRoute - Redirects unauthenticated users to login page
 */
function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

/**
 * AppRoutes - Main routing configuration
 * Login page is public, all other routes require authentication
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/library" replace />} />
      <Route
        path="/library"
        element={
          <ProtectedRoute>
            <StoryLibrary />
          </ProtectedRoute>
        }
      />
      <Route
        path="/story/:id"
        element={
          <ProtectedRoute>
            <StoryView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/parent"
        element={
          <ProtectedRoute>
            <ParentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/collections"
        element={
          <ProtectedRoute>
            <CollectionsPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/library" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
