# Contraceptive.AI

## Overview

Contraceptive.AI is a healthcare marketplace web application that helps users compare telehealth providers for contraceptive care. The platform displays provider information including pricing, services, reviews, availability, and insurance coverage. Users can filter providers based on various criteria and view detailed provider profiles.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Design System**: Custom design guidelines emphasizing medical credibility with clean, professional layouts inspired by Stripe, Airbnb, and ZocDoc

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful JSON API with `/api` prefix
- **Build Process**: esbuild for server bundling, Vite for client bundling

### Data Layer
- **Schema Validation**: Zod for runtime type validation
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Current Storage**: In-memory storage implementation (can be migrated to PostgreSQL)
- **Schema Location**: `shared/schema.ts` contains all type definitions

### Key Design Patterns
- **Monorepo Structure**: Client code in `client/`, server in `server/`, shared types in `shared/`
- **Path Aliases**: `@/` for client source, `@shared/` for shared modules
- **Component Architecture**: Atomic design with reusable UI components in `components/ui/`
- **Theme System**: CSS custom properties with light/dark mode toggle via ThemeProvider context

### Page Structure
- **Home**: Provider listing with filtering sidebar, hero section
- **Provider Profile**: Detailed provider view with tabs for pricing, reviews, FAQ
- **About**: Static informational page

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations stored in `./migrations`

### UI Framework Dependencies
- **Radix UI**: Full suite of accessible primitives (dialog, accordion, tabs, etc.)
- **Embla Carousel**: For carousel components
- **Recharts**: For chart/data visualization components
- **Lucide React**: Icon library

### Build & Development
- **Vite**: Development server with HMR and production builds
- **Replit Plugins**: Development banner and error overlay for Replit environment
- **tsx**: TypeScript execution for development server

### Core Libraries
- **react-hook-form**: Form handling with `@hookform/resolvers`
- **date-fns**: Date manipulation
- **class-variance-authority**: Component variant management
- **tailwind-merge/clsx**: Utility class merging