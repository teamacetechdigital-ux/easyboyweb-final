import Image from "next/image";
import Link from "next/link";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import webIcon from "../../../public/imgs/skill1.svg";
import mobileIcon from "../../../public/imgs/skill2.svg";
import softwareIcon from "../../../public/imgs/custom1.svg";
import aiIcon from "../../../public/imgs/ai_icon1.svg";
import brandingIcon from "../../../public/imgs/skill4.svg";
import seoIcon from "../../../public/imgs/skill5.svg";
import hostingIcon from "../../../public/imgs/main1.svg";
import styles from "./services.module.css";

const services = [
  {
    title: "Custom Web Development",
    description: "Websites designed around your business, built to look great, load quickly, and turn visitors into customers.",
    href: "/Custom-Web-Development",
    icon: webIcon,
  },
  {
    title: "Mobile Apps",
    description: "Thoughtful iOS and Android experiences that bring your ideas to life and keep your customers connected.",
    href: "/Mobile-Apps",
    icon: mobileIcon,
  },
  {
    title: "UX & Custom Software",
    description: "Intuitive interfaces and custom applications that solve real problems and support the way your business works.",
    href: "/UX-&-Custom-Software",
    icon: softwareIcon,
  },
  {
    title: "AI Development",
    description: "Practical AI tools, intelligent assistants, and automations that help your team work smarter and serve customers better.",
    href: "/Ai-Development",
    icon: aiIcon,
  },
  {
    title: "Digital Branding",
    description: "A clear, memorable identity and consistent creative that make your business recognizable wherever people find you.",
    href: "/Digital-Branding",
    icon: brandingIcon,
  },
  {
    title: "Digital Strategy & SEO",
    description: "Search strategy, content, and optimization that connect your business with the people looking for what you offer.",
    href: "/Digital-Strategy-&-SEO",
    icon: seoIcon,
  },
  {
    title: "Hosting & Maintenance",
    description: "Reliable hosting, security, updates, and ongoing support to keep your website performing long after launch.",
    href: "/Hosting-&-Maintenance",
    icon: hostingIcon,
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>What we do</p>
          <h1>One team.<br />From idea to <span>launch.</span></h1>
          <div className={styles.heroBottom}>
            <p>Design, development, and ongoing support for your next big move. Explore the ways we help businesses build, launch, and grow online.</p>
            <Link href="/Work" className={styles.button}>
              Explore our work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-heading">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Built around your business</p>
            <h2 id="services-heading">The right expertise.<br />Every step of the way.</h2>
          </div>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <Link key={service.href} href={service.href} className={styles.card}>
                <div className={styles.cardTop}>
                  <Image src={service.icon} alt="" width={48} height={48} />
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className={styles.cardLink}>Explore service <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
            <div className={styles.startCard}>
              <p className={styles.eyebrow}>Let’s build something great</p>
              <h3>Have an idea?<br />Let’s talk it through.</h3>
              <p>Tell us where you want to go. We’ll help you figure out the next step.</p>
              <a href="tel:+18008070319" className={styles.button}>
                Call our team <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
