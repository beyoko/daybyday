# Contributing to DayByDay

Thank you for your interest in contributing! This document outlines the guidelines for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone git@github.com:YOUR_USERNAME/daybyday.git`
3. Install dependencies: `bun install` (or `npm install`)
4. Start dev server: `bun run dev` (or `npm run dev`)

## Development Workflow

- Create a feature branch from `main`: `git checkout -b feat/your-feature`
- Make changes following the existing code style
- Test your changes: `bun run build`
- Commit using clear, concise messages (see style below)
- Push and open a Pull Request

## Commit Style

This project uses short, descriptive commit messages:

```
docs       # documentation changes
config     # configuration changes
fix        # bug fixes
feat       # new features
refactor   # code restructuring
css        # styling changes
docker     # Docker/infrastructure changes
```

Examples: `fix post cache`, `add dark mode`, `update deps`

## Code Style

- **TypeScript**: Strict mode enabled. Avoid `any` and `@ts-ignore`.
- **Astro**: Follow existing component patterns (`.astro` files)
- **React**: Use functional components with hooks
- **CSS**: Tailwind v4 utility classes preferred
- **Formatting**: Run `bun run prettier` before committing

## Pull Request Process

1. Ensure your branch is up to date with `main`
2. Run `bun run build` to verify no errors
3. Fill out the PR template with details of your changes
4. A maintainer will review your PR

## Reporting Issues

When reporting bugs, include:
- Expected behavior vs actual behavior
- Steps to reproduce
- Screenshots if applicable
- Environment info (OS, browser, Node version)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
