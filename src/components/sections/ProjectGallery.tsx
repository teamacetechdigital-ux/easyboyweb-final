"use client";

import { useId } from "react";
import Image from "next/image";
import { useGalleryScroll } from "./useGalleryScroll";
import styles from "./ProjectGallery.module.css";

export type GalleryProject = { image: string; alt: string };
type ProjectGalleryProps = {
  title: string;
  projects: readonly GalleryProject[];
  variant?: "screens" | "mobile" | "logos";
};

export default function ProjectGallery({ title, projects, variant = "screens" }: ProjectGalleryProps) {
  const headingId = useId();
  const galleryId = useId();
  const { viewportRef, position, move, onKeyDown } = useGalleryScroll(projects.length);

  return (
    <section className={`${styles.section} ${styles[variant]}`} aria-labelledby={headingId}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id={headingId} className="font-aloevera">{title}</h2>
          <p className="font-inter">A closer look at the work.</p>
        </div>
        <div id={galleryId} ref={viewportRef} className={styles.viewport} role="region" aria-label={`${title}. Swipe or use the arrow keys to explore.`} tabIndex={0} onKeyDown={onKeyDown}>
          {projects.map((project) => (
            <article key={project.image} data-gallery-slide className={styles.card}>
              <div className={styles.preview}>
                <Image src={project.image} alt={project.alt} fill sizes={variant === "mobile" ? "(max-width: 900px) 92vw, 900px" : "(max-width: 680px) 90vw, (max-width: 1100px) 46vw, 640px"} draggable={false} />
              </div>
            </article>
          ))}
        </div>
        <div className={styles.footer}>
          <p className={styles.hint}>Swipe to explore <span aria-hidden="true">↔</span></p>
          <div className={styles.controls}>
            <button type="button" className={styles.arrow} onClick={() => move(-1)} disabled={position.start} aria-controls={galleryId} aria-label={`Previous ${title.toLowerCase()} project`}><span aria-hidden="true">←</span></button>
            <span className={styles.count} aria-live="polite" aria-atomic="true">{position.first}{position.last > position.first ? `–${position.last}` : ""} / {projects.length}</span>
            <button type="button" className={styles.arrow} onClick={() => move(1)} disabled={position.end} aria-controls={galleryId} aria-label={`Next ${title.toLowerCase()} project`}><span aria-hidden="true">→</span></button>
          </div>
        </div>
      </div>
    </section>
  );
}
