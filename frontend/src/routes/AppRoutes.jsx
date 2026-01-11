import { Routes, Route, Navigate } from "react-router-dom"

import Layout from "@/components/layout/Layout"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Feed from "@/pages/Feed"
import BlogDetails from "@/pages/BlogDetails"
import Write from "@/pages/Write"
import Profile from "@/pages/Profile"
import Bookmarks from "@/pages/Bookmarks"
import NotFound from "@/pages/NotFound"

import useAuthStore from "@/store/authStore"

/**
 * Simple Auth Guard (frontend-only)
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Layout Wrapper */}
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* Protected Routes */}
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />

        <Route
          path="/write"
          element={
            <ProtectedRoute>
              <Write />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/:id?"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <Bookmarks />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
