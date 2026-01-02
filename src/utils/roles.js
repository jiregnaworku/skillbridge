// Role definitions and permissions
export const ROLES = {
  USER: 'user',
  NGO: 'ngo',
  ADMIN: 'admin'
};

// Permission matrix
export const PERMISSIONS = {
  [ROLES.USER]: {
    canCreateProfile: true,
    canViewOwnProfile: true,
    canViewPublicProfiles: true,
    canEditOwnProfile: true,
    canAccessNGODashboard: false
  },
  [ROLES.NGO]: {
    canCreateProfile: true,
    canViewOwnProfile: true,
    canViewPublicProfiles: true,
    canEditOwnProfile: true,
    canAccessNGODashboard: true,
    canSearchUsers: true,
    canContactUsers: true,
    canShortlistUsers: true
  },
  [ROLES.ADMIN]: {
    canCreateProfile: true,
    canViewOwnProfile: true,
    canViewPublicProfiles: true,
    canEditOwnProfile: true,
    canAccessNGODashboard: true,
    canSearchUsers: true,
    canContactUsers: true,
    canShortlistUsers: true,
    canManageUsers: true,
    canViewAnalytics: true
  }
};

// Helper function to check permissions
export const hasPermission = (userRole, permission) => {
  return PERMISSIONS[userRole]?.[permission] || false;
};

// Helper function to check if user can access route
export const canAccessRoute = (user, route) => {
  if (!user) return false;
  
  const routePermissions = {
    '/profile/create': hasPermission(user.role, 'canCreateProfile'),
    '/profile/:id': hasPermission(user.role, 'canViewPublicProfiles'),
    '/ngo/dashboard': hasPermission(user.role, 'canAccessNGODashboard'),
    '/admin/dashboard': hasPermission(user.role, 'canViewAnalytics')
  };
  
  return routePermissions[route] !== false;
};
