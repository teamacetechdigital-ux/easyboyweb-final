"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import profileIcon1 from "../../../public/imgs/profile_icon1.svg";
import profileIcon2 from "../../../public/imgs/profile_icon2.svg";
import googleIcon from "../../../public/imgs/google_icon.svg";
import startIcon from "../../../public/imgs/start_icon.svg";

const testimonials = [
  {
    id: 1,
    name: "Adik Baghdasaryan",
    details: "Google Review",
    date: "3 years ago",
    profile: profileIcon1,
    review:
      "I’ve been working with Easyboyweb for several months now on a complex project. I have been extremely impressed with their skills, communication, dedication and ability to deliver excellent results.",
  },
  {
    id: 2,
    name: "The Travel Outlier LLC",
    details: "Local Guide · 11 Reviews · 13 Photos",
    date: "7 years ago",
    profile: profileIcon2,
    review:
      "Easyboyweb created a logo for my business. I didn’t know exactly what I wanted, but I was able to describe my vision and they executed it perfectly. It took several tries, but the final result was outstanding.",
  },
  {
    id: 3,
    name: "Terri Rookard",
    details: "Local Guide Level 5",
    date: "10 years ago",
    profile: profileIcon1,
    review:
      "My experience with Easyboyweb was outstanding. I was able to outline my vision for the website, and the result was exactly as I imagined. My website is responsive and viewable across every device.",
  },
  {
    id: 4,
    name: "The Travel Outlier LLC",
    details: "Local Guide · 11 Reviews · 13 Photos",
    date: "7 years ago",
    profile: profileIcon2,
    review:
      "The team understood my requirements and created a professional solution for my business. Their communication was clear throughout the project, and I am extremely pleased with the finished work.",
  },
  {
    id: 5,
    name: "Terri Rookard",
    details: "Local Guide Level 5",
    date: "10 years ago",
    profile: profileIcon1,
    review:
      "Easyboyweb delivered an excellent website that works perfectly across desktop, tablet and mobile. The entire process was smooth, professional and handled with great attention to detail.",
  },
  {
    id: 6,
    name: "The Travel Outlier LLC",
    details: "Local Business Owner",
    date: "6 years ago",
    profile: profileIcon2,
    review:
      "Working with Easyboyweb was a great experience. They transformed our ideas into a modern digital solution that has helped us improve our online presence and connect with more customers.",
  },
];

export default function Testimonials() {
  const [expandedId, setExpandedId] = useState<number | null>(
    null
  );

  const toggleReview = (id: number) => {
    setExpandedId((currentId) =>
      currentId === id ? null : id
    );
  };

  return (
    <section className="testimonials-section">
      <div
        className="testimonials-watermark font-aloevera"
        aria-hidden="true"
      >
        Testimonials
      </div>

      <h2 className="testimonials-heading font-aloevera">
        Real Businesses. Real Growth.
        <br />
        Real Results.
      </h2>

      <div className="testimonials-slider">
        <div
          className={`testimonials-track ${
            expandedId !== null
              ? "testimonials-track-paused"
              : ""
          }`}
        >
          {[0, 1].map((copyNumber) => (
            <div
              className="testimonials-set"
              key={copyNumber}
              aria-hidden={copyNumber === 1}
            >
              {testimonials.map((testimonial) => {
                const isExpanded =
                  expandedId === testimonial.id;

                return (
                  <article
                    className={`testimonial-card ${
                      isExpanded
                        ? "testimonial-card-expanded"
                        : ""
                    }`}
                    key={`${copyNumber}-${testimonial.id}`}
                  >
                    <div className="testimonial-card-header">
                      <div className="testimonial-person">
                        <Image
                          src={testimonial.profile}
                          alt={`${testimonial.name} profile`}
                          width={36}
                          height={36}
                        />

                        <div>
                          <h3 className="font-inter">
                            {testimonial.name}
                          </h3>

                          <p className="font-inter">
                            {testimonial.details}
                          </p>
                        </div>
                      </div>

                      <Image
                        className="testimonial-google-icon"
                        src={googleIcon}
                        alt="Google"
                        width={18}
                        height={18}
                      />
                    </div>

                    <div className="testimonial-rating">
                      <Image
                        src={startIcon}
                        alt="Five-star rating"
                        width={98}
                        height={17}
                      />

                      <span className="font-inter">
                        {testimonial.date}
                      </span>
                    </div>

                    <div className="testimonial-review">
                      <p
                        className={`font-inter ${
                          isExpanded
                            ? "testimonial-review-expanded"
                            : ""
                        }`}
                      >
                        {testimonial.review}
                      </p>

                      <button
                        type="button"
                        className="testimonial-read-more font-inter"
                        onClick={() =>
                          toggleReview(testimonial.id)
                        }
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-button-wrapper">
        <Link
          href="/testimonials"
          className="testimonials-full-button font-inter"
        >
          View Full Testimonials
        </Link>
      </div>
    </section>
  );
}