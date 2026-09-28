"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import whoweare1 from "../../../public/imgs/whoweare1.svg";
import whoweare2 from "../../../public/imgs/whoweare2.svg";
import whoweare3 from "../../../public/imgs/whoweare3.svg";
import whoweare4 from "../../../public/imgs/whoweare4.svg";
import whoweare5 from "../../../public/imgs/whoweare5.svg";

const identityCards = [
  {
    title: "Reliable And Support",
    icon: whoweare1,
  },
  {
    title: "Expertise & Quality Assurance",
    icon: whoweare2,
  },
  {
    title: "Trustworthy & 100% Ownership",
    icon: whoweare3,
  },
  {
    title: "Transparent Communication",
    icon: whoweare4,
  },
  {
    title: "Flexibility & Adaptability",
    icon: whoweare5,
  },
];


const easyPoints = [
  "Attract & Retain Leads",
  "Keep Your Site Up-To-Date, Secure And Backed Up",
  "Grow Your Web Presence Online",
  "Outperform Your Competitors",
  "Peace Of Mind Hosting & Maintenance/Management",
  "Focus On Our Business & Reduce Stress",
];

const statistics = [
  {
    number: "20+",
    label: "Years Experience",
  },
  {
    number: "1200+",
    label: "Websites Built",
  },
  {
    number: "300+",
    label: "Mobile Apps",
  },
  {
    number: "1500+",
    label: "Happy Clients",
  },
  {
    number: "100%",
    label: "Satisfaction",
  },
];

function StatisticCounter({ number }: { number: string }) {
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const match = number.match(/^(\d+)(.*)$/);
  const targetValue = match ? Number(match[1]) : 0;
  const suffix = match?.[2] ?? "";

  useEffect(() => {
    const counter = counterRef.current;

    if (!counter) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let hasStarted = false;

    const showFinalValue = () => {
      window.cancelAnimationFrame(animationFrame);
      counter.textContent = number;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted || motionPreference.matches) return;

        hasStarted = true;
        const startedAt = performance.now();
        const duration = 1600;
        counter.textContent = `0${suffix}`;

        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startedAt) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          counter.textContent = `${Math.round(targetValue * easedProgress)}${suffix}`;

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(animate);
          }
        };

        animationFrame = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    const updateMotionPreference = () => {
      if (motionPreference.matches) {
        showFinalValue();
        observer.disconnect();
      } else if (!hasStarted) {
        observer.observe(counter);
      }
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", updateMotionPreference);
      showFinalValue();
    };
  }, [number, suffix, targetValue]);

  return (
    <strong className="font-aloevera" aria-label={number}>
      <span ref={counterRef} aria-hidden="true" style={{ font: "inherit", margin: 0 }}>{number}</span>
    </strong>
  );
}

export default function WhoWeAre() {
  return (
    <section className="who-we-are-section">
      <div className="container relative">
        <h2 className="who-we-are-heading font-aloevera">
          Who We Are
        </h2>

        <div className="identity-cards">
          {identityCards.map((item) => (
            <article className="identity-card" key={item.title}>
              <div className="identity-icon">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={83}
                  height={86}
                />
              </div>

              <h3 className="font-inter">{item.title}</h3>
            </article>
          ))}
        </div>

        <h2 className="easy-heading font-aloevera">
          We Make It Easy!
        </h2>

        <div className="easy-points">
          {easyPoints.map((point) => (
            <div className="easy-point font-inter" key={point}>
              {point}
            </div>
          ))}
        </div>

        <div className="statistics-box">
          {statistics.map((stat) => (
            <div className="statistic-item" key={stat.label}>
              <StatisticCounter number={stat.number} />

              <span className="font-inter">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
