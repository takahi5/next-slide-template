interface SlidePageProps {
  children: React.ReactNode;
  className?: string;
}

export function SlidePage({ children, className }: SlidePageProps) {
  return <section className={["slide-page", className].filter(Boolean).join(" ")}>{children}</section>;
}
