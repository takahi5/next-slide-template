import Link from "next/link";
import { listDocuments } from "@/data/documents";

export const metadata = {
  title: "Documents",
  description: "Print-ready slide documents",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function DocumentsIndexPage() {
  const documents = listDocuments();

  return (
    <main className="file-list-page">
      <div className="file-list-container">
        <div className="file-list-header">
          <span aria-hidden />
          <span className="file-list-header-name">Name</span>
          <span className="file-list-header-desc">Description</span>
          <span className="file-list-header-date">Modified</span>
          <span className="file-list-header-tags">Tags</span>
        </div>
        <ul className="file-list" role="list">
          {documents.map((doc) => (
            <li key={doc.id}>
              <Link href={`/documents/${doc.id}`} className="file-list-row">
                <span className="file-list-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </span>
                <span className="file-list-name">{doc.title}</span>
                <span className="file-list-desc">{doc.description}</span>
                <span className="file-list-date">{formatDate(doc.updatedAt)}</span>
                {doc.tags.length > 0 && (
                  <span className="file-list-tags">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="file-list-tag">
                        {tag}
                      </span>
                    ))}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <p className="file-list-footer">
          Add new files under <code>data/documents</code> to publish documents.
        </p>
      </div>
    </main>
  );
}
