import type { z } from "zod";
import {
  documentMetaSchema,
  documentSchema,
  slideBlockSchema,
  slideSchema,
} from "@/data/schema";

export type DocumentMeta = z.infer<typeof documentMetaSchema>;
export type DocumentTheme = z.infer<typeof documentSchema.shape.theme>;
export type SlideDefinition = z.infer<typeof slideSchema>;
export type SlideBlock = z.infer<typeof slideBlockSchema>;
export type DocumentDefinition = z.infer<typeof documentSchema>;
