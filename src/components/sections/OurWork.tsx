"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Category = "all" | "website" | "mobile" | "logo";

const categories: {
  label: string;
  value: Category;
  className: string;
}[] = [
  {
    label: "All",
    value: "all",
    className: "portfolio-tab-all",
  },
  {
    label: "Website Design",
    value: "website",
    className: "portfolio-tab-website",
  },
  {
    label: "Mobile App Design",
    value: "mobile",
    className: "portfolio-tab-mobile",
  },
  {
    label: "Logo Design",
    value: "logo",
    className: "portfolio-tab-logo",
  },
];

const projects = [
  {
    title: "Brand Identity Project",
    image: "/imgs/screen (1).svg",
    category: "logo",
  },
  {
    title: "Website Design Project",
    image: "/imgs/screen (2).svg",
    category: "website",
  },
  {
    title: "Mobile Application Project",
    image: "/imgs/screen (3).svg",
    category: "mobile",
  },
  {
    title: "Business Website Project",
    image: "/imgs/screen (4).svg",
    category: "website",
  },
  {
    title: "Logo Design Project",
    image: "/imgs/screen (5).svg",
    category: "logo",
  },
];


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
  showControls = false,
  title = "Our Work In Action",
}: OurWorkProps) {
  const [activeCategory, setActiveCategory] =
    useState<Category>("all");

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const loopedProjects = useMemo(
    () => [...filteredProjects, ...filteredProjects, ...filteredProjects],
    [filteredProjects]
  );

  // Reposition slider when tab changes
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const animationFrame = requestAnimationFrame(() => {
      if (!filteredProjects.length) return;

      const loopStart = slider.scrollWidth / 3;
      const centerPosition = Math.max(
        loopStart,
        (slider.scrollWidth - slider.clientWidth) / 2
      );

      slider.scrollTo({
        left: Math.max(0, centerPosition),
        behavior: "smooth",
      });
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [activeCategory, filteredProjects.length]);

  // Automatic slider movement
  useEffect(() => {
    if (!filteredProjects.length) return;

    const interval = window.setInterval(() => {
      const slider = sliderRef.current;

      if (!slider) return;

      const card = slider.querySelector<HTMLElement>(".portfolio-slide");

      const track =
        slider.querySelector<HTMLElement>(".portfolio-track");

      if (!card || !track) return;

      const trackStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(trackStyles.gap) || 37;

      const scrollAmount = card.getBoundingClientRect().width + gap;

      const loopStart = slider.scrollWidth / 3;
      const loopEnd = loopStart * 2;

      if (slider.scrollLeft + scrollAmount >= loopEnd) {
        slider.scrollTo({
          left: loopStart,
          behavior: "auto",
        });
      } else {
        slider.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3200);

    return () => window.clearInterval(interval);
  }, [filteredProjects.length]);

  const moveSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    const card = slider?.querySelector<HTMLElement>(".portfolio-slide");
    const track = slider?.querySelector<HTMLElement>(".portfolio-track");

    if (!slider || !card || !track) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 37;
    const scrollAmount = card.getBoundingClientRect().width + gap;
    const loopStart = slider.scrollWidth / 3;
    const loopEnd = loopStart * 2;
    const nextPosition = slider.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);

    slider.scrollTo({
      left: nextPosition < loopStart
        ? loopEnd - scrollAmount
        : nextPosition >= loopEnd
          ? loopStart
          : nextPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="our-work-section">
      <div className="our-work-header">
        <h2 className="font-aloevera">
          {title}
        </h2>

        {showDescription && (
          <p className="font-inter">
            Explore our latest web, mobile, and software projects
            built for performance and growth.
          </p>
        )}

        {showTabs && (
          <div
            className="portfolio-tabs"
            role="tablist"
            aria-label="Portfolio categories"
          >
            {categories.map((category) => (
              <button
                type="button"
                role="tab"
                key={category.value}
                aria-selected={activeCategory === category.value}
                className={`portfolio-tab font-inter ${category.className} ${
                  activeCategory === category.value
                    ? "portfolio-tab-active"
                    : ""
                }`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="portfolio-slider-shell">
        <div
          className="portfolio-slider"
          ref={sliderRef}
          aria-label="Portfolio project slider"
        >
          <div className="portfolio-track">
            {loopedProjects.map((project, index) => (
              <article
                className="portfolio-slide"
                key={`${project.title}-${index}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 600px) 82vw, 430px"
                />
              </article>
            ))}
          </div>
        </div>

      </div>

      {showControls && (
        <div className="portfolio-slider-controls" aria-label="Portfolio slider controls">
          <button
            type="button"
            className="portfolio-slider-arrow portfolio-slider-arrow-left"
            onClick={() => moveSlider("left")}
            aria-label="Previous project"
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <button
            type="button"
            className="portfolio-slider-arrow portfolio-slider-arrow-right"
            onClick={() => moveSlider("right")}
            aria-label="Next project"
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      )}

      {showButton && (
        <div className="portfolio-button-wrapper">
          <Link
            href="/portfolio"
            className="portfolio-view-button font-inter"
          >
            View Full Portfolio
          </Link>
        </div>
      )}

    </section>
  );
}