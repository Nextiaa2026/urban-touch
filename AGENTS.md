# Urban Touch SARL — Agent & Project Guide

## Project Overview

**Urban Touch SARL** is a marketing and communication agency founded in 2021, based in Cameroon. This Next.js website serves as the company's digital presence, showcasing their services in marketing strategy, creative communication, branding, and custom service delivery.

The site is built as a static-first, SEO-optimized multi-page application with a bold, modern aesthetic reflecting the agency's urban identity.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **Next.js** | 15+ (App Router) | React framework, routing, SSR/SSG |
| **Tailwind CSS** | v4 | Utility-first styling |
| **shadcn/ui** | latest | Accessible UI component primitives |
| **Bun** | latest | Package manager & runtime |
| **TypeScript** | 5+ | Type safety |
| **next/font** | built-in | Optimized Google Fonts loading |

---

## Page Structure & Routes

```
/                   → Home (Hero section, CTA buttons)
/about              → About page (Company history, mission)
/services           → Services page (4 service cards grid)
/contact            → Contact page (Location, email, phone)
```

### Route Files

```
app/
├── layout.tsx          # Root layout — fonts, metadata, body wrapper
├── page.tsx            # / — Home / Hero
├── globals.css         # Global styles, Tailwind directives
├── about/
│   └── page.tsx        # /about — Company story
├── services/
│   └── page.tsx        # /services — Service offerings grid
└── contact/
    └── page.tsx        # /contact — Contact information
```

---

## Brand Guidelines

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Deep Purple (bg) | `#0d0118` | Page background |
| Deep Purple (accent) | `#1a0533` | Cards, overlays |
| Gold | `#f5a623` | Primary accent, headings, CTAs, active nav |
| White | `#ffffff` | Body text |
| White/60 | `rgba(255,255,255,0.6)` | Secondary text |
| White/30 | `rgba(255,255,255,0.3)` | Footer, muted text |

### Typography

| Font | Variable | Usage |
|------|----------|-------|
| **Raleway** | `--font-raleway` | Headings (`h1`, `h2`, `h3`), logo, nav brand |
| **Inter** | `--font-inter` | Body text, paragraphs, nav links |

Raleway weights loaded: `400`, `600`, `700`, `800`

Apply fonts via CSS variables:
```tsx
// Heading
className="font-[family-name:var(--font-raleway)] font-extrabold"

// Body (default via layout.tsx body class)
className="font-[family-name:var(--font-inter)]"
```

### Layout Pattern

Every page follows this structure:
```tsx
<div className="min-h-screen flex flex-col">
  <nav />          {/* Fixed top nav, backdrop blur */}
  <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20" />
  <footer />       {/* Border top, muted copyright */}
</div>
```

---

## Navigation

The nav is repeated on each page (no shared component — kept simple for now). Active link is highlighted in gold `text-[#f5a623]`; inactive links use `text-white/70 hover:text-[#f5a623]`.

Nav structure:
- Logo: "Urban Touch" (Raleway bold, gold, uppercase, tracking-widest)
- Links: Accueil · À propos · Services · Contact

---

## SEO & Metadata

Configured in `app/layout.tsx` via Next.js `Metadata` API:

- **title template**: `"%s | Urban Touch SARL"` — each page sets its own `title`
- **description**: French-language agency description
- **keywords**: marketing, communication, branding, Cameroun, etc.
- **openGraph**: `fr_CM` locale, `https://urbantouch.cm` URL
- **twitter**: `summary_large_image` card
- **robots**: `index: true, follow: true`

Each page exports its own `metadata` object to override the title slot.

---

## Development Commands

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Lint
bun run lint
```

Dev server runs at: `http://localhost:3000`

---

## Agent Workflow

When an AI agent works on this project, follow this flow:

### 1. Understand the Brand
- Colors: deep purple background + gold accents
- Tone: bold, modern, urban, French-language
- Target: Cameroonian businesses seeking marketing/communication services

### 2. Adding a New Page
1. Create `app/<route>/page.tsx`
2. Export `metadata` with `title` and `description`
3. Copy the nav + footer pattern from an existing page
4. Set the active nav link to `text-[#f5a623]` for the current route
5. Wrap main content in `flex-1 flex flex-col items-center justify-center text-center`

### 3. Adding a Shared Component
- Place in `components/` directory
- Use shadcn/ui primitives where applicable (`components/ui/`)
- Keep Tailwind classes consistent with brand colors

### 4. Styling Rules
- Background: always `bg-[#0d0118]` or transparent over it
- Cards: `bg-white/5 border border-white/10 rounded-2xl`
- Hover borders: `hover:border-[#f5a623]/40`
- Primary CTA: `bg-[#f5a623] text-[#0d0118] font-bold rounded-full`
- Secondary CTA: `border border-[#f5a623]/50 text-[#f5a623] rounded-full`

### 5. Font Usage
- Never use `font-sans` or `font-serif` — always use the CSS variable classes
- Headings must use `font-[family-name:var(--font-raleway)]`
- Body inherits Inter from the `<body>` class in `layout.tsx`

---

## File Ownership

| File | Owner | Notes |
|------|-------|-------|
| `app/layout.tsx` | Core | Do not remove font variables or metadata |
| `app/globals.css` | Core | Tailwind directives live here |
| `app/page.tsx` | Home | Hero section |
| `app/about/page.tsx` | About | Company story |
| `app/services/page.tsx` | Services | Service cards — extend the `services` array to add more |
| `app/contact/page.tsx` | Contact | Update contact details here |
| `AGENTS.md` | Docs | Keep updated when adding pages or changing brand |

---

*Urban Touch SARL — Donnez une touche urbaine à votre marque.*
