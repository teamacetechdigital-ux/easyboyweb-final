"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapAnimationsProps = {
  children: ReactNode;
};

export default function GsapAnimations({ children }: GsapAnimationsProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) return;

    const context = gsap.context(() => {
      gsap.from(".site-header", {
        y: -24,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      const hero = root.querySelector<HTMLElement>(
        ".banner-content, [class*='banner-content'], [class*='ban-cont']"
      );

      if (hero) {
        gsap.from(hero.children, {
          y: 28,
          autoAlpha: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.15,
        });
      }

      const banner = root.querySelector<HTMLElement>(".banner");

      if (banner) {
        gsap.to(banner.querySelector(".banner-video"), {
          yPercent: 16,
          scale: 1.14,
          ease: "none",
          scrollTrigger: {
            trigger: banner,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(banner.querySelector(".banner-overlay"), {
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: banner,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(banner.querySelector(".banner-side-list"), {
          yPercent: -35,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: banner,
            start: "top top",
            end: "70% top",
            scrub: true,
          },
        });
      }

      const sections = gsap.utils.toArray<HTMLElement>(
        "section:not(.banner):not([class*='banner-section']):not(.technology-cards-section):not(.fifth-section)",
        root
      );

      sections.forEach((section, index) => {
        const content = section.firstElementChild;

        if (!(content instanceof HTMLElement)) return;

        gsap.fromTo(content,
          {
            y: 80,
            rotateX: index % 2 === 0 ? 3 : -3,
            scale: 0.96,
            autoAlpha: 0.35,
          },
          {
            y: 0,
            rotateX: 0,
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: section,
              start: "top 92%",
              end: "top 35%",
              scrub: 1,
            },
          }
        );
      });

      const repeatedCards = gsap.utils.toArray<HTMLElement>(
        ".custom-ai-card, .ai-call-agent-card, .maintenance-service-card, .identity-card, .easy-point",
        root
      );

      repeatedCards.forEach((card, index) => {
        gsap.fromTo(card,
          { y: 42, rotateY: index % 2 === 0 ? -5 : 5, autoAlpha: 0 },
          {
            y: 0,
            rotateY: 0,
            autoAlpha: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 68%",
              scrub: 0.8,
            },
          }
        );
      });

      const home = root.querySelector<HTMLElement>(".home-page");

      if (!home) return;

      const skillSection = home.querySelector<HTMLElement>(".third-section");
      if (skillSection) {
        const skillBoxes = skillSection.querySelectorAll<HTMLElement>(".skill-box");
        gsap.fromTo(skillBoxes,
          {
            y: 100,
            rotate: (index) => index % 2 === 0 ? -8 : 8,
            scale: 0.75,
            autoAlpha: 0,
          },
          {
            y: 0,
            rotate: 0,
            scale: 1,
            autoAlpha: 1,
            stagger: 0.08,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: skillSection,
              start: "top 72%",
              end: "bottom 55%",
              scrub: 1,
            },
          }
        );
      }

      const growthSection = home.querySelector<HTMLElement>(".growth-section");
      if (growthSection) {
        gsap.to(growthSection.querySelector(".growth-video"), {
          yPercent: -12,
          rotate: 2,
          ease: "none",
          scrollTrigger: {
            trigger: growthSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.fromTo(growthSection.querySelectorAll(".growth-content > *"),
          { x: -80, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: growthSection,
              start: "top 75%",
              end: "top 35%",
              scrub: 1,
            },
          }
        );
      }

      const servicesSection = home.querySelector<HTMLElement>(".fifth-section");
      if (servicesSection) {
        const serviceCards = servicesSection.querySelectorAll<HTMLElement>(".service-slider-card");
        gsap.fromTo(servicesSection.querySelector(".sect-head"),
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesSection,
              start: "top 78%",
              once: true,
            },
          }
        );

        gsap.fromTo(serviceCards,
          { y: 70, scale: 0.94, rotate: (index) => index % 2 === 0 ? -2 : 2, autoAlpha: 0 },
          {
            y: 0,
            scale: 1,
            rotate: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: servicesSection,
              start: "top 72%",
              once: true,
            },
          }
        );
      }

      const whySection = home.querySelector<HTMLElement>(".why-choose-section");
      if (whySection) {
        gsap.fromTo(whySection.querySelector(".why-choose-video"),
          { x: -100, rotate: -5, scale: 0.86 },
          {
            x: 0,
            rotate: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: whySection,
              start: "top 85%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(whySection.querySelector(".why-choose-content"),
          { x: 100, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: whySection,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      }

      const testimonials = home.querySelector<HTMLElement>(".testimonials-section");
      if (testimonials) {
        gsap.to(testimonials.querySelector(".testimonials-watermark"), {
          xPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: testimonials,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.fromTo(testimonials.querySelectorAll(".testimonial-card"),
          { y: 90, rotate: (index) => index % 2 === 0 ? -3 : 3 },
          {
            y: 0,
            rotate: 0,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: testimonials,
              start: "top 75%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      }

      gsap.utils.toArray<HTMLElement>(
        ".help-process, .how-we-work-process",
        root
      ).forEach((process) => {
        const steps = process.querySelectorAll<HTMLElement>(
          ".help-step, .how-we-work-step"
        );
        const connectors = process.querySelectorAll<HTMLElement>(
          ".help-arrow-connector, .how-we-work-connector"
        );
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: process,
            start: "top 78%",
            once: true,
          },
        });

        timeline.from(steps, {
          y: 34,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.16,
          ease: "back.out(1.4)",
        });

        if (window.matchMedia("(min-width: 786px)").matches) {
          timeline.from(
            connectors,
            {
              scaleX: 0,
              autoAlpha: 0,
              transformOrigin: "left center",
              duration: 0.45,
              stagger: 0.12,
              ease: "power2.out",
            },
            "-=0.35"
          );
        } else {
          timeline.from(
            connectors,
            {
              autoAlpha: 0,
              duration: 0.35,
              stagger: 0.1,
            },
            "-=0.25"
          );
        }
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });

    return () => {
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, []);

  return <div ref={rootRef} className="gsap-page-root">{children}</div>;
}