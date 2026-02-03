# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

agni labs consulting website - a Next.js 16 / React 19 site showcasing AI consulting services. Uses Tailwind CSS v4, TypeScript, and Vercel Analytics.

## Commands

```bash
bun dev           # Start development server on :3000
bun run build     # Production build
bun run lint      # Run ESLint
bun run typecheck # TypeScript type checking
```

_Note: Assume I have the local dev server running for you_

## Architecture

**App Router Structure** (`src/app/`):

- `layout.tsx` - Root layout with metadata, fonts (Geist), analytics, JSON-LD schemas
- `page.tsx` - Home page rendering `ConsultingLanding`
- `team/page.tsx` - Team/founder page
- `robots.ts`, `sitemap.ts` - SEO generation

**Components** (`src/components/`):

- `consulting-landing.tsx` - Main landing page (server component)
- `consulting-client.tsx` - Client wrapper with custom cursor, service cards ("use client")
- `team-page.tsx` - Founder bio and details
- `shared/` - Navigation, Footer (reused across pages)
- `ui/` - Small reusable primitives (CTAButton, FooterLink, FooterSectionHeader)

**Configuration** (`src/config/site.ts`):
Centralized hub for all site content - metadata, services, founder info, social links. Edit here for content changes.

## Key Patterns

- **Server Components by default** - Only mark "use client" when needed (interactivity, browser APIs)
- **Path alias**: `@/*` maps to `src/*`
- **Styling**: Tailwind CSS v4 utilities + CSS custom properties in `globals.css` for theming
- **React Compiler enabled** - Automatic memoization optimization
- **Remote images**: Hosted on `trqxlmj192.ufs.sh` (configured in next.config.ts)

## Design System

- Primary color: `#FF4E02` (orange)
- Font: Geist (sans + mono)
- Responsive breakpoint: 768px
- Typography uses `clamp()` for fluid scaling
