"use client";

import { useState } from "react";
const faqItems = [
  {
    question: "Do You Build Fully Custom Websites?",
    answer:
      "Yes. We create responsive, custom websites built around your brand, business goals, and customer journey rather than relying on one-size-fits-all solutions.",
  },
  {
    question: "Will My Website Be Designed To Generate Leads?",
    answer:
      "Yes. We design clear user journeys, strong calls-to-action, and conversion-focused layouts that help turn visitors into qualified leads.",
  },
  {
    question: "Can You Redesign My Existing Website?",
    answer:
      "Yes. We can completely redesign your existing website to improve its appearance, speed, functionality, mobile experience, and overall performance.",
  },
  {
    question: "Do You Provide SEO Services?",
    answer:
      "Yes. We provide technical SEO, on-page optimization, keyword strategy, local SEO, and performance improvements to increase your online visibility.",
  },
  {
    question: "Can You Integrate My Website With A CRM?",
    answer:
      "Yes. We can connect your website with your preferred CRM to automate lead collection, customer management, follow-ups, and internal workflows.",
  },
  {
    question: "Do You Offer Support After The Website Launches?",
    answer:
      "Yes. We provide ongoing support, maintenance, security updates, backups, performance monitoring, and assistance after your website is launched.",
  },
];


import React from 'react'

type FaqItem = {
  question: string;
  answer: string;
};

interface FaqProps {
  items?: FaqItem[];
  className?: string;
}

function Faq({ items = faqItems, className = "" }: FaqProps) {

  const [openFaq, setOpenFaq] = useState<number | null>(0);

const handleFaqToggle = (index: number) => {
  setOpenFaq((currentIndex) =>
    currentIndex === index ? null : index
  );
};
  return (
    <>
    
    <section className={`faq-section ${className}`.trim()}>
  <div className="container">
    <h2 className="faq-heading font-aloevera">
      Have Questions? We&apos;ve Got Answers.
    </h2>

    <div className="faq-list">
      {items.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <div
            className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
            key={faq.question}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => handleFaqToggle(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="faq-question-text font-aloevera">
                {faq.question}
              </span>

              <span
                className="faq-toggle-icon"
                aria-hidden="true"
              />
            </button>

            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
            >
              <p className="font-inter">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Faq