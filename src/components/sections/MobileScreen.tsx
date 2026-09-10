"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const sliderCopies = [0, 1, 2];

function MobileScreen() {


    const recentWorkSliderRef = useRef<HTMLDivElement | null>(null);

const moveRecentWorkSlider = (
  direction: "previous" | "next"
) => {
  const slider = recentWorkSliderRef.current;

  if (!slider) return;

  const scrollAmount = Math.min(
    360,
    slider.clientWidth * 0.35
  );
  const loopStart = slider.scrollWidth / 3;
  const loopEnd = loopStart * 2;
  const nextPosition =
    slider.scrollLeft + (direction === "next" ? scrollAmount : -scrollAmount);

  slider.scrollTo({
    left: nextPosition < loopStart
      ? loopEnd - scrollAmount
      : nextPosition >= loopEnd
        ? loopStart
        : nextPosition,
    behavior: "smooth",
  });
};

const centerRecentWorkImage = () => {
  const slider = recentWorkSliderRef.current;

  if (!slider) return;

  slider.scrollTo({
    left: slider.scrollWidth / 3,
    behavior: "auto",
  });
};

useEffect(() => {
  const slider = recentWorkSliderRef.current;

  if (!slider) return;

  const frame = window.requestAnimationFrame(centerRecentWorkImage);
  const interval = window.setInterval(() => {
    const loopStart = slider.scrollWidth / 3;
    const loopEnd = loopStart * 2;
    const scrollAmount = Math.min(360, slider.clientWidth * 0.35);

    if (!scrollAmount) return;

    if (slider.scrollLeft + scrollAmount >= loopEnd) {
      slider.scrollTo({ left: loopStart, behavior: "auto" });
    }

    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }, 4000);

  return () => {
    window.cancelAnimationFrame(frame);
    window.clearInterval(interval);
  };
}, []);



  return (
    <>
    
    
    <section className="recent-work-section">
  <div className="container">
    <h2 className="recent-work-heading font-aloevera">
      Our Recent Work
    </h2>

    <div className="recent-work-slider-shell">
      <div
        ref={recentWorkSliderRef}
        className="recent-work-slider"
        aria-label="Our recent mobile application work"
      >
        {sliderCopies.map((copy) => (
          <Image
            key={copy}
            src="/imgs/mobile_screen.svg"
            alt={copy === 1 ? "Our recent mobile application projects" : ""}
            width={2045}
            height={503}
            className="recent-work-image"
            onLoad={copy === 0 ? centerRecentWorkImage : undefined}
            priority={copy === 0}
          />
        ))}
        
      </div>
    </div>

    <div className="recent-work-controls">
      <button
        type="button"
        className="recent-work-arrow recent-work-arrow-previous"
        onClick={() =>
          moveRecentWorkSlider("previous")
        }
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
        onClick={() => moveRecentWorkSlider("next")}
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
    
    
    
    </>
  )
}

export default MobileScreen