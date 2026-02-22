import { z } from "zod";

const themeSchema = z.object({
  background: z.string(),
  surface: z.string(),
  ink: z.string(),
  muted: z.string(),
  accent: z.string(),
  line: z.string(),
  wave: z.string(),
  blob: z.string(),
  pillText: z.string(),
});

const coverBlockSchema = z.object({
  type: z.literal("heroCover"),
  title: z.string(),
  subtitle: z.string(),
  byline: z.string(),
  year: z.string(),
});

const aboutOvalProfileBlockSchema = z.object({
  type: z.literal("aboutOvalProfile"),
  heading: z.string(),
  paragraphs: z.array(z.string()).min(1),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
});

const collageImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

const portfolioImageCollageBlockSchema = z.object({
  type: z.literal("portfolioImageCollage"),
  heading: z.string(),
  paragraphs: z.array(z.string()).min(1),
  images: z.object({
    topLeft: collageImageSchema,
    bottomLeft: collageImageSchema,
    rightTall: collageImageSchema,
  }),
});

const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
});

const teamCircleProfilesBlockSchema = z.object({
  type: z.literal("teamCircleProfiles"),
  heading: z.string(),
  members: z.array(teamMemberSchema).length(4),
});

const pillarSchema = z.object({
  label: z.string(),
  body: z.string(),
});

const threePillColumnsBlockSchema = z.object({
  type: z.literal("threePillColumns"),
  heading: z.string(),
  columns: z.array(pillarSchema).length(3),
});

const numberedTwoColumnListBlockSchema = z.object({
  type: z.literal("numberedTwoColumnList"),
  heading: z.string(),
  items: z.array(z.string()).length(6),
});

const trackerTableBlockSchema = z.object({
  type: z.literal("trackerTable"),
  heading: z.string(),
  columns: z
    .array(z.string())
    .length(5)
    .default([
      "PHASE",
      "TASK / DELIVERABLE",
      "DESCRIPTION",
      "EXPECTED DELIVERY",
      "ASSIGNED TO",
    ]),
  rows: z.array(z.tuple([z.string(), z.string(), z.string(), z.string(), z.string()])).min(1),
});

export const slideBlockSchema = z.discriminatedUnion("type", [
  coverBlockSchema,
  teamCircleProfilesBlockSchema,
  aboutOvalProfileBlockSchema,
  portfolioImageCollageBlockSchema,
  threePillColumnsBlockSchema,
  numberedTwoColumnListBlockSchema,
  trackerTableBlockSchema,
]);

export const slideSchema = z.object({
  id: z.string().min(1),
  blocks: z.array(slideBlockSchema).min(1),
});

export const documentMetaSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  updatedAt: z.string().min(1),
  tags: z.array(z.string()).default([]),
});

export const documentSchema = z.object({
  meta: documentMetaSchema,
  theme: themeSchema,
  slides: z.array(slideSchema).min(1),
});
