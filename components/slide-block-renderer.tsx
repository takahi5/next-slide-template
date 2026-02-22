import Image from "next/image";
import type { SlideBlock } from "@/data/types";

interface SlideBlockRendererProps {
  block: SlideBlock;
}

function chunkInThree(items: string[]) {
  return [items.slice(0, 3), items.slice(3, 6)];
}

export function SlideBlockRenderer({ block }: SlideBlockRendererProps) {
  if (block.type === "heroCover") {
    return (
      <section className="layout-cover">
        <h1>{block.title}</h1>
        <p className="cover-subtitle">{block.subtitle}</p>
        <p className="cover-byline">{block.byline}</p>
        <p className="cover-year">{block.year}</p>
      </section>
    );
  }

  if (block.type === "teamCircleProfiles") {
    return (
      <section className="layout-team-circle-profiles">
        <h2>{block.heading}</h2>
        <div className="team-circle-grid">
          {block.members.map((member) => (
            <article key={member.name} className="team-member-card">
              <div className="team-member-image">
                <Image src={member.image.src} alt={member.image.alt} fill sizes="20vw" className="frame-image" />
              </div>
              <p className="team-member-name">{member.name}</p>
              <p className="team-member-role">{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "aboutOvalProfile") {
    return (
      <section className="layout-about-oval-profile">
        <div className="profile-copy">
          <h2>{block.heading}</h2>
          {block.paragraphs.map((paragraph, index) => (
            <p key={`profile-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>
        <div className="profile-media">
          <div className="ellipse-frame">
            <Image src={block.image.src} alt={block.image.alt} fill sizes="40vw" className="frame-image" />
          </div>
        </div>
      </section>
    );
  }

  if (block.type === "portfolioImageCollage") {
    return (
      <section className="layout-portfolio-collage">
        <div className="collage-copy">
          <h2>{block.heading}</h2>
          {block.paragraphs.map((paragraph, index) => (
            <p key={`collage-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>
        <div className="collage-media-grid">
          <div className="collage-media card-top-left">
            <Image src={block.images.topLeft.src} alt={block.images.topLeft.alt} fill sizes="25vw" className="frame-image" />
          </div>
          <div className="collage-media card-bottom-left">
            <Image
              src={block.images.bottomLeft.src}
              alt={block.images.bottomLeft.alt}
              fill
              sizes="25vw"
              className="frame-image"
            />
          </div>
          <div className="collage-media card-right-tall">
            <Image src={block.images.rightTall.src} alt={block.images.rightTall.alt} fill sizes="22vw" className="frame-image" />
          </div>
        </div>
      </section>
    );
  }

  if (block.type === "threePillColumns") {
    return (
      <section className="layout-pill-columns">
        <h2>{block.heading}</h2>
        <div className="pill-column-grid">
          {block.columns.map((column) => (
            <article key={column.label} className="pill-column-card">
              <h3>{column.label}</h3>
              <p>{column.body}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "numberedTwoColumnList") {
    const [left, right] = chunkInThree(block.items);
    return (
      <section className="layout-services">
        <h2>{block.heading}</h2>
        <div className="services-columns">
          <ol>
            {left.map((item, index) => (
              <li key={`service-left-${index}`}>
                <span>{index + 1}.</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
          <ol>
            {right.map((item, index) => (
              <li key={`service-right-${index}`}>
                <span>{index + 4}.</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  if (block.type === "trackerTable") {
    return (
      <section className="layout-tracker">
        <h2>{block.heading}</h2>
        <table>
          <thead>
            <tr>
              {block.columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${row[0]}-${cellIndex}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }

  return null;
}
