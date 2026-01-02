import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Don't show navigation on auth pages
  if (['/login', '/register'].includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              SkillBridge
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                {/* Role-based navigation */}
                {user?.role === 'ngo' && (
                  <Link
                    to="/ngo/dashboard"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                )}
                
                {user?.role === 'user' && (
                  <>
                    <Link
                      to="/profile/create"
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    >
                      Create Profile
                    </Link>
                    <Link
                      to="/browse"
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                    >
                      Browse Opportunities
                    </Link>
                  </>
                )}
                
                {/* Common links */}
                <Link
                  to="/browse"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Browse Professionals
                </Link>
                
                <Link
                  to="/how-it-works"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  How It Works
                </Link>
                
                {/* User menu */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Welcome, {user?.fullName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/browse"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Browse Professionals
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  How It Works
                </Link>
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
