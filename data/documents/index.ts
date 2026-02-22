import { documentSchema } from "@/data/schema";
import type { DocumentDefinition, DocumentMeta } from "@/data/types";
import { marketingProposalDocument } from "@/data/documents/marketing-proposal";
import { ingoudePitchDeckDocument } from "@/data/documents/ingoude-pitch-deck";

export const documentRegistry: Record<string, DocumentDefinition> = {
  [ingoudePitchDeckDocument.meta.id]: validateDocument(ingoudePitchDeckDocument),
  [marketingProposalDocument.meta.id]: validateDocument(marketingProposalDocument),
};

export function validateDocument(document: DocumentDefinition): DocumentDefinition {
  return documentSchema.parse(document);
}

export function getDocument(documentId: string): DocumentDefinition | null {
  return documentRegistry[documentId] ?? null;
}

export function listDocuments(): DocumentMeta[] {
  return Object.values(documentRegistry)
    .map((document) => document.meta)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}
