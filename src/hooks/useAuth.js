import { useState, useEffect } from 'react';

// Mock auth hook - in real app, this would connect to your auth system
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth on mount
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // Mock API call
      const response = await mockLoginAPI(credentials);
      
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        setUser(response.user);
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const register = async (userData) => {
    try {
      // Mock API call
      const response = await mockRegisterAPI(userData);
      
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        setUser(response.user);
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      return { success: false, error: 'Registration failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const hasRole = (role) => {
    return user?.role === role;
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    register,
    logout,
    hasRole
  };
};

// Mock API functions
const mockLoginAPI = async (credentials) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock validation
  if (credentials.email === 'ngo@example.com' && credentials.password === 'password') {
    return {
      success: true,
      token: 'mock-jwt-token',
      user: {
        id: 1,
        email: 'ngo@example.com',
        fullName: 'Test NGO',
        role: 'ngo'
      }
    };
  }
  
  if (credentials.email === 'nurse@example.com' && credentials.password === 'password') {
    return {
      success: true,
      token: 'mock-jwt-token',
      user: {
        id: 2,
        email: 'nurse@example.com',
        fullName: 'Test Nurse',
        role: 'user'
      }
    };
  }
  
  return {
    success: false,
    error: 'Invalid credentials'
  };
};

const mockRegisterAPI = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    success: true,
    token: 'mock-jwt-token',
    user: {
      id: Math.floor(Math.random() * 1000),
      email: userData.email,
      fullName: userData.fullName,
      role: userData.role
    }
  };
};
