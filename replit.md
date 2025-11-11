# DFW Pristine Power Washing - Professional Pressure Washing Website

## Overview

DFW Pristine Power Washing is a comprehensive, SEO-optimized multi-page website for a professional pressure washing service serving the Dallas-Fort Worth metro area. Built as a React SPA with client-side routing, the site features 20+ pages including service pages, city landing pages, and an about page. The application is fully optimized for search engines with structured data, proper meta tags, internal linking, and local SEO targeting 15 DFW cities. It's built with React, TypeScript, react-helmet-async for SEO, and optimized for static deployment on Vercel.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Styling**: Modern design system with custom CSS variables and responsive layout
- **Router**: Wouter for lightweight client-side routing
- **SEO Management**: react-helmet-async for dynamic meta tags and schema markup
- **Form Handling**: Direct contact methods with client-side validation using Zod

### SEO Architecture
- **Meta Tags**: Dynamic title, description, Open Graph, and Twitter Card tags on all pages
- **Structured Data**: Schema.org JSON-LD markup (LocalBusiness, Service, Breadcrumbs)
- **Technical SEO**: robots.txt, sitemap.xml, canonical URLs, HSTS headers
- **Content Strategy**: 6 service pages, 15 city landing pages, about page with E-E-A-T content
- **Internal Linking**: Header/footer navigation, cross-linking between services and cities
- **Local SEO**: City-specific landing pages with local content and NAP consistency

### Static Deployment Architecture
- **Deployment**: Optimized for static hosting on Vercel
- **Build Tool**: Vite for optimized static asset generation
- **Contact Method**: Direct phone and email links (no backend required)
- **Form Handling**: Client-side validation with Zod (no server submission)

## Key Components

### Frontend Components
1. **Layout Components**
   - Header with sticky navigation, Services and Service Areas dropdown menus
   - Footer with NAP block, service links, city links, and Google Maps embed

2. **Page Components**
   - Homepage with LocalBusiness schema and serving cities band
   - About page with E-E-A-T content (experience, credentials, guarantees)
   - 6 service pages with Service schemas and internal linking
   - Services index page listing all services
   - 15 city landing pages using CityPageTemplate component
   - Service areas index page listing all cities

3. **SEO Components**
   - SEOHead: Manages meta tags, Open Graph, Twitter cards, canonical URLs
   - SchemaOrg: Injects JSON-LD structured data
   - CityPageTemplate: Reusable template for city landing pages

4. **Section Components**
   - Hero section with call-to-action buttons
   - ServingCities: Band of city links below hero
   - Services showcase with feature cards
   - Gallery with before/after comparisons
   - Testimonials with customer reviews
   - Contact form with validation

5. **UI Components**
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
- **React Ecosystem**: React, React DOM, React Hook Form, react-helmet-async
- **UI & Styling**: Tailwind CSS, shadcn/ui components, Radix UI primitives
- **Validation**: Zod for client-side form validation
- **Icons**: Lucide React for UI icons, Font Awesome for contact icons
- **Utilities**: clsx, tailwind-merge for conditional styling
- **Routing**: Wouter for lightweight client-side routing

### Development Dependencies
- **Build Tools**: Vite with React plugin, esbuild for server bundling
- **TypeScript**: Full TypeScript configuration for both client and server
- **Linting**: ESLint configuration for code quality

## Deployment Strategy

### Development Environment
- **Command**: `npx vite --host 0.0.0.0 --port 5000` (runs Vite directly)
- **Client**: Vite dev server with HMR for frontend changes
- **No Backend**: Static-only development workflow
- **Port**: 5000 (to match Replit's expected port)

### Production Deployment
- **Build Process**: `npm run build` - Vite builds static assets to `dist/public`
- **Deployment**: Optimized for Vercel static hosting
- **Output**: Static HTML, CSS, and JS files
- **No Runtime**: Pure static site, no server required

### Vercel Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Framework**: Vite (React)
- **Redirects**: Non-www to www canonicalization (dfwpristine.com → www.dfwpristine.com)
- **Headers**: HSTS (Strict-Transport-Security) for enhanced security
- **No Environment Variables**: No backend dependencies

## Changelog

Changelog:
- June 22, 2025. Initial setup - Complete professional pressure washing website built
- June 22, 2025. Removed emergency services at user request - cleaned up all references across services, contact form, and footer
- January 6, 2025. Updated business name to "DFW Pristine Power Washing" throughout the site
- January 6, 2025. Updated phone number to (817) 585-6388 and email to joshua.dfwpristine@gmail.com
- January 6, 2025. Created custom SVG logo resembling pressure washer wand with water streams
- January 6, 2025. Updated service area to focus on DFW Metro Area
- January 13, 2025. Converted project to static frontend-only for Vercel deployment
- January 13, 2025. Removed SendGrid, Express server, database dependencies, and React Query
- January 13, 2025. Simplified contact system to direct phone and email links
- January 13, 2025. Updated build configuration for static deployment
- January 13, 2025. Cleaned up server files and dependencies to match static-only architecture
- January 13, 2025. Fixed development workflow to use Vite directly on port 5000
- November 11, 2025. **Comprehensive SEO Optimization Implementation**:
  - Installed react-helmet-async for dynamic SEO meta management
  - Created SEO infrastructure (SEOHead, SchemaOrg components, seo-constants, schema-helpers)
  - Built robots.txt and sitemap.xml with all canonical URLs
  - Created 6 service pages with full SEO (pressure-washing, house-washing, roof-cleaning, driveway-concrete-cleaning, commercial-pressure-washing, window-cleaning)
  - Created services index page listing all services
  - Built 15 city landing pages using CityPageTemplate (Midlothian, Waxahachie, Cedar Hill, Mansfield, Red Oak, Ovilla, Venus, Arlington, Grand Prairie, Irving, Dallas, Fort Worth, Burleson, DeSoto, Ennis)
  - Created service areas index page listing all cities
  - Created About page with E-E-A-T content (experience, credentials, guarantees)
  - Updated homepage with SEO meta tags, LocalBusiness schema, and serving cities band
  - Updated header with Services and Service Areas dropdown menus
  - Updated footer with NAP block, service/city links, and Google Maps embed
  - Implemented comprehensive internal linking between all pages
  - Added Schema.org structured data (LocalBusiness, Service, Breadcrumbs)
  - Configured Vercel redirects for www canonicalization
  - Created GBP post templates and keyword CSV for marketing
  - All pages tested and verified via end-to-end Playwright tests
- November 11, 2025. **Senior SEO Engineer Audit & Fixes**:
  - Fixed canonical host to non-www (dfwpristine.com) across all configurations
  - Enhanced canonical URL normalization (trailing slash removal, query string stripping)
  - Updated Vercel redirects to enforce www → non-www canonicalization
  - Created unique local content for all 15 city pages (100-150 words each)
  - Added nearby city cross-linking (2 unique cities per page)
  - Created automated sitemap generation script (25 URLs total)
  - Scoped JSON-LD to prevent duplication (LocalBusiness only on homepage)
  - Enhanced SEOHead with OG/Twitter card defaults
  - Created placeholder for og-default.jpg (needs 1200x630 image)
  - Documented large image files for optimization (6.5MB largest file)

## User Preferences

Preferred communication style: Simple, everyday language.