# DFW Pristine Power Washing - Professional Pressure Washing Website

## Overview

DFW Pristine Power Washing is a modern, responsive single-page application (SPA) for a professional pressure washing service business serving the Dallas-Fort Worth metro area. The application features a clean, professional design with sections for services, gallery, testimonials, about information, and direct contact methods. It's built with React, TypeScript, and uses a full-stack architecture with Express.js backend. The site focuses on direct customer contact rather than complex forms.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Styling**: Modern design system with custom CSS variables and responsive layout
- **Router**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with JSON responses
- **Middleware**: CORS handling, JSON parsing, request logging
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### Database Architecture
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing

## Key Components

### Frontend Components
1. **Layout Components**
   - Header with sticky navigation and smooth scrolling
   - Footer with company information and social links

2. **Section Components**
   - Hero section with call-to-action buttons
   - Services showcase with feature cards
   - Gallery with before/after comparisons
   - Testimonials with customer reviews
   - About section highlighting company strengths
   - Contact form with validation and submission handling

3. **UI Components**
   - Complete shadcn/ui component library integration
   - Custom styled components matching brand theme
   - Responsive design patterns for mobile and desktop

### Backend Components
1. **API Routes**
   - `POST /api/contact` - Contact form submission with validation
   - `GET /api/contact` - Retrieve contact submissions (admin endpoint)

2. **Data Models**
   - Contact submission schema with required fields
   - Type-safe interfaces using Drizzle schema

3. **Storage Layer**
   - Abstract storage interface for flexibility
   - Memory storage implementation for development
   - PostgreSQL integration ready for production

## Data Flow

### Contact Form Submission
1. User fills out contact form with service inquiry
2. Frontend validates data using Zod schema
3. React Query mutation sends POST request to `/api/contact`
4. Backend validates request data against shared schema
5. Data is stored in database (or memory storage in development)
6. Success/error response returned to frontend
7. User receives feedback via toast notification

### Content Rendering
1. Static content renders immediately on page load
2. Smooth scrolling navigation between sections
3. Responsive image loading with optimized sizes
4. Interactive elements with hover and focus states

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI & Styling**: Tailwind CSS, shadcn/ui components, Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Validation**: Zod for runtime type checking
- **Icons**: Font Awesome for consistent iconography
- **Utilities**: clsx, tailwind-merge for conditional styling

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **Validation**: Zod for request/response validation
- **Development**: tsx for TypeScript execution, nodemon-like functionality

### Development Dependencies
- **Build Tools**: Vite with React plugin, esbuild for server bundling
- **TypeScript**: Full TypeScript configuration for both client and server
- **Linting**: ESLint configuration for code quality

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Server**: Hot reload with tsx for backend changes
- **Client**: Vite dev server with HMR for frontend changes
- **Database**: In-memory storage for quick development iterations

### Production Deployment
- **Build Process**: 
  1. `npm run build` - Vite builds client assets to `dist/public`
  2. esbuild bundles server code to `dist/index.js`
- **Runtime**: `npm start` runs production server from bundled code
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Static Assets**: Express serves built client files

### Replit Configuration
- **Modules**: Node.js 20, web server, PostgreSQL 16
- **Ports**: Development on 5000, production on 80
- **Deployment**: Autoscale deployment target with build/run commands
- **Environment**: Automatic PostgreSQL provisioning in production

## Changelog

Changelog:
- June 22, 2025. Initial setup - Complete professional pressure washing website built
- June 22, 2025. Removed emergency services at user request - cleaned up all references across services, contact form, and footer
- January 6, 2025. Updated business name to "DFW Pristine Power Washing" throughout the site
- January 6, 2025. Updated phone number to (817) 585-6388 and email to dfwpristinepowerwashing@gmail.com
- January 6, 2025. Created custom SVG logo resembling pressure washer wand with water streams
- January 6, 2025. Updated service area to focus on DFW Metro Area

## User Preferences

Preferred communication style: Simple, everyday language.