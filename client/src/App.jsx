// Importing necessary modules
import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages import
const Land = React.lazy(() => import("./pages/Land/Land.jsx"));
const Register = React.lazy(() => import("./pages/Register/Register.jsx"));
const Verify = React.lazy(() => import("./pages/Verify/Verify.jsx"));
const Login = React.lazy(() => import("./pages/Login/Login.jsx"));
const DashBoard = React.lazy(() => import("./pages/DashBoard/DashBoard.jsx"));
const Forgot = React.lazy(() => import("./pages/Forget/Forget.jsx"));
const Reset = React.lazy(() => import("./pages/Reset/Reset.jsx"));
const NotFound = React.lazy(() => import("./pages/404/NotFound.jsx"));
const Terms = React.lazy(() => import("./pages/T&P/Terms.jsx"));
const Privacy = React.lazy(() => import("./pages/T&P/Privacy.jsx"));

// Toaster import
import { Toaster } from "react-hot-toast";

// store import
import { useAuthStore } from "./store/useAuthStore.js";

// protected route
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

//  authenticated route
const RedirectAuthenticatedUser = ({ children }) => {
  const { user, isAuthenticated } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

// Loader import
import Loader from "./custom/Loader";

const App = () => {
  const { checkAuth, checkingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (checkingAuth) {
    return (
      <div className="h-screen flex justify-center items-center bg-black text-white">
        <Loader />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#000",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171",
              secondary: "#000",
            },
          },
        }}
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <RedirectAuthenticatedUser>
                <Land />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/register"
            element={
              <RedirectAuthenticatedUser>
                <Register />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/verify"
            element={
              <RedirectAuthenticatedUser>
                <Verify />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <Login />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forgetpassword"
            element={
              <RedirectAuthenticatedUser>
                <Forgot />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/resetpassword/:token"
            element={
              <RedirectAuthenticatedUser>
                <Reset />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/terms"
            element={
              <RedirectAuthenticatedUser>
                <Terms />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/privacy"
            element={
              <RedirectAuthenticatedUser>
                <Privacy />
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
