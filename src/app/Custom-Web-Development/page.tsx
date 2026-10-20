import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import grwo1 from "../../../public/imgs/grow-dev1.svg";
import grwo2 from "../../../public/imgs/grow-dev2.svg";
import grwo3 from "../../../public/imgs/grow-dev3.svg";
import weFocusimg from "../../../public/imgs/we-focus-img1.png";
import Link from "next/link";
import Image from "next/image";
import FeatureIcon from "@/src/components/ui/FeatureIcon";
import Testimonials from "@/src/components/sections/Testimonials";
import Faq from "@/src/components/sections/Faq";
import EasyBoyWebPro from "@/src/components/sections/EasyBoyWebPro";
import Platforms from "@/src/components/sections/platforms"
import WebsiteCRM from "@/src/components/sections/WebsiteCRM";
import Process from "@/src/components/sections/Process";
import OurWork from "@/src/components/sections/OurWork";
import styles from "./web-development.module.css";


const seoCards = [
    {
        title: "Peace of Mind Cloud Hosting",
        para: "Stop stressing over website hosting and maintenance. Our fast, reliable servers backed by 24/7 technical support, security, and automated backups keep your site running smoothly around the clock.",
        icon: grwo1,
    },
    {
        title: "Responsive WordPress Web Design",
        para: "Every website we custom develop is fully responsive, guaranteed a seamless and user-friendly experience across all devices, including phones, tablets, laptops, and desktop computers.",
        icon: grwo2,
    },
    {
        title: "E-Commerce Solutions",
        para: "Let’s start selling! From Shopify to or Custom Web App, we choose the right e-commerce solutions to fit your needs. Apple Pay, Paypal Merchant Gateways",
        icon: grwo3,
    },
];

const shorttext = [
    {
        title: "Save Time & Money",
        icon: "savings",
    },
    {
        title: "Server Installation",
        icon: "server",
    },
    {
        title: "Fast Loading",
        icon: "speed",
    },
    {
        title: "Mobile Ready",
        icon: "mobile",
    },
    {
        title: "Security Optimization",
        icon: "shield",
    },
    {
        title: "Premium Support",
        icon: "support",
    },
    {
        title: "Google Friendly SEO",
        icon: "search",
    },
    {
        title: "Browser/Device Compatible",
        icon: "devices",
    },
    {
        title: "Integrations & Automations",
        icon: "automation",
    },
] as const;

export default function CustomSoftwareDevelopment() {
    return (
        <main className="custom-web-development-page">
            <Header />
            <section className="custom-development-banner cust-web-deveplop" data-site-banner>
                <div className="container">
                    <div className="banner-content flex flex-col items-center justify-center text-center">
                        <h1 className="font-aloevera">
                            Custom Web<br /> Development
                        </h1>
                        <p className={`font-inter ${styles.heroFeatures}`}>
                            <span><FeatureIcon name="speed" />Fast Loading</span>
                            <span><FeatureIcon name="mobile" />Mobile Ready</span>
                            <span><FeatureIcon name="search" />Search Engine Friendly</span>
                        </p>
                        <Link
                            href="/contact"
                            className="banner-btn"
                        >
                            let’s talk
                        </Link>
                    </div>
                </div>
            </section>
            <section className="custom-development-sec-section">
                <div className="container">
                    <div className="seo-top-txt flex items-center justify-center pb-14">
                        <h2 className="font-aloevera">
                            Web Solutions to Grow Your Business
                        </h2>
                    </div>

                    <div className="flex items-center justify-between">
                        {seoCards.map((item) => (
                            <div
                                className="seo-box cust-develop flex flex-col items-start gap-6"
                                key={item.title}
                            >
                                <div className="seo-icon">
                                    <Image
                                        src={item.icon}
                                        alt={`${item.title} icon`}
                                    />
                                </div>

                                <h3 className="font-inter">
                                    {item.title}
                                </h3>

                                <p className="font-inter">
                                    {item.para}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <WebsiteCRM />

            <section className="clients-serve-section">
                <div className="container">
                    <h2 className="clients-serve-heading we-work-set font-aloevera">
                        We work with all major platforms and integrations.
                    </h2>
                </div>
            </section>

            <Platforms />
            <section className="we-focus-sections">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="w-1/2 ">
                            <Image
                                src={weFocusimg}
                                alt="We Focus Image"
                            />
                        </div>
                        <div className="w-1/2 we-focus-main-txt">
                            <h2 className="font-aloevera pb-8">We focus on your digital footprint so you can focus on your business</h2>
                            <p className="font-inter">Keeping your website fresh and up-to-date can be time-consuming, yet it’s crucial for making a strong first impression on potential clients.</p>
                            <p className="font-inter">Our Website Management Services for WordPress are here to help you, offering comprehensive maintenance, security, support, and updates at a competitive rate. Don’t let a neglected website open doors to security threats, technical issues, or downtime.</p>
                            <p className="font-inter">Let us take care of it, so you can focus on what you do best.</p>
                            <Link
                                href="/contact"
                                className="banner-btn font-inter"
                            >
                                learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Process />
            <section className="seo-sixth-section">
                <div className="container">
                    <div className="seo-top-txt sixth-seo-txt custom-txt-develp flex flex-col text-center gap-5 items-center justify-center">
                        <h2 className="font-aloevera">
                            Custom Solutions to Fit Your Needs
                        </h2>
                        <p className="font-inter">WordPress is one of the most widely used content management systems (CMS), known for its speed, user-friendly interface, extensibility, and ease of management and updates. We provide tailored, secure and optimized WordPress development solutions. At Easyboyweb, we make having a WordPress website “easy.”</p>
                    </div>
                    <div className={`grid grid-cols-3 grid-rows-3 items-center justify-center gap-x-8 gap-y-4 pt-14 ${styles.solutionGrid}`}>
                        {shorttext.map((item) => (
                            <div className={`seo-short-txt-box ${styles.solutionCard}`} key={item.title}>
                                <FeatureIcon name={item.icon} />
                                <h3 className="font-inter">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <OurWork
                showTabs={false}
                showDescription={false}
                showButton={false}
                showControls
                title="Our Recent Work"
            />
            <Faq />
            <Testimonials />
            <EasyBoyWebPro />
            <Footer />
        </main>
    );
}
