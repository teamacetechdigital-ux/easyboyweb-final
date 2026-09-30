"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";

/** Native, finite scrolling: touch, keyboard and buttons share the same position. */
export function useGalleryScroll(count: number, resetKey: string = "") {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: count <= 1, first: 1, last: 1 });

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let frame = 0;
    const measure = () => {
      const bounds = viewport.getBoundingClientRect();
      const cards = Array.from(viewport.querySelectorAll<HTMLElement>("[data-gallery-slide]"));
      const visible = cards.flatMap((card, index) => {
        const rect = card.getBoundingClientRect();
        const intersection = Math.min(rect.right, bounds.right) - Math.max(rect.left, bounds.left);
        return intersection > Math.min(rect.width, bounds.width) / 2 ? [index + 1] : [];
      });
      const next = {
        start: viewport.scrollLeft <= 2,
        end: viewport.scrollLeft >= viewport.scrollWidth - viewport.clientWidth - 2,
        first: visible[0] ?? 1,
        last: visible.at(-1) ?? 1,
      };
      setPosition((previous) => previous.start === next.start && previous.end === next.end && previous.first === next.first && previous.last === next.last ? previous : next);
    };
    const scheduleMeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    viewport.scrollTo({ left: 0, behavior: "instant" });
    scheduleMeasure();
    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(viewport);
    viewport.querySelectorAll<HTMLElement>("[data-gallery-slide]").forEach((card) => observer.observe(card));
    viewport.addEventListener("scroll", scheduleMeasure, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      viewport.removeEventListener("scroll", scheduleMeasure);
    };
  }, [count, resetKey]);

  const move = useCallback((direction: -1 | 1 | "start" | "end") => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const maximum = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const bounds = viewport.getBoundingClientRect();
    const inset = Number.parseFloat(getComputedStyle(viewport).scrollPaddingLeft) || 0;
    const targets = Array.from(viewport.querySelectorAll<HTMLElement>("[data-gallery-slide]"), (card) =>
      Math.max(0, Math.min(maximum, viewport.scrollLeft + card.getBoundingClientRect().left - bounds.left - inset)),
    );
    let left: number;
    if (direction === "start") left = 0;
    else if (direction === "end") left = maximum;
    else if (direction === 1) left = targets.find((target) => target > viewport.scrollLeft + 3) ?? maximum;
    else left = targets.reverse().find((target) => target < viewport.scrollLeft - 3) ?? 0;
    viewport.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    const direction = { ArrowLeft: -1, ArrowRight: 1, Home: "start", End: "end" }[event.key];
    if (direction === undefined) return;
    event.preventDefault();
    move(direction as -1 | 1 | "start" | "end");
  };
  return { viewportRef, position, move, onKeyDown };
}
