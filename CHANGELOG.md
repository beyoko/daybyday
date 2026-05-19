# Changelog

All notable changes to DayByDay will be documented in this file.

## [0.1.0] - 2026-05-19

### Added
- Build script (`astro build`) in package.json
- Security headers (CSP, XFO, nosniff, Referrer-Policy, Permissions-Policy) in vercel.json
- Content schema validation: `heroImage`, `heroImageAlt`, pubDate refinement, tags minimum
- Error handling in post.ts with try/catch and empty array fallback
- Draft tag filtering in TagsArrowCard
- Props default values for HeaderLink, Link, BackToButton components
- ICONS fallback in DropdownMenu
- Open-source standard files: README.md, CONTRIBUTING.md, CHANGELOG.md, PR template

### Fixed
- HMR cache cleanup: undefined `processedCache` → `cachedPosts`
- MarkdownLayout title rendering: `[object Object]` → `blog.data.title`
- Typo `font-blod` → `font-bold` in 404.astro (2 occurrences)
- Typo `item-center` → `items-center` in Masthead.astro
- `Astro.site` null reference in GlobalHead with fallback
- Removed broken `name="keywords"` meta tag
- `blog.body.slice` null crash with optional chaining
- Dockerfile: added `--production` flag, fixed healthcheck

### Changed
- Site URL from `http://localhost:3010` to `https://yourdomain.com` (placeholder)
- Version bumped from 0.0.6 to 0.1.0

### Removed
- Unused `sharpImageService` import from astro.config.mjs
- `READMD.md` (renamed to TODO.md for internal notes)
