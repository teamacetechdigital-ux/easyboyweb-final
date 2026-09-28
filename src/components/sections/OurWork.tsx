"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurWork.module.css";

type Category = "all" | "website" | "mobile" | "logo";

const categories: { label: string; value: Category }[] = [
  { label: "All work", value: "all" },
  { label: "Websites", value: "website" },
  { label: "Mobile apps", value: "mobile" },
  { label: "Brand & logo", value: "logo" },
];

const categoryLabels = {
  website: "Website design",
  mobile: "Mobile app design",
  logo: "Brand identity",
};

// These are the same website, mobile and logo assets used on the Work page.
const projects = [
  { title: "Website Design Project", image: "/imgs/screen (2).svg", category: "website" },
  { title: "Business Website Project", image: "/imgs/screen (4).svg", category: "website" },
  { title: "Website Design Study 01", image: "/imgs/screen (1).svg", category: "website" },
  { title: "Website Design Study 03", image: "/imgs/screen (3).svg", category: "website" },
  { title: "Website Design Study 05", image: "/imgs/screen (5).svg", category: "website" },
  { title: "Brand Identity Project", image: "/imgs/ourwork_1.svg", category: "logo" },
  { title: "Mobile Application Project", image: "/imgs/mobile_screen.svg", category: "mobile" },
  { title: "Logo Design Project", image: "/imgs/ourwork_2.svg", category: "logo" },
] as const;

type OurWorkProps = {
  showTabs?: boolean;
  showDescription?: boolean;
  showButton?: boolean;
  showControls?: boolean;
  title?: string;
};

export default function OurWork({
  showTabs = true,
  showDescription = true,
  showButton = true,
  showControls = true,
  title = "Our Work In Action",
}: OurWorkProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [position, setPosition] = useState({ start: true, end: false, current: 1 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const galleryId = useId();
  const headingId = useId();

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeCategory === "all" || project.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updatePosition = () => {
      const cards = Array.from(slider.querySelectorAll<HTMLElement>(".portfolio-slide"));
      const viewportLeft = slider.getBoundingClientRect().left;
      const inset = Number.parseFloat(window.getComputedStyle(slider).scrollPaddingLeft) || 24;
      const closestCard = cards.reduce((closest, card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - viewportLeft - inset);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Infinity });

      const nextPosition = {
        start: slider.scrollLeft <= 4,
        end: slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 4,
        current: closestCard.index + 1,
      };
      setPosition((previous) => previous.start === nextPosition.start && previous.end === nextPosition.end && previous.current === nextPosition.current ? previous : nextPosition);
    };

    const frame = requestAnimationFrame(() => {
      slider.scrollTo({ left: 0, behavior: "instant" });
      updatePosition();
    });
    const observer = new ResizeObserver(updatePosition);
    observer.observe(slider);
    slider.addEventListener("scroll", updatePosition, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      slider.removeEventListener("scroll", updatePosition);
    };
  }, [activeCategory]);

  const moveSlider = (direction: -1 | 1) => {
    const slider = sliderRef.current;
    const card = slider?.querySelector<HTMLElement>(".portfolio-slide");
    const track = slider?.querySelector<HTMLElement>(".portfolio-track");
    if (!slider || !card || !track) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 24;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    slider.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <section className={`our-work-section ${styles.section}`} aria-labelledby={headingId}>
      <div className={`our-work-header ${styles.header}`}>
        <span className={styles.eyebrow}><span /> Selected projects</span>
        <h2 id={headingId} className="font-aloevera">{title}</h2>
        {showDescription && (
          <p className="font-inter">
            Explore our latest web, mobile, and software projects built for performance and growth.
          </p>
        )}
        {showTabs && (
          <div className={`portfolio-tabs ${styles.tabs}`} role="group" aria-label="Filter portfolio projects">
            {categories.map((category) => (
              <button
                type="button"
                key={category.value}
                aria-pressed={activeCategory === category.value}
                aria-controls={galleryId}
                className={`portfolio-tab font-inter ${styles.tab}`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
                <span className={styles.tabCount}>
                  {category.value === "all" ? projects.length : projects.filter((project) => project.category === category.value).length}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={`portfolio-slider-shell ${styles.shell}`}>
        <div
          id={galleryId}
          className={`portfolio-slider ${styles.slider}`}
          ref={sliderRef}
          role="region"
          aria-label="Portfolio projects. Use the arrow keys or swipe to explore."
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            moveSlider(event.key === "ArrowLeft" ? -1 : 1);
          }}
        >
          <div className={`portfolio-track ${styles.track}`}>
            {filteredProjects.map((project, index) => (
              <article className={`portfolio-slide ${styles.card}`} key={project.image}>
                <div className={`${styles.preview} ${styles[project.category] ?? ""}`}>
                  <span className={styles.projectNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 600px) 82vw, (max-width: 1200px) 44vw, 480px" />
                  <span className={styles.previewLabel} aria-hidden="true">EasyBoyWeb / Selected work</span>
                </div>
                <Link href="/Work" className={styles.caption} aria-label={`${project.title} — explore our portfolio`}>
                  <div>
                    <span>{categoryLabels[project.category]}</span>
                    <h3 className="font-inter">{project.title}</h3>
                  </div>
                  <span className={styles.captionMark} aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.galleryFooter}>
        <p className={styles.galleryStatus} aria-live="polite" aria-atomic="true">
          {String(filteredProjects.length).padStart(2, "0")} projects
          <span aria-hidden="true"> / </span>
          <span>{activeCategory === "all" ? "All disciplines" : categoryLabels[activeCategory]}</span>
        </p>
        {showControls && (
          <div className={`portfolio-slider-controls ${styles.controls}`} aria-label="Portfolio slider controls">
            <button type="button" className={styles.arrow} onClick={() => moveSlider(-1)} disabled={position.start} aria-label="Previous project" aria-controls={galleryId}>
              <span aria-hidden="true">←</span>
            </button>
            <span className={styles.position} aria-hidden="true">{String(position.current).padStart(2, "0")}/{String(filteredProjects.length).padStart(2, "0")}</span>
            <button type="button" className={styles.arrow} onClick={() => moveSlider(1)} disabled={position.end} aria-label="Next project" aria-controls={galleryId}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
        {showButton && (
          <Link href="/Work" className={`portfolio-view-button font-inter ${styles.viewButton}`}>
            View Full Portfolio <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
    </section>
  );
}
