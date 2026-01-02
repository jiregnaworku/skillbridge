import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthGuard from './AuthGuard';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const location = useLocation();
  
  return (
    <AuthGuard requiredRole={requiredRole}>
      {children}
    </AuthGuard>
  );
};

export default ProtectedRoute;
