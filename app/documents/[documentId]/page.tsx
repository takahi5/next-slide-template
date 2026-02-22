import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentRenderer } from "@/components/document-renderer";
import { getDocument } from "@/data/documents";

interface DocumentPageProps {
  params: Promise<{
    documentId: string;
  }>;
}

export async function generateMetadata({ params }: DocumentPageProps): Promise<Metadata> {
  const { documentId } = await params;
  const document = getDocument(documentId);

  if (!document) {
    return {
      title: "Document Not Found",
    };
  }

  return {
    title: `${document.meta.title} | Documents`,
    description: document.meta.description,
  };
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { documentId } = await params;
  const document = getDocument(documentId);

  if (!document) {
    notFound();
  }

  return <DocumentRenderer document={document} />;
}
