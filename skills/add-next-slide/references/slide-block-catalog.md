# Slide Block Catalog

Use this file to match requested slide content to existing block schemas before creating a new one.

## Existing Block Types (`data/schema.ts`)

1. `heroCover`
- Fields: `title`, `subtitle`, `byline`, `year`
- Use for cover/end slides with a simple headline stack.

2. `aboutOvalProfile`
- Fields: `heading`, `paragraphs[]`, `image { src, alt }`
- Use for "about/profile" slides with text + one portrait image.

3. `portfolioImageCollage`
- Fields: `heading`, `paragraphs[]`, `images { topLeft, bottomLeft, rightTall }`
- Use for portfolio/showcase slides with three fixed image slots.

4. `teamCircleProfiles`
- Fields: `heading`, `members[4] { name, role, image }`
- Use for exactly four team members.

5. `threePillColumns`
- Fields: `heading`, `columns[3] { label, body }`
- Use for mission/vision/values, comparisons, or three concept pillars.

6. `numberedTwoColumnList`
- Fields: `heading`, `items[6]`
- Use for six concise points split into two numbered columns.

7. `trackerTable`
- Fields: `heading`, `columns[5]`, `rows[][5]`
- Use for roadmap, table of contents, or status-tracking tables.

## Add New Block Type Only If Needed

Create a new `slideBlockSchema` when all existing options fail for at least one of:

1. Required field shape cannot be expressed without losing essential source information.
2. Required layout pattern is structurally incompatible with current renderers.
3. Reusing an existing block would require unnatural placeholder values.

When creating a new block type, update these files together:

1. `data/schema.ts`
2. `data/types.ts` (if type surface changes)
3. `components/slide-block-renderer.tsx`
4. `app/documents/slide-theme-default.css` or `app/documents/slide-framework.css`
