"use client";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import Testimonials from "@/src/components/sections/Testimonials";
import EasyBoyWebPro from "@/src/components/sections/EasyBoyWebPro"
import Faq from "@/src/components/sections/Faq"
import MobileScreen from "@/src/components/sections/MobileScreen"
import Image from "next/image";
import FeatureIcon from "@/src/components/ui/FeatureIcon";
import Link from "next/link";
import backendIcon from "../../../public/imgs/backend_ips_icon.svg";
import iosAndroidIcon from "../../../public/imgs/ios&and_icon.svg";
import uiuxIcon from "../../../public/imgs/uiuxproto_icon.svg";
import appIcon1 from "../../../public/imgs/app_icon1.svg";
import appIcon2 from "../../../public/imgs/app_icon2.svg";
import appIcon3 from "../../../public/imgs/app_icon3.svg";
import appIcon4 from "../../../public/imgs/app_icon4.svg";
import appIcon5 from "../../../public/imgs/app_icon5.svg";
import appIcon6 from "../../../public/imgs/app_icon6.svg";


const whyEasyboywebItems = [
  {
    icon: appIcon1,
    title: "Custom-Built Solutions",
    description:
      "No cookie-cutter websites. Every solution is built around your business and goals.",
  },
  {
    icon: appIcon2,
    title: "Growth Focused",
    description:
      "We create websites designed to attract visitors, capture leads, and support conversions.",
  },
  {
    icon: appIcon3,
    title: "Full-Service Expertise",
    description:
      "From branding and UX to websites, software, mobile apps, SEO, and automation.",
  },
  {
    icon: appIcon4,
    title: "Reliable Support",
    description:
      "We stay involved beyond launch with hosting, maintenance, management, and ongoing support.",
  },
  {
    icon: appIcon5,
    title: "Clear Communication",
    description:
      "A collaborative process with transparent communication from concept through launch.",
  },
  {
    icon: appIcon6,
    title: "100% Ownership",
    description:
      "Your digital assets remain yours, giving you greater control and peace of mind.",
  },
];


const businessGrowthServices = [
  { title: "Backend Development", icon: "code" },
  { title: "Cloud Hosting", icon: "cloud" },
  { title: "In App Payments", icon: "payments" },
  { title: "Admin Panel", icon: "dashboard" },
  { title: "AI & Chatbot Integration", icon: "message" },
  { title: "Premium Support", icon: "support" },
  { title: "AppStore Submission", icon: "upload" },
  { title: "Payment Integration", icon: "payments" },
  { title: "Maintenance Services", icon: "settings" },
  { title: "Push Notifications", icon: "bell" },
  { title: "GPS & Maps Integration", icon: "location" },
  { title: "Custom Features & Integrations", icon: "automation" },
] as const;


const appWorkSteps = [
  {
    number: 1,
    title: "Analysis",
    icon: "/imgs/appwork_icon1.svg",
  },
  {
    number: 2,
    title: "Estimation",
    icon: "/imgs/appwork_icon2.svg",
  },
  {
    number: 3,
    title: "Design",
    icon: "/imgs/appwork_icon3.svg",
  },
  {
    number: 4,
    title: "Development",
    icon: "/imgs/appwork_icon4.svg",
  },
  {
    number: 5,
    title: "Testing",
    icon: "/imgs/appwork_icon5.svg",
  },
  {
    number: 6,
    title: "Publishing",
    icon: "/imgs/appwork_icon6.svg",
  },
  {
    number: 7,
    title: "Support",
    icon: "/imgs/appwork_icon7.svg",
  },
];




function Custom_Mobile_app() {

  return (
    <main className="mobile-apps-page">
      <Header />

      <section className="custom-mobileapp-banner">
        <div className="container">
          <div className="mobileapp-banner-content">
            <h1 className="font-aloevera">
              Custom Mobile Apps
            </h1>

            <p className="font-inter">
              Get two apps with native performance in a shorter time
            </p>

            <Link
              href="/contact"
              className="mobileapp-banner-btn font-inter"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="mobileapp-services">
            <div className="mobileapp-service">
              <div className="mobileapp-icon">
                <Image
                  src={uiuxIcon}
                  alt="UX and UI Prototyping"
                  width={88}
                  height={82}
                />
              </div>

              <h3 className="font-inter">
                UX &amp; UI Prototyping
              </h3>
            </div>

            <div className="mobileapp-service">
              <div className="mobileapp-icon">
                <Image
                  src={iosAndroidIcon}
                  alt="iOS and Android"
                  width={88}
                  height={82}
                />
              </div>

              <h3 className="font-inter">
                iOS &amp; Android
              </h3>
            </div>

            <div className="mobileapp-service">
              <div className="mobileapp-icon">
                <Image
                  src={backendIcon}
                  alt="Backend API Development"
                  width={88}
                  height={82}
                />
              </div>

              <h3 className="font-inter">
                <span>Backend API Development</span>
                <span>AI Integration, Web 3</span>
              </h3>
            </div>
          </div>
        </div>
      </section>


      <section className="why-easyboyweb-section">
        <div className="container">
          <div className="why-easyboyweb-heading">
            <span className="font-aloevera">
              Why easyboyweb?
            </span>

            <h2 className="font-aloevera">
              Built Different.
              <br />
              Built for Growth.
            </h2>

            <p className="font-inter">
              We combine strategy, design, development, and technology to create
              digital solutions that help businesses attract, convert, and retain
              more customers.
            </p>
          </div>

          <div className="why-easyboyweb-grid">
            {whyEasyboywebItems.map((item) => (
              <div className="why-easyboyweb-card" key={item.title}>
                <div className="why-easyboyweb-icon">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={123}
                    height={81}
                  />
                </div>

                <h3 className="font-aloevera">
                  {item.title}
                </h3>

                <p className="font-inter">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileScreen />


      <section className="business-growth-section">
        <div className="container">
          <div className="business-growth-content">
            <h2 className="business-growth-heading font-aloevera">
              Boost Your Business &amp;
              <br />
              Grow Your Audience
            </h2>

            <p className="business-growth-description font-inter">
              We understand that each project is unique, so flexibility is a
              must for our team.
            </p>

            <div className="business-growth-grid">
              {businessGrowthServices.map((service) => (
                <div
                  className="business-growth-card font-inter"
                  key={service.title}
                >
                  <FeatureIcon name={service.icon} />
                  <span>{service.title}</span>
                </div>
              ))}
            </div>

            {/* <div className="business-growth-icon">
              <Image
                src="/imgs/gcp_policy-analyzer.svg"
                alt="Policy analyzer"
                width={48}
                height={48}
              />
            </div> */}
          </div>
        </div>
      </section>



      <section className="app-work-section">
        <div className="container">
          <h2 className="app-work-heading font-aloevera">
            How We Work
          </h2>

          <div className="app-work-process">
            <div className="app-work-cards">
              {appWorkSteps.map((step) => (
                <div className="app-work-card" key={step.number}>
                  <span className="app-work-mobile-number font-inter">
                    {step.number}
                  </span>

                  <div className="app-work-icon-box">
                    <Image
                      src={step.icon}
                      alt={`${step.title} icon`}
                      width={62}
                      height={62}
                    />
                  </div>

                  <h3 className="font-aloevera">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="app-work-timeline">
              <svg
                className="app-work-wave"
                viewBox="0 0 1200 110"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="
              M 0 34
              C 70 34, 90 74, 200 74
              C 310 74, 330 34, 400 34
              C 470 34, 490 74, 600 74
              C 710 74, 730 34, 800 34
              C 870 34, 890 74, 1000 74
              C 1110 74, 1130 34, 1200 34
            "
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1"
                />
              </svg>

              <div className="app-work-numbers">
                {appWorkSteps.map((step) => (
                  <span
                    className="app-work-number font-inter"
                    key={step.number}
                  >
                    {step.number}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <Faq />

      <Testimonials />
      <EasyBoyWebPro />
      <Footer />




    </main>

  )
}

export default Custom_Mobile_app
