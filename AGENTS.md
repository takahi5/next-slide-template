# Repository Guidelines

## Project Structure & Module Organization

This repository is a single Next.js app at the project root.

- `app/`: App Router pages and layouts (`/documents`, `/documents/[documentId]`).
- `components/`: Rendering components for slides and document UI.
- `data/`: Typed content model (`schema.ts`, `types.ts`) and document definitions in `data/documents/*.ts`.
- `public/`: Static assets and sample images.
- `README.md`: Product usage details (document format, print setup).

Add new documents as `.ts` files in `data/documents/` and register them in `data/documents/index.ts`.

## Build, Test, and Development Commands

Run commands from the project root:

- `pnpm install`: Install dependencies.
- `pnpm dev`: Start local dev server (Next.js with webpack) at `http://localhost:3000`.
- `pnpm build`: Production build; also catches Zod schema/content validation issues.
- `pnpm start`: Run the production server.
- `pnpm lint`: Run ESLint across the codebase.

## Coding Style & Naming Conventions

- Language: TypeScript (`.ts`/`.tsx`), React 19, Next.js App Router.
- Indentation: 2 spaces; keep imports grouped and consistent.
- Components: `PascalCase` filenames when exporting a named UI component; utilities/data files use `kebab-case`.
- Document IDs and route slugs: lowercase `kebab-case` (example: `marketing-proposal`).
- Keep schema-first discipline: update `data/schema.ts` and types before adding new block shapes.
- For styles under `app/documents`, separate document-specific CSS from shared/common CSS.

## Testing Guidelines

There is no dedicated test runner configured yet. Use these checks before opening a PR:

- `pnpm lint`
- `pnpm build`

For content changes, verify pages manually:

- `/documents`
- `/documents/<documentId>`
- Browser print preview (A4 landscape, background graphics enabled).

Use agent-browser skill for browser test.
Confirm the layout is same as expected by browser.

## Commit & Pull Request Guidelines

Recent commits use concise, imperative subjects (example: `Refactor HomePage to redirect to documents`).

- Keep subject lines focused on one change.
- Prefer one logical change per commit.

PRs should include:

- Clear summary of behavior/UI changes.
- Linked issue/task when applicable.
- Screenshots for visual updates (especially slide layout/print output).
- Notes on any schema or document format changes.

## Security & Configuration Tips

- Do not commit secrets; this project currently relies on local environment defaults.
- Treat `data/documents/*` as user-facing content; validate all additions through `pnpm build`.

## Project-Specific Skills

- `add-next-slide` (`.agents/skills/add-next-slide/SKILL.md`): Add new slides/documents from text instructions or attached PDF/image sources while following this repository's schema-first rules. Reuse existing `slideBlockSchema` in `data/schema.ts` first; add a new block schema only when required.
