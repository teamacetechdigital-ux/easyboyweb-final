"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const creativeScreens = [
  {
    id: 1,
    image: "/imgs/Creativescreen1.svg",
    alt: "Creative work screen one",
  },
  {
    id: 2,
    image: "/imgs/Creativescreen2.svg",
    alt: "Creative work screen two",
  },
  {
    id: 3,
    image: "/imgs/Creativescreen3.svg",
    alt: "Creative work screen three",
  },
  {
    id: 4,
    image: "/imgs/Creativescreen4.svg",
    alt: "Creative work screen four",
  },
];

/* Duplicate slides for seamless autoplay */
const sliderScreens = [...creativeScreens, ...creativeScreens];

export default function CreativeWork() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const moveSlider = useCallback((direction: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstCard =
      slider.querySelector<HTMLElement>(".creative-slide");

    if (!firstCard) return;

    const sliderStyle = window.getComputedStyle(slider);
    const gap = Number.parseFloat(sliderStyle.columnGap) || 16;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const scrollDistance = cardWidth + gap;

    const originalSlidesWidth =
      scrollDistance * creativeScreens.length;

    if (
      direction === 1 &&
      slider.scrollLeft >= originalSlidesWidth - scrollDistance / 2
    ) {
      slider.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }

    if (direction === -1 && slider.scrollLeft <= 2) {
      slider.scrollTo({
        left: originalSlidesWidth,
        behavior: "auto",
      });
    }

    window.requestAnimationFrame(() => {
      slider.scrollBy({
        left: direction * scrollDistance,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      moveSlider(1);
    }, 3500);

    return () => window.clearInterval(autoplay);
  }, [moveSlider]);

  return (
    <section className="creative-work-section">
      <div className="container">
        <h2 className="creative-work-heading font-aloevera">
          Our Recent Work
        </h2>
      </div>

      <div className="creative-slider-wrapper">
        <div
          ref={sliderRef}
          className="creative-slider"
          aria-label="Creative work slider"
        >
          {sliderScreens.map((screen, index) => (
            <article
              className="creative-slide"
              key={`${screen.id}-${index}`}
            >
              <Image
                src={screen.image}
                alt={
                  index < creativeScreens.length
                    ? screen.alt
                    : ""
                }
                width={470}
                height={449}
                className="creative-slide-image"
                priority={index < creativeScreens.length}
              />
            </article>
          ))}
        </div>

        <div className="creative-blur creative-blur-left" />

        <div className="creative-blur creative-blur-right" />
      </div>

      <div className="creative-slider-controls">
        <button
          type="button"
          className="creative-control creative-control-previous font-inter"
          onClick={() => moveSlider(-1)}
          aria-label="Previous slide"
        >
          &#8592;
        </button>

        <button
          type="button"
          className="creative-control creative-control-next font-inter"
          onClick={() => moveSlider(1)}
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}