# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

Interactive web app with solutions to "Exercises for Programmers" by Brian P. Hogan. 57 exercises across 10 chapters (02–10), each implemented as a Next.js page.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

No test framework is configured.

## Architecture

**Tech stack**: Next.js 16, React 19, TypeScript 5 (strict), Semantic UI React 3 (beta), styled-components 6, `marked` (for markdown rendering).

**Routing**: App Router. Exercise pages live under `src/app/[chapter]/[exercise-name]/page.tsx`. The chapter folders use numeric prefixes matching the book (e.g. `02-input-processing-and-output/`). The home page is `src/app/page.tsx`.

**Semantic UI CSS**: The CSS is kept as a local file at `src/app/semantic.css` (with bundled fonts/images under `src/app/themes/`) rather than imported from the `semantic-ui-css` npm package. This is required because the npm package's minified CSS contains a selector that Turbopack's strict CSS parser rejects.

**Component hierarchy**:
- `Exercises` — category container; provides color and folder path via `ExercisesContext` to children (`'use client'`)
- `Exercise` — individual link on the home page; reads context for its href (`'use client'`)
- `Solution` — page wrapper for every exercise page; fetches and renders a markdown problem statement (passed via `markdown` prop) into a modal on demand; handles back-navigation via `useRouter` from `next/navigation` (`'use client'`)

**API routes**: `src/app/api/` contains Next.js route handlers that proxy external services — weather, Flickr, movie recommendations, and ISS occupancy — used by exercises in chapters 09–10.

**Patterns**:
- All three components and all exercise pages are client components (`'use client'`) due to React hooks usage.
- Each exercise page manages its own state with `useState` and renders a `<Solution>` wrapper.
- Output state starts as `null` and is conditionally rendered only after the user submits.
- Calculations run in `onClick` handlers, not during render. Constants (conversion factors, lookup tables) are defined at module level.
- `Exercise` uses `next/link`'s `<Link>` for navigation (not `Grid.Column as="a"`, which doesn't produce a real anchor).
- Text inputs call `.trim()` on `event.target.value` in `onChange` so whitespace-only strings don't pass the empty-check guard on the submit button.
- Number-input pages guard against `isNaN` after parsing and handle domain errors (e.g. division by zero, retirement age ≤ current age) with a user-facing message rather than a crash.
- Semantic UI `Grid` layouts use `stackable` and `doubling` for responsive behaviour.
- Component prop types live in co-located `.types.ts` files.
- `src/components/index.ts` re-exports all components; prefer importing from there.
- Path alias `@/*` maps to `src/*`.
- `.npmrc` sets `legacy-peer-deps=true` — required because `semantic-ui-react@3.0.0-beta.2` declares peer deps against React 16–18, but the project uses React 19.
