# Callatis Press - Local News Website

## Overview

Callatis Press is a Romanian local news website focused on delivering news from Constanța, Mangalia, and the surrounding region. The application presents news articles across multiple categories (Politics, Social, Economy, Events, Sports, Culture, Video, Announcements) with a modern, responsive design inspired by NewsFlash and Golazo.ro themes. The site features a full-screen hero article presentation, categorized news browsing, search functionality, and embedded video content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **State Management:** TanStack Query (React Query) for server state
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Shadcn/ui (Radix UI primitives with custom styling)

**Design System:**
- Custom color palette with light blue navy primary theme and yellow accent
- CSS variables for theming (supports light/dark modes)
- Responsive breakpoints (mobile-first approach, 768px tablet breakpoint)
- Custom animations (hero entry animation, hover effects)
- Typography: Inter for body text, Merriweather for headings

**Component Structure:**
- Page components in `client/src/pages/` (Home, NotFound)
- Reusable UI components in `client/src/components/ui/` (Shadcn/ui library)
- Feature components in `client/src/components/` (Header, CategoriesBar, HeroArticle, NewsCard, VideoSection)
- Custom hooks in `client/src/hooks/` (use-mobile, use-toast)

**Key Features:**
- Full-screen hero article with background image and text overlay
- Horizontal scrollable category navigation bar
- Card-based news layout with category filtering
- Search dialog with live results
- Video section with embedded YouTube content
- Responsive design (mobile and desktop optimized)

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with Express.js
- **Language:** TypeScript (ES Modules)
- **Build Tool:** Vite for frontend, esbuild for backend
- **Development:** tsx for TypeScript execution in dev mode

**API Structure:**
- RESTful API endpoints under `/api` prefix
- Article retrieval: `GET /api/articles` (with optional category query param)
- Featured article: `GET /api/articles/featured`
- Search: `GET /api/articles/search?q={query}`
- Single article: `GET /api/articles/:id`

**Storage Layer:**
- Currently using in-memory storage (`MemStorage` class) with seeded Romanian news data
- Defined storage interface (`IStorage`) for easy swapping to database implementation
- Pre-seeded with Constanța-relevant news articles (mayor arrest, port investments, sports, social events)

**Server Features:**
- Request/response logging middleware
- JSON body parsing
- Static file serving in production
- Vite dev server integration in development (HMR support)
- Error handling middleware

### Data Storage Solutions

**Current Implementation:**
- In-memory Map-based storage for development/testing
- Seeded with realistic Romanian local news content

**Database Schema (Configured but not yet connected):**
- **ORM:** Drizzle ORM
- **Dialect:** PostgreSQL (via @neondatabase/serverless)
- **Schema Definition:** `shared/schema.ts`
  - Articles table with fields: id, title, slug, category, summary, content, imageUrl, author, publishedAt, isFeatured, videoUrl
  - Category enum: 9 predefined categories
  - Zod validation schemas for type safety

**Migration Setup:**
- Drizzle Kit configured for schema migrations
- Migration output directory: `./migrations`
- Push command available: `npm run db:push`

### External Dependencies

**Third-party Services:**
- **Neon Database:** Serverless PostgreSQL (configured, requires DATABASE_URL environment variable)
- **YouTube:** Video embedding via iframe (embedded Constanța news videos)
- **Google Fonts:** Inter and Merriweather font families

**Key Libraries:**
- **UI Components:** 30+ Radix UI primitives (@radix-ui/*)
- **Form Handling:** React Hook Form with Zod resolvers
- **Date Handling:** date-fns with Romanian locale
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge, class-variance-authority

**Development Tools:**
- Replit-specific plugins (runtime error modal, cartographer, dev banner)
- PostCSS with Tailwind CSS and Autoprefixer
- TypeScript strict mode enabled

**Asset Management:**
- Static assets stored in `attached_assets/` directory
- Logo image and stock photos for news articles
- Vite alias configuration for easy imports (@/, @shared, @assets)