import type { DocumentDefinition } from "@/data/types";
import { SlidePage } from "@/components/slide-page";
import { SlideBlockRenderer } from "@/components/slide-block-renderer";

interface DocumentRendererProps {
  document: DocumentDefinition;
}

export function DocumentRenderer({ document }: DocumentRendererProps) {
  const style = {
    "--theme-background": document.theme.background,
    "--theme-surface": document.theme.surface,
    "--theme-ink": document.theme.ink,
    "--theme-muted": document.theme.muted,
    "--theme-accent": document.theme.accent,
    "--theme-line": document.theme.line,
    "--theme-wave": document.theme.wave,
    "--theme-blob": document.theme.blob,
    "--theme-pill-text": document.theme.pillText,
  } as React.CSSProperties;

  return (
    <div className="slide-document" style={style}>
      <div className="slide-document-inner">
        {document.slides.map((slide) => (
          <SlidePage key={slide.id}>
            <div className="slide-corners" aria-hidden>
              <span className="slide-corner slide-corner-top-left" />
              <span className="slide-corner slide-corner-top-right" />
              <span className="slide-corner slide-corner-bottom-left" />
              <span className="slide-corner slide-corner-bottom-right" />
            </div>
            <div className="slide-waves" aria-hidden>
              <span className="slide-wave slide-wave-top" />
              <span className="slide-wave slide-wave-bottom" />
            </div>
            <div className="slide-content">
              {slide.blocks.map((block, index) => (
                <SlideBlockRenderer key={`${slide.id}-${index}`} block={block} />
              ))}
            </div>
          </SlidePage>
        ))}
      </div>
    </div>
  );
}
