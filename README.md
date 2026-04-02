ATHA documentation website built with Next.js.

## Overview

This project provides a web documentation experience for ATHA with content aligned to the official repository and wiki.

## Features

- Standard documentation-style layout
- Sidebar section navigation
- Tailwind-based UI styling
- Mobile responsive design
- Content aligned with ATHA wiki pages

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

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

## Project Structure

- app/layout.tsx: global layout and metadata
- app/page.tsx: main documentation page content
- app/globals.css: global base styles and Tailwind import
- public/: static assets

## Content Source

Documentation content is based on:

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

This docs website project follows the repository license policy.

