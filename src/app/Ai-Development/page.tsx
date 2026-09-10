import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import EasyBoyWebPro from "@/src/components/sections/EasyBoyWebPro";
import Testimonials from "@/src/components/sections/Testimonials";
import WebsiteCRM from "@/src/components/sections/WebsiteCRM";
import Faq from "@/src/components/sections/Faq";
import Image from "next/image";

import React from 'react'


const customAiServices = [
  {
    icon: "/imgs/ai_icon1.svg",
    title: "Custom AI Development",
    description:
      "We automate repetitive tasks across your business using AI + smart workflows.",
    listTitle: "Use cases include:",
    points: [
      "Lead intake → qualification → follow-up",
      "Call handling → scheduling → CRM updates",
      "Email & SMS automation",
      "Form submissions → routing → notifications",
      "AI-powered reminders and confirmations",
    ],
    result:
      "Result: fewer manual steps, faster response times, and better customer experiences.",
  },
  {
    icon: "/imgs/ai_icon2.svg",
    title: "AI Consulting & Strategy",
    description:
      "Not sure where AI fits in your business? We help you identify high-impact opportunities where AI can deliver immediate ROI.",
    listTitle: "Our consulting includes:",
    points: [
      "AI opportunity audits",
      "Workflow analysis & optimization",
      "Tool selection & architecture planning",
      "Cost-benefit analysis",
      "Implementation roadmap",
    ],
    result:
      "We focus on real automation wins, not trendy tools you’ll never use.",
  },
  {
    icon: "/imgs/ai_icon3.svg",
    title: "AI Workflow Automation",
    description:
      "We automate repetitive tasks across your business using AI + smart workflows.",
    listTitle: "Examples",
    points: [
      "Lead intake → qualification → follow-up",
      "Call handling → scheduling → CRM updates",
      "Email & SMS automation",
      "Form submissions → routing → notifications",
      "AI-powered reminders and confirmations",
    ],
    result:
      "Result: fewer manual steps, faster response times, and better customer experiences.",
  },
];


const easyboywebAiPoints = [
  "Built specifically for small & mid-sized businesses",
  "Custom solutions — not off-the-shelf AI",
  "Full integration with websites, CRMs, and phone systems",
  "Scalable, secure, and future-ready",
  "Strategy + execution under one roof",
];


type CallAgentPoint = {
  text: string;
  subPoints?: string[];
};

type CallAgentCard = {
  title: string;
  points: CallAgentPoint[];
  note?: string;
};

const callAgentCards: CallAgentCard[] = [
  {
    title: "AI Greet – Intelligent Call Handling",
    points: [
      {
        text: "Instant professional greeting for every call",
      },
      {
        text: "Custom scripts, tone, and call flow",
      },
      {
        text: "Natural conversation understanding",
      },
      {
        text: "Clear, confident, and helpful communication",
      },
    ],
    note: "Your business never misses a call — day or night.",
  },
  {
    title: "Qualified Lead Detection (AI Logic)",
    points: [
      {
        text: "Automated qualification questions on every call",
      },
      {
        text: "Intelligent validation of caller responses",
      },
      {
        text: "Automatic categorization:",
        subPoints: [
          "Qualified",
          "Not Qualified",
          "Needs More Information",
        ],
      },
      {
        text: "100% call coverage — no missed opportunities",
      },
      {
        text: "Smart call transfer rules",
      },
      {
        text: "Instant transfer of qualified callers to assigned team members (sales, support, legal, etc.)",
      },
    ],
  },
  {
    title: "Handling Non-Qualified Callers",
    points: [
      {
        text: "Automated intake forms sent via SMS or Email",
      },
      {
        text: "Appointment scheduling for future follow-up",
      },
      {
        text: "Professional, polite communication maintained at all times",
      },
    ],
    note: "Your team only talks to leads that matter.",
  },
  {
    title: "Multilanguage Conversations",
    points: [
      {
        text: "Supports multiple languages (English, Spanish, Hindi, and more)",
      },
      {
        text: "Intelligent language switching during calls",
      },
    ],
    note: "Perfect for diverse customer bases.",
  },
  {
    title: "Voice, Tone & Background Customization",
    points: [
      {
        text: "Background sound options:",
        subPoints: ["Office ambiance", "Soft music", "Silent"],
      },
      {
        text: "Personality styles:",
        subPoints: [
          "Professional",
          "Friendly",
          "Formal",
          "Warm",
          "Straightforward",
        ],
      },
      {
        text: "Adjustable speaking speed",
      },
    ],
    note: "Your AI sounds like your brand.",
  },
  {
    title: "Knowledge Base Integration",
    points: [
      {
        text: "Learns from uploaded PDFs and documents",
      },
      {
        text: "Uses your company’s:",
        subPoints: [
          "Services",
          "Policies",
          "FAQs",
          "Key business information",
        ],
      },
      {
        text: "Provides accurate, company-specific answers",
      },
      {
        text: "Continuously improves as materials are updated",
      },
    ],
  },
  {
    title: "Custom Voice Integration (ElevenLabs)",
    points: [
      {
        text: "Create and use your own custom voice",
      },
      {
        text: "Natural, human-like delivery",
      },
      {
        text: "API-based integration for seamless updates",
      },
    ],
    note: "Your AI can literally sound like you.",
  },
  {
    title: "Appointment Scheduling",
    points: [
      {
        text: "Real-time calendar availability checks",
      },
      {
        text: "Automatic booking during calls",
      },
      {
        text: "Google Calendar synchronization",
      },
      {
        text: "Clear booking confirmations for callers",
      },
    ],
    note: "No back-and-forth. No missed appointments.",
  },
];

function Custom_Ai_Developement(){

  return (
    <>
    <Header/>




<section className="ai-solutions-section">
  <div className="container ai-solutions-container">
    <div className="ai-solutions-content">
      <p className="ai-solutions-label font-aloevera">
        AI Solutions for Small Businesses
      </p>

      <h1 className="ai-solutions-heading font-aloevera">
        Automate. Scale.
        <span className="clr-chng">Serve Smarter.</span>
      </h1>

      <div className="ai-solutions-description font-inter">
        <p>
          At Easyboyweb, we help small and growing businesses use AI
          in practical, revenue-driving ways — not complicated theory.
          Our AI solutions are designed to save time, reduce labor
          costs, improve customer experience, and increase
          conversions, all while integrating seamlessly into your
          existing systems.
        </p>

        <p>
          Whether you need a custom AI tool, AI consulting, or
          automated workflows, we build AI that actually works for
          your business.
        </p>
      </div>

      {/* <Link
        href="/contact"
        className="ai-solutions-button font-inter"
      >
        Let&apos;s Talk
      </Link> */}
    </div>
  </div>
</section>

<section className="custom-ai-section">
  <div className="container">
    <div className="custom-ai-heading">
      <span className="font-aloevera">
        Our AI Services
      </span>

      <h2 className="font-aloevera">
        Custom AI Development
      </h2>

      <p className="font-inter">
        We design and build custom AI solutions tailored to your
        business operations and goals.
      </p>
    </div>

    <div className="custom-ai-grid">
      {customAiServices.map((service) => (
        <article className="custom-ai-card" key={service.title}>
          <Image
            src={service.icon}
            alt={`${service.title} icon`}
            width={72}
            height={72}
          />

          <h3 className="font-inter">
            {service.title}
          </h3>

          <p className="custom-ai-description font-inter">
            {service.description}
          </p>

          <h4 className="font-inter">
            {service.listTitle}
          </h4>

          <ul className="font-inter">
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <p className="custom-ai-result font-inter">
            {service.result}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>







<section className="ai-call-agent-section">
  <div className="container">
    <div className="ai-call-agent-header">
      <p className="ai-call-agent-label font-aloevera">
        AI Call Handling Agent
      </p>

      <h2 className="ai-call-agent-heading font-aloevera">
        Your 24/7 Intelligent Phone System
      </h2>

      <p className="ai-call-agent-intro font-inter">
        One of our most powerful AI solutions is our AI Call
        Handling Agent, designed to professionally handle inbound
        and outbound calls, qualify leads, and route only the right
        calls to your team.
      </p>
    </div>

    <div className="ai-call-agent-grid">
      {callAgentCards.map((card) => (
        <article
          className="ai-call-agent-card"
          key={card.title}
        >
          <h3 className="font-inter">{card.title}</h3>

          <ul className="ai-call-agent-list font-inter">
            {card.points.map((point) => (
              <li key={point.text}>
                <span>{point.text}</span>

                {point.subPoints && (
                  <ul>
                    {point.subPoints.map((subPoint) => (
                      <li key={subPoint}>{subPoint}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {card.note && (
            <p className="ai-call-agent-note font-inter">
              {card.note}
            </p>
          )}
        </article>
      ))}
    </div>
  </div>
</section>







<section className="why-easyboyweb-ai-section">
  <div className="container">
    <div className="why-easyboyweb-ai-content">
      <div className="why-easyboyweb-ai-text">
        <h2 className="font-aloevera">
          Why easyboyweb AI?
        </h2>

        <ul className="font-inter">
          {easyboywebAiPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <p className="font-inter">
          We don&apos;t just “add AI” — we engineer systems that
          grow your business.
        </p>
      </div>

      <div className="why-easyboyweb-ai-image">
        <Image
          src="/imgs/AI_Developement.svg"
          alt="Easyboyweb AI development dashboard"
          width={720}
          height={478}
        />
      </div>
    </div>
  </div>
</section>

<Faq/>

<section className="ai-cta-section">
  <div className="container">
    <div className="ai-cta-content">
      <h2 className="ai-cta-heading font-aloevera">
        Ready To Automate
        <br />
        Smarter?
      </h2>

      <p className="ai-cta-description font-inter">
        Let&apos;s identify where AI can save you time, cut costs,
        and increase revenue.
      </p>

      <div className="ai-cta-actions">
        <a
          href="/contact"
          className="ai-cta-button ai-cta-primary font-inter"
        >
          Schedule An AI Strategy Call
        </a>

        <a
          href="/contact?service=ai-demo"
          className="ai-cta-button ai-cta-secondary font-inter"
        >
          Request A Custom AI Demo
        </a>
      </div>
    </div>
  </div>
</section>

<Testimonials/>
<EasyBoyWebPro/>
    <Footer/>
    
    </>
  )
}

export default Custom_Ai_Developement