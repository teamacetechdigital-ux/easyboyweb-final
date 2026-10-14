"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revealGroups = [
  ".prnt-thrd-box", ".identity-cards", ".easy-points", ".help-process",
  ".how-we-work-process", ".custom-software-grid", ".website-crm-cards",
  ".maintenance-services-grid", ".hosting-services-grid", ".maintenance-benefits-column",
  ".digital-benefits-grid", ".custom-ai-grid", ".ai-call-agent-grid",
  ".why-easyboyweb-grid", ".business-growth-grid", ".seo-service-grid",
  ".seo-aeo-grid", ".seo-short-grid", ".business-tools-grid",
  ".need-more-grid", ".pricing-plans-grid", ".services-slider", "[data-reveal-group]",
].join(", ");

const standaloneCards = "[data-reveal-card]";

/** Stable motion families: the same component keeps its effect on every route. */
function cardEntrance(group: HTMLElement, index: number, desktop: boolean) {
  if (group.matches(".prnt-thrd-box, .services-slider, [data-reveal-group='services']")) {
    return { y: desktop ? 44 : 24, scale: 0.94, duration: 0.9, ease: "power3.out" };
  }
  if (group.matches(".identity-cards, .why-easyboyweb-grid, .maintenance-services-grid, .hosting-services-grid")) {
    return { y: desktop ? 24 : 16, scale: 0.97, rotation: desktop ? (index % 2 ? 1.5 : -1.5) : 0, duration: 0.85, ease: "power2.out" };
  }
  if (group.matches(".easy-points, .help-process, .how-we-work-process, .website-crm-cards")) {
    return { x: desktop ? -12 : -8, y: 0, duration: 0.8, ease: "power3.out" };
  }
  return { y: desktop ? 36 : 20, scale: 0.98, duration: 0.85, ease: "power3.out" };
}

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
        const reveal = { y: desktop ? 28 : 18, opacity: 0, duration: 0.8, ease: "power3.out", clearProps: "transform,opacity" };
        const hero = root.querySelector<HTMLElement>(".studio-hero");
        const header = root.querySelector(".site-header");
        if (header) gsap.from(header, { y: -16, opacity: 0, duration: 0.7, ease: "power3.out", clearProps: "transform,opacity" });

        if (hero) {
          const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
          intro.from(hero.querySelector(".hero-eyebrow"), { ...reveal }, 0.1)
            .from(hero.querySelectorAll(".hero-word"), { ...reveal, stagger: 0.1 }, 0.18)
            .from(hero.querySelectorAll(".hero-description, .hero-actions, .hero-proof"), { ...reveal, stagger: 0.1 }, 0.35)
            .from(hero.querySelectorAll(".hero-project"), { ...reveal, stagger: 0.1 }, 0.35);

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
          const content = root.querySelector("main h1")?.parentElement;
          if (content) gsap.from(content.children, { ...reveal, stagger: 0.1 });
        }

        // Reveal content, never whole sections or moving carousel tracks.
        const heroSection = root.querySelector("main h1")?.closest("section");
        const targets = gsap.utils.toArray<HTMLElement>("section h2, section p, section .banner-btn, .agency-showcase, .footer-main", root);
        targets.forEach((target) => {
          // Moving tracks own their transforms; cards reveal as one unit.
          if (heroSection?.contains(target) || target.closest(`${revealGroups}, ${standaloneCards}, .services-slider, .portfolio-slider, .testimonials-slider, .subscription-logo-sliders, .agency-showcase`)) {
            if (!target.matches(".agency-showcase")) return;
          }
          if (target.closest("footer") && !target.matches(".footer-main")) return;
          gsap.from(target, { ...reveal, scrollTrigger: { trigger: target, start: "top 92%", once: true } });
        });

        root.querySelectorAll<HTMLElement>(revealGroups).forEach((group) => {
          Array.from(group.children).forEach((card, index) => {
            gsap.from(card, { ...reveal, ...cardEntrance(group, index, Boolean(desktop)), clearProps: "transform,opacity,translate,rotate,scale", delay: (index % 4) * 0.1, scrollTrigger: { trigger: card, start: "top 92%", once: true } });
          });
        });

        root.querySelectorAll<HTMLElement>(standaloneCards).forEach((card) => {
          gsap.from(card, { ...reveal, ...cardEntrance(card, 0, Boolean(desktop)), clearProps: "transform,opacity,translate,rotate,scale", scrollTrigger: { trigger: card, start: "top 92%", once: true } });
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
    const sizeObserver = new ResizeObserver(refresh);
    sizeObserver.observe(root);
    void document.fonts.ready.then(() => { if (!disposed) refresh(); });
    refresh();
    return () => {
      disposed = true;
      cancelAnimationFrame(refreshFrame);
      window.removeEventListener("load", refresh);
      root.removeEventListener("load", refresh, true);
      sizeObserver.disconnect();
      media.revert();
      context.revert();
    };
  }, [pathname]);

  return <div ref={rootRef} className="gsap-page-root"><div className="reading-progress" aria-hidden="true" />{children}</div>;
}
