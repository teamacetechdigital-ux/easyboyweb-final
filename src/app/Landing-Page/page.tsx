"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from '@/src/components/layout/Header'
import Faq from '@/src/components/sections/Faq'


const subscriptionLogoRows = [
  {
    direction: "left",
    logos: [
      "/imgs/logo_landing1.svg",
      "/imgs/logo_landing2.svg",
      "/imgs/logo_landing3.svg",
      "/imgs/logo_landing4.svg",
      "/imgs/logo_landing5.svg",
      "/imgs/logo_landing6.svg",
      "/imgs/logo_landing7.svg",
    ],
  },
  {
    direction: "right",
    logos: [
      "/imgs/logo_landing8.svg",
      "/imgs/logo_landing9.svg",
      "/imgs/logo_landing10.svg",
      "/imgs/logo_landing11.svg",
      "/imgs/logo_landing12.svg",
      "/imgs/logo_landing13.svg",
    ],
  },
  {
    direction: "left",
    logos: [
      "/imgs/logo_landing14.svg",
      "/imgs/logo_landing15.svg",
      "/imgs/logo_landing16.svg",
      "/imgs/logo_landing17.svg",
      "/imgs/logo_landing18.svg",
      "/imgs/logo_landing19.svg",
      "/imgs/logo_landing20.svg",
    ],
  },
];


const dataStats = [
  {
    value: 78,
    suffix: "%",
    text: "Of Customers Buy From The First Responder",
  },
  {
    value: 391,
    suffix: "%",
    text: "Higher Conversions With Fast Follow-Up",
  },
  {
    value: 29,
    suffix: "%",
    text: "Increase In Sales Using CRM Systems",
  },
  {
    value: 53,
    suffix: "%",
    text: "More Conversions With Automation",
  },
];


const businessTools = [
  {
    title: "CRM",
    description:
      "Manage all your leads, contacts, and deals in one clean, easy to use dashboard.",
    icon: "/imgs/tool-land-icon1.svg",
  },
  {
    title: "AI Chatbot",
    description:
      "Engage and qualify website visitors automatically with 24/7 AI-powered chat.",
    icon: "/imgs/tool-land-icon2.svg",
  },
  {
    title: "Email & SMS Marketing",
    description:
      "Send personalized campaigns and automated follow-ups through email and text.",
    icon: "/imgs/tool-land-icon3.svg",
  },
  {
    title: "Automations",
    description:
      "Trigger smart workflows that follow up, nurture, and convert leads — all on autopilot.",
    icon: "/imgs/tool-land-icon4.svg",
  },
  {
    title: "Funnels",
    description:
      "Build high-converting sales funnels and landing pages without needing a developer.",
    icon: "/imgs/tool-land-icon5.svg",
  },
  {
    title: "Website Builder",
    description:
      "Create fast, responsive websites that look great on every device. No coding required.",
    icon: "/imgs/tool-land-icon6.svg",
  },
  {
    title: "Appointments & Bookings",
    description:
      "Let leads book appointments with you instantly using integrated calendar scheduling.",
    icon: "/imgs/tool-land-icon7.svg",
  },
  {
    title: "Call Tracking",
    description:
      "Track every call, see where your leads come from, and never miss a follow-up.",
    icon: "/imgs/tool-land-icon8.svg",
  },
  {
    title: "Sales Pipeline Reports",
    description:
      "Get a visual breakdown of your sales pipeline to spot bottlenecks and track performance.",
    icon: "/imgs/tool-land-icon9.svg",
  },
  {
    title: "AI Copywriting",
    description:
      "Generate persuasive emails, texts, ads, and pages instantly with built-in AI tools.",
    icon: "/imgs/tool-land-icon10.svg",
  },
  {
    title: "Web Chat",
    description:
      "Capture leads directly from your website with real-time messaging and follow-up.",
    icon: "/imgs/tool-land-icon11.svg",
  },
  {
    title: "Google Review Manager",
    description:
      "Automate review requests and boost your online reputation without lifting a finger.",
    icon: "/imgs/tool-land-icon12.svg",
  },
];

const additionalServices = [
  {
    title: "Custom Website Design",
    description:
      "Beautiful, fully custom responsive websites built to match your brand.",
    icon: "/imgs/needmore_icon1.svg",
    buttonText: "Get A Free Quote",
    link: "/contact?service=custom-website",
  },
  {
    title: "Custom Funnel Design",
    description:
      "Strategically built funnels that seamlessly guide your visitors from click to customer.",
    icon: "/imgs/needmore_icon2.svg",
    buttonText: "Get A Free Quote",
    link: "/contact?service=custom-funnel",
  },
  {
    title: "Unlimited AI Employee",
    description:
      "Your tireless digital assistant working 24/7 to capture leads, follow up, and close deals.",
    icon: "/imgs/needmore_icon3.svg",
    buttonText: "$149/Month",
    link: "/contact?service=ai-employee",
  },
];



function Landing_page() {

    const dataSectionRef = useRef<HTMLElement | null>(null);
const dataAnimationStarted = useRef(false);

const [dataCounts, setDataCounts] = useState<number[]>(
  () => dataStats.map(() => 0)
);

useEffect(() => {
  const section = dataSectionRef.current;
  let animationFrame: number | null = null;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (
        !entry.isIntersecting ||
        dataAnimationStarted.current
      ) {
        return;
      }

      dataAnimationStarted.current = true;

      const animationDuration = 1800;
      const startingTime = performance.now();

      const updateNumbers = (currentTime: number) => {
        const elapsedTime = currentTime - startingTime;

        const progress = Math.min(
          elapsedTime / animationDuration,
          1
        );

        const smoothProgress =
          1 - Math.pow(1 - progress, 3);

        setDataCounts(
          dataStats.map((stat) =>
            Math.round(stat.value * smoothProgress)
          )
        );

        if (progress < 1) {
          animationFrame =
            requestAnimationFrame(updateNumbers);
        }
      };

      animationFrame =
        requestAnimationFrame(updateNumbers);

      observer.disconnect();
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(section);

  return () => {
    observer.disconnect();

    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
    }
  };
}, []);


const gettingStartedSteps = [
  {
    number: "1",
    text: (
      <>
        Choose Your Plan For You
        <br />
        & Your Business
      </>
    ),
  },
  {
    number: "2",
    text: (
      <>
        Complete Quick
        <br />
        Onboarding
      </>
    ),
  },
  {
    number: "3",
    text: (
      <>
        Start Capturing And
        <br />
        Converting Leads
      </>
    ),
  },
];

const pricingPlans = [
  {
    name: "EasyBoyWeb Pro Starter",
    price: "97",
    headerClass: "pricing-plan-header-blue",
    features: [
      "Funnel & Website Builder",
      "CRM & Messaging Center",
      "VOIP Phone System",
      "Email & SMS Marketing",
      "Drag And Drop Email Builder",
      "Appointments & Calendars",
      "Opportunity Pipelines",
      "Reputation Management",
      "Forms & Surveys",
      "1 Team Member",
    ],
  },
  {
    name: "EasyBoyWeb Pro Growth",
    price: "197",
    headerClass: "pricing-plan-header-dark",
    features: [
      "Everything In Starter +",
      "Event Management",
      "Workflows & Automations",
      "Missed Call Text Back",
      "Website Chat",
      "Social Planner",
      "Mobile App & Web Portal",
      "Blogs",
      "Up To 15 Team Members",
      "$20 Credits Included",
    ],
  },
  {
    name: "EasyBoyWeb Pro Engage",
    price: "297",
    headerClass: "pricing-plan-header-blue",
    features: [
      "Everything In Growth Plus:",
      "Courses",
      "Memberships",
      "Communities",
      "Affiliate Manager",
      "HTML Builder",
      "Triggers",
      "All Reporting",
      "Up To 30 Team Members",
      "$40 Credits Included",
    ],
  },
];



const footerSocials = [
  {
    name: "Facebook",
    icon: "/imgs/facebook_icon.svg",
    href: "#",
  },
  {
    name: "YouTube",
    icon: "/imgs/youtube_icon.svg",
    href: "#",
  },
  {
    name: "Instagram",
    icon: "/imgs/instagram_icon.svg",
    href: "#",
  },
  {
    name: "Twitter",
    icon: "/imgs/twitter_icon.svg",
    href: "#",
  },
  {
    name: "TikTok",
    icon: "/imgs/tiktok_icon.svg",
    href: "#",
  },
];


const landingBenefits = [
  {
    title: "Increase Sales",
    icon: "/imgs/INCREASESALES_landing.svg",
  },
  {
    title: "Automate Everything",
    icon: "/imgs/landing_icon2.svg",
  },
  {
    title: "15+ Softwares In One",
    icon: "/imgs/SOFTWARES_IN_ONE_landing.svg",
  },
];

const landingPageFaqs = [
  {
    question: "Do I need technical skills to use EasyBoyWeb Pro?",
    answer: "No. EasyBoyWeb Pro is built for business owners and includes intuitive tools, templates, and guided workflows without requiring technical skills.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide product support, onboarding guidance, troubleshooting, and help with using the platform's tools and automations.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. You can cancel your subscription at any time, and your access continues through the end of your current billing period.",
  },
  {
    question: "Is there a setup fee?",
    answer: "There is no required setup fee for starting with EasyBoyWeb Pro. Optional custom services can be added when needed.",
  },
  {
    question: "Can I migrate from my current CRM?",
    answer: "Yes. We can help plan and support a migration of your contacts, leads, pipelines, and key business data from your current CRM.",
  },
  {
    question: "Is EasyBoyWeb Pro HIPAA compliant?",
    answer: "HIPAA compliance depends on your account setup and use case. Contact our team so we can review your requirements and the appropriate safeguards.",
  },
  {
    question: "How secure is my data?",
    answer: "EasyBoyWeb Pro uses account controls and secure platform infrastructure to help protect your data and access.",
  },
  {
    question: "How does your automation work?",
    answer: "Automations use triggers and workflows to send follow-ups, update records, assign tasks, and move leads through your process automatically.",
  },
  {
    question: "What platforms do you integrate with?",
    answer: "EasyBoyWeb Pro connects with common marketing, communication, scheduling, payment, and business tools through available integrations and workflows.",
  },
];


  return (
    <main className="landing-page">
    <Header/>
    <section className="landing-hero-section">
  <div className="container">
    <div className="landing-hero-content">
      <h1 className="landing-hero-heading font-inter">
        All-In-One CRM &{" "}
        <span className="clr-chng">Marketing</span>
        <br />
        <span className="clr-chng">
          Automation Platform
        </span>{" "}
        For
        <br />
        Small Businesses
      </h1>

      <p className="landing-hero-description font-inter">
        Capture leads, automate follow-ups, and close more sales
        — all from
        <br className="landing-description-break" />
        one powerful dashboard.
      </p>

      <a
        href="#ebw-pro-demo"
        className="landing-hero-button font-inter"
      >
        See EBW Pro In Action
      </a>
    </div>
  </div>
</section>
    
    



  {/* Benefits Section */}

  <section className="landing-benefits-section">
    <div className="container">
      <div className="landing-benefits-list">
        {landingBenefits.map((benefit) => (
          <div
            className="landing-benefit-item"
            key={benefit.title}
          >
            <div className="landing-benefit-icon">
              <Image
                src={benefit.icon}
                alt={`${benefit.title} icon`}
                width={86}
                height={86}
              />
            </div>

            <h3 className="landing-benefit-title font-inter">
              {benefit.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* EasyBoyWeb Pro Section */}

  <section className="landing-pro-section">
    <div
      className="landing-pro-watermark-layer"
      aria-hidden="true"
    >
      <Image
        src="/imgs/watermark_landing.svg"
        alt=""
        width={2129}
        height={731}
        className="landing-pro-watermark"
      />
    </div>

    <div className="container">
      <h2 className="landing-pro-title font-inter">
        Introducing
        <span className="clr-chng">
          EasyBoyWeb Pro!
        </span>
      </h2>

      <div className="landing-video-window">
        <div
          className="landing-video-dots"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className="landing-video-address"
          aria-hidden="true"
        />

        <div className="landing-video-screen">
          <button
            type="button"
            className="landing-video-play"
            aria-label="Play EasyBoyWeb Pro introduction video"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5.5v13l10-6.5L8 5.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>


<section className="multiple-tools-section">
  <div className="container">
    <div className="multiple-tools-content">
      <div className="multiple-tools-copy">
        <h2 className="multiple-tools-heading font-inter">
          Still Using Multiple
          <br />
          Tools To{" "}
          <span className="clr-chng">
            Run Your
            <br />
            Business?
          </span>
        </h2>

        <p className="multiple-tools-description font-inter">
          Managing your CRM, email marketing, SMS, funnels,
          scheduling, and reviews across different platforms is
          slowing you down  and costing you leads.
          <br />
          You’re not just wasting time you’re losing revenue.
        </p>

        <ul className="multiple-tools-list font-inter">
          <li>Missed leads due to slow response</li>
          <li>Disconnected systems</li>
          <li>High monthly software costs</li>
          <li>Manual follow-ups</li>
        </ul>

        <a
          href="/get-started"
          className="multiple-tools-button font-inter"
        >
          Get Started
        </a>
      </div>

      <div className="multiple-tools-visual">
        <Image
          src="/imgs/AI_Developement.svg"
          alt="EasyBoyWeb AI development dashboard"
          width={720}
          height={478}
          className="multiple-tools-image"
        />
      </div>
    </div>
  </div>
</section>





{/*  */}
   <section
  ref={dataSectionRef}
  className="data-speaks-section"
>
  <div className="container">
    <div className="data-speaks-content">
      <h2 className="data-speaks-heading font-inter">
        The Data Speaks For Itself
      </h2>

      <div className="data-stats-grid">
        {dataStats.map((stat, index) => (
          <article
            className="data-stat-card"
            key={stat.text}
          >
            <strong
              className="data-stat-number font-inter"
              aria-label={`${stat.value}${stat.suffix}`}
            >
              {dataCounts[index]}
              {stat.suffix}
            </strong>

            <p className="data-stat-text font-inter">
              {stat.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section> 
    
    

{/*  */}
<section className="platform-automation-section">
  <div className="container">
    <div className="platform-automation-layout">
      <div className="platform-automation-image">
        <Image
          src="/imgs/bot-image-landing.svg"
          alt="EasyBoyWeb Pro CRM dashboard with AI assistant"
          fill
          sizes="(max-width: 786px) calc(100vw - 32px), 720px"
        />
      </div>

      <div className="platform-automation-content">
        <h2 className="platform-automation-heading font-inter">
          One Platform. Total
          <br className="platform-desktop-break" />
          Business Automation.
        </h2>

        <h3 className="platform-automation-subheading font-inter">
          Everything You Need To Capture,
          <br className="platform-desktop-break" />
          Nurture, And Convert Leads In
          <br className="platform-desktop-break" />
          One Place.
        </h3>

        <p className="platform-automation-description font-inter">
          EasyBoyWeb Pro brings together CRM, automation, AI
          tools, and marketing systems into a single dashboard 
          so you can focus on growing your business.
        </p>

        <a
          href="#get-started"
          className="platform-automation-button font-inter"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>



{/* tools */}
<section className="business-tools-section">
  <div className="container">
    <h2 className="business-tools-heading font-inter">
      Powerful Tools To Grow
      <br />
      Your Business Faster
    </h2>

    <div className="business-tools-grid">
      {businessTools.map((tool) => (
        <article
          className="business-tool-card"
          key={tool.title}
        >
          <div className="business-tool-icon">
            <Image
              src={tool.icon}
              alt={`${tool.title} icon`}
              fill
              sizes="77px"
            />
          </div>

          <h3 className="font-inter">{tool.title}</h3>

          <p className="font-inter">
            {tool.description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>    








<section className="subscription-section">
  <div className="subscription-panel">
    <div className="container">
      <h2 className="subscription-heading font-inter">
        Stop Paying For Multiple
        <br />
        Subscriptions
      </h2>

      <p className="subscription-description font-inter">
        Why pay for 10+ tools when one platform does it all?
        Save thousands annually while increasing efficiency and
        revenue.
      </p>

      <Image
        src="/imgs/table_landing.svg"
        alt="EasyBoyWeb Pro software subscription comparison table"
        width={1281}
        height={961}
        className="subscription-table-image"
      />

      <a
        href="/get-started"
        className="subscription-cta font-inter"
      >
        Get Started With Easy Boyweb
      </a>

      <h3 className="subscription-secondary-heading font-inter">
        1 Monthly Software Subscription To
        <br />
        Replace{" "}
        <span className="clr-chng">
          15+ Different Softwares
        </span>
      </h3>

      <div className="subscription-logo-sliders">
        {subscriptionLogoRows.map((row, rowIndex) => (
          <div
            key={`${row.direction}-${rowIndex}`}
            className={`subscription-logo-row subscription-logo-row--${row.direction}`}
          >
            <div
              className="subscription-logo-track"
              aria-hidden="true"
            >
              {[0, 1].map((copyIndex) => (
                <div
                  className="subscription-logo-group"
                  key={copyIndex}
                >
                  {row.logos.map((logo, logoIndex) => (
                    <Image
                      key={`${copyIndex}-${logoIndex}`}
                      src={logo}
                      alt=""
                      width={151}
                      height={40}
                      className="subscription-logo-image"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* getting startded numbers */}
<section className="getting-started-section">
  <div className="container">
    <div className="getting-started-content">
      <h2 className="getting-started-heading font-inter">
        Getting Started Is Simple
      </h2>

      <div className="getting-started-progress">
        <div
          className="getting-started-line"
          aria-hidden="true"
        />

        <div className="getting-started-steps">
          {gettingStartedSteps.map((step) => (
            <article
              className="getting-started-step"
              key={step.number}
            >
              <div className="getting-step-circle">
                <span className="font-inter">
                  {step.number}
                </span>
              </div>

              <p className="font-inter">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="getting-started-divider" />

      <div className="getting-started-cta">
        <p className="font-inter">
          What Are You Waiting For?
          <br />
          Try EasyBoyWeb Pro And Watch Your Business Start
          Running Itself!
        </p>

        <a
          href="#get-started"
          className="getting-started-button font-inter"
        >
          Get Started With Easy Boyweb
        </a>
      </div>
    </div>
  </div>
</section>



<section className="pricing-section">
  <div className="container">
    <div className="pricing-section-layout">
      <div className="pricing-heading-row">
        <h2 className="pricing-heading font-inter">
          <span className="clr-chng">
            Flexible Pricing
          </span>{" "}
          For
          <br />
          Every Business
        </h2>

        <p className="pricing-introduction font-inter">
          Affordable plans designed for startups, small
          businesses, and growing teams.
        </p>
      </div>

      <div className="pricing-plans-grid">
        {pricingPlans.map((plan) => (
          <article
            className="pricing-plan-card"
            key={plan.name}
          >
            <div
              className={`pricing-plan-header ${plan.headerClass}`}
            >
              <h3 className="font-inter">
                {plan.name}
              </h3>

              <div className="pricing-plan-divider" />

              <div className="pricing-plan-price font-inter">
                <strong>${plan.price}</strong>
                <span>Monthly</span>
              </div>
            </div>

            <ul className="pricing-feature-list">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Image
                    src="/imgs/bullet-icon.svg"
                    alt=""
                    width={18}
                    height={18}
                  />

                  <span className="font-inter">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#get-started"
              className="pricing-get-started font-inter"
            >
              Get Started
            </a>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>




<section className="need-more-section">
  <div className="container">
    <h2 className="need-more-heading font-inter">
      Need More? We&apos;ve Got
      <br />
      You Covered
    </h2>

    <div className="need-more-grid">
      {additionalServices.map((service) => (
        <article
          className="need-more-card"
          key={service.title}
        >
          <div className="need-more-icon">
            <Image
              src={service.icon}
              alt={`${service.title} icon`}
              fill
              sizes="77px"
            />
          </div>

          <h3 className="font-inter">
            {service.title}
          </h3>

          <p className="font-inter">
            {service.description}
          </p>

          <a
            href={service.link}
            className="need-more-button font-inter"
          >
            {service.buttonText}
          </a>
        </article>
      ))}
    </div>
  </div>
</section>




<section className="business-anywhere-section">
  <div className="container">
    <div className="business-anywhere-layout">
      <div className="business-anywhere-card">
        <div className="business-anywhere-content">
          <h2 className="font-inter">
            Run Your Business From Anywhere
          </h2>

          <p className="font-inter">
            Stay connected with your leads, messages, and calls
            directly from your mobile device.
          </p>

          <a
            href="#"
            className="business-anywhere-download"
            aria-label="Download EasyBoyWeb application"
          >
            <Image
              src="/imgs/play_button.svg"
              alt="Get it on Google Play and download on the App Store"
              width={562}
              height={84}
            />
          </a>
        </div>
      </div>

      <Image
        src="/imgs/screen_landing.png"
        alt="EasyBoyWeb mobile application screens"
        width={825}
        height={693}
        className="business-anywhere-screen"
      />
    </div>
  </div>
</section>


<Faq items={landingPageFaqs} className="landing-faq-section" />



<section className="entrepreneur-section">
  <div className="container">
    <div className="entrepreneur-content">
      <div className="entrepreneur-top">
        <div className="entrepreneur-introduction">
          <h2 className="entrepreneur-heading font-inter">
            Built By Entrepreneurs,
            <br />
            For Entrepreneurs
          </h2>

          <p className="entrepreneur-description font-inter">
            We’re a team of developers, marketers, and business
            owners passionate about helping companies grow
            through smarter systems.
          </p>
        </div>

        <div className="entrepreneur-credit-list">
          <div className="entrepreneur-credit-item">
            <Image
              src="/imgs/bullet-icon.svg"
              alt=""
              width={18}
              height={18}
            />

            <p className="font-inter">
              Depending on your plan, you&apos;ll receive free
              monthly credits for texting, phone numbers, call
              minutes, email sends, phone and email verification,
              and AI usage.
            </p>
          </div>

          <div className="entrepreneur-credit-item">
            <Image
              src="/imgs/bullet-icon.svg"
              alt=""
              width={18}
              height={18}
            />

            <p className="font-inter">
              $10 in credits gives you approximately 1,000 text
              messages, 1,000 call minutes, or 10,000 emails.
            </p>
          </div>
        </div>
      </div>

      <div className="entrepreneur-divider" />

      <div className="entrepreneur-note font-inter">
        <p>
          Once your monthly free credits are used, your account
          will automatically reload in $10 increments to keep
          your services running.
          <br />
          Please note: unused credits do not roll over to the next
          month.
        </p>
      </div>

      <div className="automation-cta">
        <div className="automation-cta-content">
          <h2 className="automation-cta-heading font-inter">
            Ready To Automate And
            <br />
            Scale Your Business?
          </h2>

          <p className="automation-cta-description font-inter">
            Join thousands of businesses using EasyBoyWeb Pro to
            save time, increase conversions, and grow faster.
          </p>

          <div className="automation-cta-buttons">
            <a
              href="/get-started"
              className="automation-cta-button automation-cta-primary font-inter"
            >
              Get Started Today
            </a>

            <a
              href="/book-demo"
              className="automation-cta-button automation-cta-secondary font-inter"
            >
              Book A Free Demo
            </a>
          </div>
        </div>

        <Image
          src="/imgs/rocket_img.svg"
          alt="EasyBoyWeb automation rocket"
          width={478}
          height={647}
          className="automation-rocket"
        />
      </div>
    </div>
  </div>
</section>



<footer className="easyboyweb-footer">
  <div className="container">
    <div className="easyboyweb-footer-content">
      <Image
        src="/imgs/logo.svg"
        alt="EasyBoyWeb"
        width={365}
        height={75}
        className="easyboyweb-footer-logo"
      />

      <p className="easyboyweb-footer-description font-inter">
        We’re a team of entrepreneurs, engineers, and designers who
        love solving tough problems. We believe everyone’s got a
        natural drive to create, and through real collaboration, we
        can make amazing things happen. Take a look around, and if you
        think we’d be a good match, give us a shout! Offices in
        Greenville, South Carolina and Atlanta, Georgia.
      </p>

      <div className="easyboyweb-footer-socials">
        {footerSocials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="easyboyweb-footer-social"
            aria-label={social.name}
          >
            <Image
              src={social.icon}
              alt=""
              width={16}
              height={16}
            />
          </a>
        ))}
      </div>

      <div className="easyboyweb-footer-divider" />

      <div className="easyboyweb-footer-bottom font-inter">
        <p>
          © Copyright Easyboyweb 2026. All Rights Reserved.
        </p>

        <div className="easyboyweb-footer-links">
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link href="/sitemap">
            Sitemap
          </Link>
        </div>
      </div>
    </div>
  </div>

  <Image
    src="/imgs/footerlogo.svg"
    alt=""
    width={1810}
    height={327}
    className="easyboyweb-footer-watermark"
    aria-hidden="true"
  />
</footer>


    </main>
  )
}

export default Landing_page