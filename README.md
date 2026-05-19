# daybyday

> Personal blog built with Astro — minimal, fast, with dark mode.

## Tech Stack

- **[Astro](https://astro.build) v5** — Static site generator with islands architecture
- **[React](https://react.dev) 19** — Interactive components (dropdown menu, theme toggle)
- **[Tailwind CSS](https://tailwindcss.com) v4** — Utility-first styling
- **[Headless UI](https://headlessui.com) + [Heroicons](https://heroicons.com)** — Accessible UI primitives and icons
- **TypeScript** — Full type safety

## Getting Started

```bash
# Install dependencies (uses bun)
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

Dev server runs at `http://localhost:3010`.

## Project Structure

```
src/
├── assets/         # Static assets (images, video)
├── components/     # Astro components
│   ├── ArrowCard.astro
│   ├── BackToButton.astro
│   ├── Container.astro
│   ├── DropdownMenuNoJs.astro   # No-JS fallback menu
│   ├── Footer.astro
│   ├── GlobalHead.astro         # SEO, theme, scroll handling
│   ├── Header.astro             # Navigation header
│   ├── HeaderLink.astro         # Active-aware nav link
│   ├── HeaderList.astro
│   ├── Link.astro               # External/internal link handler
│   ├── Masthead.astro           # Homepage hero section
│   ├── TagsArrowCard.astro      # Tag navigation list
│   └── ThemeToggleButtonNoJs.astro
├── content/
│   ├── blog/        # Markdown blog posts
│   └── config.ts    # Content collection schema
├── layouts/
│   ├── BaseLayout.astro       # Root HTML shell
│   └── MarkdownLayout.astro   # Blog post layout
├── lib/
│   ├── DropdownMenu.tsx       # React dropdown (JS-enabled)
│   ├── ThemeToggleButton.tsx  # React theme toggle (JS-enabled)
│   └── utils/
│       └── post.ts            # Post collection helpers
├── pages/
│   ├── 404.astro
│   ├── index.astro            # Homepage
│   ├── blog/
│   │   ├── index.astro        # Blog listing
│   │   └── [...slug].astro    # Individual post
│   ├── tags/
│   │   └── [tag].astro        # Posts by tag
│   └── year/
│       └── [year].astro       # Posts by year
└── styles/
    ├── app.css                # Tailwind entry point
    └── global.css             # Base body styles
```

## Scripts

| Script | Description |
|---|---|
| `dev` | Start dev server on port 3010 |
| `build` | Production build |
| `preview` | Preview production build |
| `check` | Run Astro type checking |
| `eslint` | Lint source files |
| `prettier` | Check formatting |
| `lint` | Run lint-staged (eslint + prettier) |

## Features

- **Dark mode** — System-aware with manual toggle, persists to localStorage
- **No-JS fallbacks** — Navigation menu and theme toggle work without JavaScript
- **Tags** — Posts organized by tag with dedicated pages
- **Year archives** — Browse posts by publication year
- **RSS ready** — `@astrojs/rss` installed (feed not yet configured)
- **Sitemap** — Auto-generated via `@astrojs/sitemap`
- **View Transitions** — SPA-like page transitions

## License

MIT
