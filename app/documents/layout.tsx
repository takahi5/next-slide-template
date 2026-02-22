import "@/app/documents/slide-framework.css";
import "@/app/documents/slide-theme-default.css";
import { DocumentsHeader } from "@/components/documents-header";

export default function DocumentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
