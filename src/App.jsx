import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from './pages/auth';
import HomePage from './pages/HomePage';
import CreateProfile from './components/CreateProfile';
import ProfilePage from './pages/ProfilePage';
import NGODashboard from './pages/NGODashboard';
import UserDashboard from './pages/UserDashboard';
import OverviewPage from './pages/user/OverviewPage';
import ApplicationsPage from './pages/user/ApplicationsPage';
import SavedJobsPage from './pages/user/SavedJobsPage';
import MessagesPage from './pages/user/MessagesPage';
import InterviewsPage from './pages/user/InterviewsPage';
import NotificationsPage from './pages/user/NotificationsPage';
import SettingsPage from './pages/user/SettingsPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected Routes - Any authenticated user */}
        <Route 
          path="/profile/create" 
          element={
            <ProtectedRoute>
              <Layout><CreateProfile /></Layout>
            </ProtectedRoute>
          } 
        />
        
        {/* Protected Routes - Public profile viewing */}
        <Route 
          path="/profile/:id" 
          element={
            <ProtectedRoute>
              <Layout><ProfilePage /></Layout>
            </ProtectedRoute>
          } 
        />
        
        {/* Protected Routes - NGO Only */}
        <Route 
          path="/ngo/dashboard" 
          element={
            <ProtectedRoute requiredRole="ngo">
              <Layout><NGODashboard /></Layout>
            </ProtectedRoute>
          } 
        />
        
        {/* Protected Routes - User Dashboard */}
        <Route 
          path="/user/dashboard" 
          element={
            <ProtectedRoute requiredRole="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<OverviewPage />} />
          <Route path="profile" element={<CreateProfile />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="saved" element={<SavedJobsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="interviews" element={<InterviewsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        
        {/* Additional Routes */}
        <Route 
          path="/browse" 
          element={
            <Layout>
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Nurses</h1>
                  <p className="text-gray-600">Browse and connect with healthcare professionals</p>
                </div>
              </div>
            </Layout>
          } 
        />
        
        <Route 
          path="/how-it-works" 
          element={
            <Layout>
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h1>
                  <p className="text-gray-600">Learn how SkillBridge connects professionals with opportunities</p>
                </div>
              </div>
            </Layout>
          } 
        />
        
        {/* Unauthorized Page */}
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
