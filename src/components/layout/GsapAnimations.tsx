"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapAnimations({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const media = gsap.matchMedia();
    let disposed = false;
    let refreshFrame = 0;
    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => { if (!disposed) ScrollTrigger.refresh(); });
    };

    const context = gsap.context(() => {
      media.add({ motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 1024px) and (hover: hover) and (pointer: fine)" }, (match) => {
        if (!match.conditions?.motion) return;
        const desktop = match.conditions.desktop;
        const listeners: (() => void)[] = [];
        const hero = root.querySelector<HTMLElement>(".studio-hero");
        const header = root.querySelector(".site-header");
        if (header) gsap.from(header, { y: -16, opacity: 0, duration: 0.7, ease: "power3.out", clearProps: "transform,opacity" });

        if (hero) {
          const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
          intro.from(hero.querySelector(".hero-eyebrow"), { y: 14, opacity: 0, duration: 0.6 }, 0.1)
            .from(hero.querySelectorAll(".hero-word"), { yPercent: 110, rotate: 3, duration: 1.15, stagger: 0.14, clearProps: "transform" }, 0.18)
            .from(hero.querySelectorAll(".hero-description, .hero-actions, .hero-proof"), { y: 24, opacity: 0, duration: 0.8, stagger: 0.1, clearProps: "transform,opacity" }, 0.5)
            .from(hero.querySelectorAll(".hero-project"), { y: 70, opacity: 0, duration: 1.2, stagger: 0.13, clearProps: "transform,opacity" }, 0.35)
            .from(hero.querySelectorAll(".hero-project-tag, .hero-showcase-caption, .hero-bottom"), { y: 12, opacity: 0, duration: 0.75, stagger: 0.1, clearProps: "transform,opacity" }, 0.95);

          if (desktop) {
            gsap.to(hero.querySelector(".hero-project-stack"), { y: -65, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.8 } });
            gsap.to(hero.querySelector(".banner-video"), { yPercent: 12, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.8 } });
            const stage = hero.querySelector<HTMLElement>(".hero-showcase");
            const stack = hero.querySelector<HTMLElement>(".hero-project-stack");
            if (stage && stack) {
              const tiltX = gsap.quickTo(stack, "rotationX", { duration: 0.75, ease: "power3.out" });
              const tiltY = gsap.quickTo(stack, "rotationY", { duration: 0.75, ease: "power3.out" });
              const move = (event: PointerEvent) => {
                const rect = stage.getBoundingClientRect();
                tiltX((0.5 - (event.clientY - rect.top) / rect.height) * 7);
                tiltY(((event.clientX - rect.left) / rect.width - 0.5) * 9);
              };
              const reset = () => { tiltX(0); tiltY(0); };
              stage.addEventListener("pointermove", move);
              stage.addEventListener("pointerleave", reset);
              listeners.push(() => { stage.removeEventListener("pointermove", move); stage.removeEventListener("pointerleave", reset); });
            }
          }
        } else {
          const content = root.querySelector("[class*='banner-content'], [class*='ban-cont']");
          if (content) gsap.from(content.children, { y: 24, opacity: 0, duration: 0.75, stagger: 0.08, clearProps: "transform,opacity" });
        }

        // Reveal content, never whole sections or moving carousel tracks.
        const targets = gsap.utils.toArray<HTMLElement>("section h2, .growth-content > p, .why-choose-content > p, .agency-showcase, .footer-main", root);
        targets.forEach((target) => {
          if (target.closest(".studio-hero")) return;
          gsap.from(target, { y: desktop ? 36 : 20, opacity: 0, duration: 0.85, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: target, start: "top 93%", once: true } });
        });

        [".prnt-thrd-box", ".identity-cards", ".easy-points", ".help-process", ".how-we-work-process"].forEach((selector) => {
          root.querySelectorAll<HTMLElement>(selector).forEach((group) => {
            gsap.from(group.children, { y: desktop ? 36 : 18, opacity: 0, duration: 0.7, stagger: 0.07, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: { trigger: group, start: "top 90%", once: true } });
          });
        });

        if (desktop) {
          root.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((button) => {
            const x = gsap.quickTo(button, "x", { duration: 0.35, ease: "power3.out" });
            const y = gsap.quickTo(button, "y", { duration: 0.35, ease: "power3.out" });
            const move = (event: PointerEvent) => {
              const rect = button.getBoundingClientRect();
              x((event.clientX - rect.left - rect.width / 2) * 0.13);
              y((event.clientY - rect.top - rect.height / 2) * 0.16);
            };
            const reset = () => { x(0); y(0); };
            button.addEventListener("pointermove", move);
            button.addEventListener("pointerleave", reset);
            button.addEventListener("blur", reset);
            listeners.push(() => { button.removeEventListener("pointermove", move); button.removeEventListener("pointerleave", reset); button.removeEventListener("blur", reset); });
          });
          const watermark = root.querySelector(".testimonials-watermark");
          if (watermark) gsap.fromTo(watermark, { xPercent: 8 }, { xPercent: -8, ease: "none", scrollTrigger: { trigger: ".testimonials-section", start: "top bottom", end: "bottom top", scrub: 1 } });
        }

        const progress = root.querySelector(".reading-progress");
        if (progress) gsap.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.2 } });
        return () => listeners.forEach((remove) => remove());
      });
    }, root);

    window.addEventListener("load", refresh);
    root.addEventListener("load", refresh, true);
    void document.fonts.ready.then(() => { if (!disposed) refresh(); });
    refresh();
    return () => {
      disposed = true;
      cancelAnimationFrame(refreshFrame);
      window.removeEventListener("load", refresh);
      root.removeEventListener("load", refresh, true);
      media.revert();
      context.revert();
    };
  }, [pathname]);

  return <div ref={rootRef} className="gsap-page-root"><div className="reading-progress" aria-hidden="true" />{children}</div>;
}
