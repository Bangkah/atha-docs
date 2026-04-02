ATHA product landing page built with Next.js.

## Overview

This project provides a product-focused landing experience for ATHA, with official docs and links as supporting resources.

Official one-line pitch:

ATHA makes Arch Linux package operations safer, clearer, and reviewable.

Brand voice principles:

- Direct
- Practical
- Trustworthy

## Features

- Product landing page positioning
- Sidebar section navigation
- Tailwind-based UI styling
- Mobile responsive design
- Conversion-focused sections and sticky CTA
- DataLayer-based analytics events (CTA click + scroll depth)
- Built-in brand guide section for messaging consistency

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript
- Optional GTM + GA4 integration

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

Open http://localhost:3000.

## Available Scripts

- npm run dev: start local development server
- npm run build: create production build
- npm run start: run production server
- npm run lint: run eslint checks

## Analytics

This project emits engagement events to `window.dataLayer`:

- `atha_cta_click`
- `atha_scroll_depth`

Set `NEXT_PUBLIC_GTM_ID` to auto-load GTM script bootstrap from app layout.

Detailed mapping guide for GTM and GA4:

- docs/analytics-gtm.md

## Brand Guide

Landing page includes a dedicated brand guide section with:

- One-line product pitch
- Tone principles
- Logo usage rules

Official reference:

- https://github.com/Bangkah/Atha/wiki/Brand-Guidelines
- docs/brand-copy-cheatsheet.md

## Project Structure

- app/layout.tsx: global layout and metadata
- app/page.tsx: main landing page composition
- app/globals.css: global base styles and Tailwind import
- components/docs/analytics.ts: dataLayer event helpers
- components/docs/TrackedLink.tsx: tracked CTA links
- components/docs/ScrollDepthTracker.tsx: scroll milestone events
- public/: static assets

## Content Source

Content is based on official ATHA sources:

- GitHub repository: https://github.com/Bangkah/Atha
- Wiki: https://github.com/Bangkah/Atha/wiki
- AUR package page: https://aur.archlinux.org/packages/atha

## Deployment

Recommended deployment target: Cloudflare Pages.

Suggested settings:

- Framework preset: Next.js
- Build command: npx @cloudflare/next-on-pages@1
- Build output directory: .vercel/output/static
- Production branch: main

## License

This landing page project follows the upstream ATHA repository license policy (MIT).

