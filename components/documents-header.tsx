"use client";

import { ArrowLeft, Printer } from "lucide-react";
import Link from "next/link";

export function DocumentsHeader() {
  return (
    <header className="documents-header">
      <nav className="documents-header-nav">
        <Link href="/documents" className="documents-header-link">
          <ArrowLeft size={18} aria-hidden />
          Back to List
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="documents-header-link documents-header-print"
          aria-label="印刷"
        >
          <Printer size={18} aria-hidden />
          Print
        </button>
      </nav>
    </header>
  );
}
