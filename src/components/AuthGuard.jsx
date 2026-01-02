import React from 'react';
import { Navigate } from 'react-router-dom';

// Mock auth context - in real app, this would come from your auth system
const AuthGuard = ({ children, requiredRole = null }) => {
  // Mock authentication check
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return token && user.id;
  };

  // Mock role check
  const hasRequiredRole = (userRole) => {
    if (!requiredRole) return true;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === requiredRole;
  };

  // Check authentication
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  // Check role-based access
  if (!hasRequiredRole(requiredRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default AuthGuard;
