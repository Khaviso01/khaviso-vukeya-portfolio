# Khaviso Vukeya — Portfolio

Personal portfolio site for **Khaviso Vukeya** — Data Analyst & Developer.
Built with React, TypeScript, and Vite, styled with a single global stylesheet (no CSS modules, no Tailwind).

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — build tool & dev server
- Plain **global CSS** (`src/index.css`) — design tokens, layout, and components all in one file
- No UI framework or component library — everything is hand-built

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check + build for production
npm run build

# preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Project structure

```
src/
├── components/        # One component per page section
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts   # All site content lives here (profile, skills, projects, etc.)
├── lib/
│   └── scroll.ts       # Smooth in-page anchor scrolling helper
├── index.css           # Global stylesheet — design tokens + all component styles
├── App.tsx             # Composes all sections
└── main.tsx             # App entry point
```

## Editing content

Everything you'd want to change day-to-day lives in **`src/data/portfolio.ts`**:

- `profile` — name, role, bio, contact details, social links
- `values` — the three "what I focus on" cards in About
- `skillGroups` — skills grouped by category
- `projects` — featured project cards (add a real `href` once you have project links)
- `education` / `experience` — timeline entries
- `certifications` — certification cards
- `navLinks` — nav bar items

## Styling

All styles live in `src/index.css`, organized top-to-bottom as:

1. **Design tokens** (`:root`) — colors, fonts, spacing scale, shadows
2. **Reset** — base element resets
3. **Layout primitives** — `.wrap`, `.section`, `.frame`
4. Section-by-section component styles (Nav, Hero, About, Skills, Projects, Experience, Certifications, Contact, Footer)

To retheme the site, start by editing the CSS variables at the top of the file.

## Deployment

This is a static Vite app — `npm run build` outputs a `dist/` folder that can be deployed to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

## License

© 2026 Khaviso Vukeya. All rights reserved.
