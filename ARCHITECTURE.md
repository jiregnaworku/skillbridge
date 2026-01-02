# FevNurse Frontend Architecture

## Overview
FevNurse is a ReactJS platform that connects NGOs with nurses and healthcare learners. This architecture is designed for scalability, maintainability, and production readiness.

## Tech Stack
- **Framework**: React 18+ with Vite
- **Routing**: react-router-dom v6
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit + RTK Query
- **Forms**: React Hook Form + Zod
- **UI Components**: Headless UI + Custom components
- **Development**: ESLint, Prettier, TypeScript

## Folder Structure

```
frontend/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── index.html
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI components (Button, Input, etc.)
│   │   ├── layout/          # Layout components (Header, Sidebar, etc.)
│   │   ├── common/          # Shared components (Loading, Error, etc.)
│   │   └── forms/           # Form components
│   ├── pages/               # Route-based page components
│   │   ├── auth/           # Authentication pages
│   │   ├── dashboard/      # Dashboard pages
│   │   ├── profiles/       # Profile management
│   │   ├── ngo/            # NGO-specific pages
│   │   └── search/         # Search and filtering
│   ├── features/           # Feature-based modules
│   │   ├── auth/           # Authentication feature
│   │   ├── profiles/       # Profile management feature
│   │   ├── ngo/            # NGO management feature
│   │   ├── search/         # Search functionality
│   │   └── messaging/      # Communication feature
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services and external integrations
│   ├── store/              # Redux store configuration
│   ├── utils/              # Utility functions and helpers
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # Application constants
│   ├── assets/             # Static assets (images, icons)
│   ├── styles/             # Global styles and Tailwind config
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite environment types
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── eslint.config.js
└── README.md
```

## Folder Explanations

### `/src/components/`
**Purpose**: Reusable UI components that can be used across the application.

- **`ui/`**: Base UI components (Button, Input, Card, Modal, etc.)
- **`layout/`**: Layout-specific components (Header, Footer, Sidebar, Navigation)
- **`common/`**: Shared components (LoadingSpinner, ErrorBoundary, NotFound)
- **`forms/`**: Form-specific components (FormField, FormSelect, etc.)

### `/src/pages/`
**Purpose**: Route-based page components that represent different URLs.

- **`auth/`**: Login, Register, Forgot Password pages
- **`dashboard/`**: User dashboard, NGO dashboard
- **`profiles/`**: Profile creation, editing, viewing
- **`ngo/`**: NGO registration, management, job postings
- **`search/`**: Search results, filtering interface

### `/src/features/`
**Purpose**: Feature-based modules following the feature-sliced architecture pattern.

Each feature contains:
- **`components/`**: Feature-specific components
- **`hooks/`**: Feature-specific hooks
- **`services/`**: Feature-specific API calls
- **`store/`**: Redux slice for the feature
- **`types/`**: Feature-specific types
- **`utils/`**: Feature-specific utilities

### `/src/hooks/`
**Purpose**: Custom React hooks that can be reused across features.

Examples: `useAuth`, `useLocalStorage`, `useDebounce`, `useApi`

### `/src/services/`
**Purpose**: API services and external integrations.

- **`api/`**: Axios configuration and API endpoints
- **`auth/`**: Authentication service
- **`storage/`**: Local storage management

### `/src/store/`
**Purpose**: Redux store configuration and global state management.

- **`index.ts`**: Store configuration
- **`slices/`**: Redux slices
- **`api/`**: RTK Query API definitions

### `/src/utils/`
**Purpose**: Utility functions and helpers.

Examples: `formatters`, `validators`, `constants`, `helpers`

### `/src/types/`
**Purpose**: TypeScript type definitions.

- **`api.ts`**: API response types
- **`user.ts`**: User-related types
- **`ngo.ts`**: NGO-related types

## Routing Strategy

### Route Structure
```typescript
const routes = [
  // Public routes
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  
  // Protected routes (require authentication)
  { path: '/dashboard', component: DashboardPage, protected: true },
  { path: '/profile', component: ProfilePage, protected: true },
  { path: '/profile/edit', component: EditProfilePage, protected: true },
  
  // NGO routes
  { path: '/ngo/register', component: NgoRegisterPage },
  { path: '/ngo/dashboard', component: NgoDashboardPage, protected: true, role: 'ngo' },
  { path: '/ngo/postings', component: NgoPostingsPage, protected: true, role: 'ngo' },
  
  // Search routes
  { path: '/search', component: SearchPage },
  { path: '/search/results', component: SearchResultsPage },
  
  // Communication routes
  { path: '/messages', component: MessagesPage, protected: true },
  { path: '/messages/:id', component: ConversationPage, protected: true },
  
  // Error routes
  { path: '/404', component: NotFoundPage },
  { path: '/500', component: ServerErrorPage }
];
```

### Route Protection
- **Authentication Guard**: Protects routes requiring login
- **Role-based Access**: Different access for users vs NGOs
- **Route Loading**: Lazy loading for better performance

## State Management Recommendation

### Redux Toolkit + RTK Query

**Why Redux Toolkit?**
- Boilerplate-free Redux
- Built-in Immer for immutable updates
- Excellent TypeScript support
- DevTools integration

**Store Structure:**
```typescript
interface RootState {
  auth: AuthState;
  profiles: ProfilesState;
  ngo: NgoState;
  search: SearchState;
  messages: MessagesState;
  ui: UiState;
}
```

**RTK Query for API:**
- Automatic caching and invalidation
- Loading/error states handled
- Optimistic updates
- Code splitting friendly

### Local State Management
- **Component State**: For UI-only state (form inputs, modals)
- **Context API**: For theme, language preferences
- **React Hook Form**: For form state management

## Key Architectural Principles

### 1. Feature-Sliced Architecture
- Organize code by features, not by file type
- Each feature is self-contained
- Easy to maintain and scale

### 2. Separation of Concerns
- UI components separate from business logic
- API calls separated from components
- Clear data flow patterns

### 3. Type Safety
- Full TypeScript implementation
- Strict type checking
- Comprehensive type definitions

### 4. Performance Optimization
- Code splitting by routes
- Lazy loading components
- Image optimization
- Bundle size monitoring

### 5. Developer Experience
- Hot module replacement
- ESLint + Prettier
- Comprehensive error handling
- Clear folder naming conventions

## Next Steps

1. Initialize Vite project with React + TypeScript
2. Install and configure dependencies
3. Set up folder structure
4. Configure Tailwind CSS
5. Set up Redux Toolkit store
6. Create base UI components
7. Implement authentication flow
8. Build core features iteratively

This architecture provides a solid foundation for building a scalable, maintainable, and production-ready React application for the FevNurse platform.
