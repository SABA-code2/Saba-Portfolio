# Portfolio Application

## Overview

This is a full-stack portfolio web application built with React and Express. It features a modern, responsive design showcasing a developer's work, skills, and background with an integrated contact form. The application uses a clean, component-based architecture with TypeScript throughout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with a comprehensive design system
- **UI Components**: shadcn/ui component library for consistent, accessible components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Storage**: Currently using in-memory storage with interface for easy database integration

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Footer with social links
- **Section Components**: Hero, About, Projects, Skills, Education, Contact
- **UI Components**: Complete shadcn/ui component library (buttons, forms, dialogs, etc.)
- **Theme System**: Dark/light mode support with custom color variables

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission
- **Storage Interface**: Abstracted storage layer for data persistence
- **Validation**: Zod schemas for type-safe data validation
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod validation schemas
- **Database Schema**: Drizzle ORM table definitions for PostgreSQL

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form with validation
   - Form data validated client-side using react-hook-form + Zod
   - Data sent to `/api/contacts` endpoint
   - Server validates data using shared schema
   - Contact stored in database/memory
   - Success/error feedback displayed to user

2. **Static Content**:
   - Portfolio sections render static content
   - Theme preferences stored in localStorage
   - Smooth scrolling navigation between sections

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets

### Development and Build
- **TypeScript**: Type safety across the stack
- **Vite**: Build tool and dev server
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

### Database and Validation
- **Drizzle ORM**: TypeScript-first ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider
- **Zod**: Schema validation library

### Forms and State
- **React Hook Form**: Form library with validation
- **React Query**: Server state management
- **Date-fns**: Date utility library

## Deployment Strategy

The application is configured for deployment on Replit with:

- **Development**: `npm run dev` - Runs Express server with Vite middleware
- **Production Build**: `npm run build` - Builds client and server bundles
- **Production Start**: `npm run start` - Serves built application
- **Database**: `npm run db:push` - Pushes schema changes to database

### Build Configuration
- Client builds to `dist/public` for static file serving
- Server builds to `dist/index.js` as ESM bundle
- Vite configured for client-side development with HMR
- Express serves static files in production mode

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required for database operations)
- `NODE_ENV`: Environment mode (development/production)

The application uses a hybrid approach where the database schema is defined but currently uses in-memory storage, making it easy to switch to full database persistence by updating the storage implementation.