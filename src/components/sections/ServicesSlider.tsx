"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import skill1 from "../../../public/imgs/skill1.svg";
import skill2 from "../../../public/imgs/skill2.svg";
import skill3 from "../../../public/imgs/skill3.svg";
import skill4 from "../../../public/imgs/skill4.svg";
import skill5 from "../../../public/imgs/skill5.svg";
import skill6 from "../../../public/imgs/skill6.svg";

const services = [
  {
    title: "SEO",
    icon: skill5,
    description:
      "Boost your visibility and rank higher on search engines with data-driven SEO strategies tailored to your business. We optimize your website, content, and performance to drive organic traffic and qualified leads.",
  },
  {
    title: "Mobile Apps",
    icon: skill2,
    description:
      "We design and develop high-performance mobile apps for iOS and Android that deliver seamless user experiences. From concept to launch, our apps are built to scale, engage users, and drive real business results.",
  },
  {
    title: "Automated Social Media",
    icon: skill6,
    description:
      "Streamline your social media with smart automation tools that keep your brand active and engaging. We create, schedule, and optimize content to grow your audience and increase conversions effortlessly.",
  },
  {
    title: "Web Maintenance",
    icon: skill3,
    description:
      "Keep your website secure, fast, and up-to-date with our reliable maintenance and support services. We handle updates, backups, and performance optimization so you can focus on running your business.",
  },
  {
    title: "UI/UX Software Development",
    icon: skill1,
    description:
      "We craft intuitive, user-centered designs that enhance usability and elevate digital experiences. Our UI/UX solutions are built to improve engagement, retention, and overall product performance.",
  },
  {
    title: "Digital Branding",
    icon: skill4,
    description:
      "Build a strong, memorable brand identity that connects with your audience and stands out online. From logos to full brand systems, we create cohesive visuals that drive recognition and trust.",
  },
];

export default function ServicesSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const loopedServices = useMemo(
    () => [...services, ...services, ...services],
    []
  );

  const getScrollDistance = () => {
    const slider = sliderRef.current;
    const card = slider?.querySelector<HTMLElement>(".service-slider-card");

    if (!slider || !card) return 0;

    const gap = Number.parseFloat(window.getComputedStyle(slider).gap) || 30;
    return card.getBoundingClientRect().width + gap;
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const frame = requestAnimationFrame(() => {
      slider.scrollTo({
        left: slider.scrollWidth / 3,
        behavior: "auto",
      });
    });

    const interval = window.setInterval(() => {
      const scrollDistance = getScrollDistance();
      const currentLoopStart = slider.scrollWidth / 3;
      const currentLoopEnd = currentLoopStart * 2;

      if (!scrollDistance) return;

      if (slider.scrollLeft + scrollDistance >= currentLoopEnd) {
        slider.scrollTo({
          left: currentLoopStart,
          behavior: "auto",
        });
      }

      slider.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
    }, 3500);

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(interval);
    };
  }, []);

  const moveSlider = (direction: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollDistance = getScrollDistance();

    if (!scrollDistance) return;

    const loopStart = slider.scrollWidth / 3;
    const loopEnd = loopStart * 2;
    const nextPosition = slider.scrollLeft + direction * scrollDistance;

    slider.scrollTo({
      left: nextPosition < loopStart
        ? loopEnd - scrollDistance
        : nextPosition >= loopEnd
          ? loopStart
          : nextPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="fifth-section">
      <div className="container">
        <div className="flex items-center justify-between gap-8 mob-col-cust">
          <h2 className="font-aloevera w-1/2 sect-head">
            Everything You Need to
            <br />
            Grow Under One Roof
          </h2>

          <div className="slider-controls w-1/2 justify-end">
            <button
              type="button"
              className="slider-arrow slider-arrow-previous"
              onClick={() => moveSlider(-1)}
              aria-label="Previous services"
            >
              &#8592;
            </button>

            <button
              type="button"
              className="slider-arrow slider-arrow-next"
              onClick={() => moveSlider(1)}
              aria-label="Next services"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="services-slider" ref={sliderRef}>
          {loopedServices.map((service, index) => (
            <article
              className="service-slider-card"
              key={`${service.title}-${index}`}
            >
              <div className="service-slider-icon">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                />
              </div>

              <h3 className="font-aloevera">
                {service.title}
              </h3>

              <p className="font-inter">
                {service.description}
              </p>

              <Link
                href="/services"
                className="service-learn-more font-inter"
              >
                <span>Learn More</span>
                <span
                  className="learn-more-arrow"
                  aria-hidden="true"
                >
                  &#8594;
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/services"
            className="all-services-button banner-btn font-inter"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}