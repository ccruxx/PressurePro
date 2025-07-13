# DFW Pristine Power Washing - Professional Pressure Washing Website

## Overview

DFW Pristine Power Washing is a modern, responsive single-page application (SPA) for a professional pressure washing service business serving the Dallas-Fort Worth metro area. The application features a clean, professional design with sections for services, gallery, testimonials, about information, and direct contact methods. It's built with React, TypeScript, and optimized for static deployment on Vercel. The site focuses on direct customer contact via phone and email buttons rather than complex forms.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Styling**: Modern design system with custom CSS variables and responsive layout
- **Router**: Wouter for lightweight client-side routing
- **Form Handling**: Direct contact methods with client-side validation using Zod

### Static Deployment Architecture
- **Deployment**: Optimized for static hosting on Vercel
- **Build Tool**: Vite for optimized static asset generation
- **Contact Method**: Direct phone and email links (no backend required)
- **Form Handling**: Client-side validation with Zod (no server submission)

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

### Static Components
1. **Contact System**
   - Direct phone and email buttons for immediate contact
   - No backend submission required
   - Client-side form validation with Zod schemas

2. **Asset Management**
   - Optimized images and media in attached_assets folder
   - Static file serving via Vite build process

## Data Flow

### Contact System
1. User views contact information and service details
2. User clicks phone button to call directly: (817) 585-6388
3. User clicks email button to send email: joshuacllns@yahoo.com
4. No form submission or backend processing required

### Content Rendering
1. Static content renders immediately on page load
2. Smooth scrolling navigation between sections
3. Responsive image loading with optimized sizes
4. Interactive elements with hover and focus states

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI & Styling**: Tailwind CSS, shadcn/ui components, Radix UI primitives
- **Validation**: Zod for client-side form validation
- **Icons**: Font Awesome for consistent iconography
- **Utilities**: clsx, tailwind-merge for conditional styling
- **Routing**: Wouter for lightweight client-side routing

### Development Dependencies
- **Build Tools**: Vite with React plugin, esbuild for server bundling
- **TypeScript**: Full TypeScript configuration for both client and server
- **Linting**: ESLint configuration for code quality

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` (now runs Vite directly)
- **Client**: Vite dev server with HMR for frontend changes
- **No Backend**: Static-only development workflow

### Production Deployment
- **Build Process**: `npm run build` - Vite builds static assets to `dist/public`
- **Deployment**: Optimized for Vercel static hosting
- **Output**: Static HTML, CSS, and JS files
- **No Runtime**: Pure static site, no server required

### Vercel Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Framework**: Vite (React)
- **No Environment Variables**: No backend dependencies

## Changelog

Changelog:
- June 22, 2025. Initial setup - Complete professional pressure washing website built
- June 22, 2025. Removed emergency services at user request - cleaned up all references across services, contact form, and footer
- January 6, 2025. Updated business name to "DFW Pristine Power Washing" throughout the site
- January 6, 2025. Updated phone number to (817) 585-6388 and email to joshuacllns@yahoo.com
- January 6, 2025. Created custom SVG logo resembling pressure washer wand with water streams
- January 6, 2025. Updated service area to focus on DFW Metro Area
- January 13, 2025. Converted project to static frontend-only for Vercel deployment
- January 13, 2025. Removed SendGrid, Express server, database dependencies, and React Query
- January 13, 2025. Simplified contact system to direct phone and email links
- January 13, 2025. Updated build configuration for static deployment

## User Preferences

Preferred communication style: Simple, everyday language.