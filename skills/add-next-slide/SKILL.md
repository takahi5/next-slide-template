---
name: add-next-slide
description: Add a new slide or document to this Next.js slide framework from text instructions and attached files (PDF/image). Use when users ask to create slides based on prompts or source materials, while following existing repository rules. Reuse block types in data/schema.ts first; only create a new slideBlockSchema when no existing block can represent the requested layout/content.
---

# Add Next Slide

Implement slides in this repository from user instructions and source files while preserving schema-first rules and print-ready output.

## Workflow

1. Gather source inputs.
- Parse user instructions and any attached text/PDF/image materials.
- Extract only information needed for slide structure and copy.
- Keep unresolved assumptions explicit and choose conservative defaults.

2. Choose block strategy using `data/schema.ts`.
- Read `data/schema.ts` and compare requested content/layout with existing `slideBlockSchema` variants.
- Reuse existing block types whenever feasible.
- Create a new block schema only if existing types cannot represent the request without distortion.

3. Implement data updates.
- Add or update a document file under `data/documents/*.ts`.
- Register the document in `data/documents/index.ts`.
- If introducing a new block type, update:
  - `data/schema.ts` (new schema + `slideBlockSchema` union)
  - `data/types.ts` if type exports need extension
  - `components/slide-block-renderer.tsx` (render logic)
  - `app/documents/slide-theme-default.css` or `app/documents/slide-framework.css` for styles

4. Validate and fix.
- Run `pnpm lint`.
- Run `pnpm build` to enforce zod validation and compile checks.
- Resolve all errors before browser verification.

5. Verify in browser with `agent-browser`.
- Start app: `pnpm dev`.
- Open list page: `agent-browser open http://localhost:3000/documents`.
- Open target page: `agent-browser open http://localhost:3000/documents/<documentId>`.
- Run `agent-browser snapshot -i` and confirm expected headings, text, and image presence.
- Capture evidence: `agent-browser screenshot --full`.

## Attachment Handling

- For PDF/image inputs, derive content first, then map content to blocks.
- Preserve factual content from source files; improve only wording clarity and structure for slide readability.
- If a source implies a layout not covered by existing blocks, add one new block type with minimal fields required for that layout.

## Quality Rules

- Keep document IDs and slide IDs lowercase kebab-case.
- Prefer one block per slide unless the request clearly requires multiple blocks.
- Keep slide text concise for print readability.
- Use assets under `public/` and reference via absolute paths like `/images/...`.

## Quick Commands

```bash
pnpm lint
pnpm build
pnpm dev
agent-browser open http://localhost:3000/documents
agent-browser open http://localhost:3000/documents/<documentId>
agent-browser snapshot -i
agent-browser screenshot --full
```

## References

- Read `references/slide-block-catalog.md` before deciding whether to add a new block schema.
