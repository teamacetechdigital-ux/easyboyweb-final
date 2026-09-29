"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const workScreens = [
    { src: "/imgs/appscreen1.svg", alt: "Mobile app project screenshot 1" },
    { src: "/imgs/appscreen2.svg", alt: "Mobile app project screenshot 2" },
    { src: "/imgs/appscreen1.svg", alt: "Mobile app project screenshot 1" },
    { src: "/imgs/appscreen2.svg", alt: "Mobile app project screenshot 2" },
    { src: "/imgs/appscreen1.svg", alt: "Mobile app project screenshot 1" },
    { src: "/imgs/appscreen2.svg", alt: "Mobile app project screenshot 2" },
    { src: "/imgs/appscreen1.svg", alt: "Mobile app project screenshot 1" },
    { src: "/imgs/appscreen2.svg", alt: "Mobile app project screenshot 2" },
    { src: "/imgs/appscreen1.svg", alt: "Mobile app project screenshot 1" },
    { src: "/imgs/appscreen2.svg", alt: "Mobile app project screenshot 2" },
    { src: "/imgs/appscreen1.svg", alt: "Mobile app project screenshot 1" },
    { src: "/imgs/appscreen2.svg", alt: "Mobile app project screenshot 2" },
    { src: "/imgs/appscreen1.svg", alt: "Mobile app project screenshot 1" },
    { src: "/imgs/appscreen2.svg", alt: "Mobile app project screenshot 2" },
    { src: "/imgs/appscreen1.svg", alt: "Mobile app project screenshot 1" },
    { src: "/imgs/appscreen2.svg", alt: "Mobile app project screenshot 2" },
];

function MobileScreen() {
    const recentWorkSliderRef = useRef<HTMLDivElement | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const slider = recentWorkSliderRef.current;

        if (!slider) return;

        const updateActiveSlide = () => {
            setActiveSlide(
                Math.round(slider.scrollLeft / slider.clientWidth)
            );
        };

        slider.addEventListener("scroll", updateActiveSlide, { passive: true });
        return () => slider.removeEventListener("scroll", updateActiveSlide);
    }, []);

    const moveRecentWorkSlider = (direction: -1 | 1) => {
        const slider = recentWorkSliderRef.current;

        if (!slider) return;

        const nextSlide =
            (activeSlide + direction + workScreens.length) % workScreens.length;

        slider.scrollTo({
            left: nextSlide * slider.clientWidth,
            behavior: "smooth",
        });
    };

  return (
    <section className="mobile-app-work-section">
  <div className="container">
    <h2 className="mobile-app-work-heading font-aloevera">
      Our Recent Work
    </h2>

    <div className="mobile-app-work-slider">
      <div
        ref={recentWorkSliderRef}
        className="mobile-app-work-track"
        role="region"
        aria-label="Our recent mobile application work"
        tabIndex={0}
      >
        {workScreens.map((screen, index) => (
          <div className="mobile-app-work-slide" key={screen.src}>
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              sizes="(max-width: 768px) calc(100vw - 32px), 900px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>

    <div className="mobile-app-work-controls">
      <button
        type="button"
        className="recent-work-arrow recent-work-arrow-previous"
        onClick={() => moveRecentWorkSlider(-1)}
        aria-label="Previous projects"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M27 16H6M14 8l-8 8 8 8" />
        </svg>
      </button>

      <button
        type="button"
        className="recent-work-arrow recent-work-arrow-next"
        onClick={() => moveRecentWorkSlider(1)}
        aria-label="Next projects"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M5 16h21M18 8l8 8-8 8" />
        </svg>
      </button>
    </div>
  </div>
</section>
  )
}

export default MobileScreen