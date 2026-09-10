import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

import whoweare1 from "../../../public/imgs/seo-box1.svg";
import whoweare2 from "../../../public/imgs/seo-box2.svg";
import whoweare3 from "../../../public/imgs/seo-box3.svg";
import whoweare4 from "../../../public/imgs/seo-box4.svg";
import whoweare5 from "../../../public/imgs/seo-box5.svg";

import opt1 from "../../../public/imgs/opt1.svg";
import opt2 from "../../../public/imgs/opt2.svg";
import opt3 from "../../../public/imgs/opt3.svg";
import opt4 from "../../../public/imgs/opt4.svg";

import seoimg1 from "../../../public/imgs/seo-img1.png";
import seoimg2 from "../../../public/imgs/seo-img2.png";
import seoimg3 from "../../../public/imgs/seo-img3.png";

import seoprocess1 from "../../../public/imgs/seo-process1.svg";
import seoprocess2 from "../../../public/imgs/seo-process2.svg";
import seoprocess3 from "../../../public/imgs/seo-process3.svg";
import seoprocess4 from "../../../public/imgs/seo-process4.svg";
import arrowIcon from "../../../public/imgs/arrow_icon.svg";
import { Fragment } from "react/jsx-runtime";
import Faq from "@/src/components/sections/Faq";
import SeoAuditForm from "@/src/components/sections/SeoAuditForm";
import EasyBoyWebPro from "@/src/components/sections/EasyBoyWebPro";
import Testimonials from "@/src/components/sections/Testimonials";


const identityCards = [
    {
        title: "local seo",
        icon: whoweare1,
    },
    {
        title: "Paid Ads",
        icon: whoweare2,
    },
    {
        title: "link building",
        icon: whoweare3,
    },
    {
        title: "On-Page Optimization",
        icon: whoweare4,
    },
    {
        title: "AI Search Optimization",
        icon: whoweare5,
    },
];


const seoCards = [
    {
        title: "Weekly Content",
        para: "Engaging SEO optimized content, 100% written by humans, No AI.",
        icon: opt1,
    },
    {
        title: "Optimization",
        para: "Fully managed optimization, top to bottom. No keyword saturation or spammy techniques.",
        icon: opt2,
    },
    {
        title: "Backlinks",
        para: "Genuine backlinks via link placements in active content. No spam.",
        icon: opt3,
    },
    {
        title: "Monthly Reporting",
        para: "Monthly reporting to show you how we are doing!",
        icon: opt4,
    },
];


const seoAeoCards = [
    {
        title: "SEO",
        para: "Search Engine Optimization",
        para1:
            "Optimize your website to rank on search engine results pages (SERPs). Focus on keywords, content, backlinks, and technical SEO to drive organic traffic.",
        icon: seoimg1,
    },
    {
        title: "AEO",
        para: "Answer Engine Optimization",
        para1:
            "Structure content to answer specific questions. Optimize for featured snippets, FAQ pages, and 'People Also Ask' boxes. Be the answer engines deliver.",
        icon: seoimg2,
    },
    {
        title: "GEO",
        para: "Generative Engine Optimization",
        para1:
            "Get your brand mentioned where AI learns. Optimize for AI summaries, citations, and conversational results across generative engines and platforms.",
        icon: seoimg3,
    },
];

const shorttext = [
    {
        title: "High-Quality Backlinks",
    },
    {
        title: "Schema Markup",
    },
    {
        title: "Rank 25-100+ Keywords",
    },
    {
        title: "Local SEO & Citations",
    },
    {
        title: "Google Search Console",
    },
    {
        title: "Video Reports",
    },
    {
        title: "SEO Site Audits",
    },
    {
        title: "Google Analytics",
    },
    {
        title: "Monthly Reporting",
    },
];

const helpSteps = [
    {
        id: "seo-help-step-onboarding",
        number: "1",
        title: "Onboarding",
        description: "Begin your complimentary trial now to dive into our SEO software, receive personalized keyword suggestions, access in-depth audits, and snag a custom article crafted by our content squad. We're eager to tailor our offerings to your preferences and hear your thoughts. Let's get this trial rolling!",
        icon: seoprocess1,
    },
    {
        id: "seo-help-step-scheduling",
        number: "2",
        title: "Scheduling",
        description: "We'll handle scheduling our weekly content, optimization, and outreach efforts. It's all taken care of by our team, but hey, feel free to collaborate with us or simply leave it in our capable hands.",
        icon: seoprocess2,
    },
    {
        id: "seo-help-step-deliverables-content",
        number: "3",
        title: "Deliverables",
        description: "Here's what you can expect from us: Each week, we'll publish fresh content on your site. By the end of the first month, your site will be fully optimized, and our outreach links will be live. It's a straightforward, recurring process that's easy to keep tabs on.",
        icon: seoprocess3,
    },
    {
        id: "seo-help-step-deliverables-reporting",
        number: "4",
        title: "Deliverables",
        description: "Let's chat about progress! At the close of each month, we'll touch base with a rundown of what we've accomplished and give you a heads-up on what's in store for the next steps.",
        icon: seoprocess4,
    },
];

export default function AboutPage() {
    return (
        <main className="seo-page">
            <Header />

            <section className="seo-banner">
                <div className="container">
                    <div className="banner-content flex flex-col items-center justify-center text-center">
                        <h1 className="font-aloevera">
                            SEO Made Easy & Automated
                        </h1>

                        <Link
                            href="/contact"
                            className="banner-btn seo-btn"
                        >
                            Get Your Free 7-Day Trial
                        </Link>
                    </div>
                </div>
            </section>


            <section className="sec-seo-section">
                <div className="container">
                    <div className="identity-cards seo-identity-grid">
                        {identityCards.map((item) => (
                            <article
                                className="identity-card"
                                key={item.title}
                            >
                                <div className="identity-icon">
                                    <Image
                                        src={item.icon}
                                        alt={`${item.title} icon`}
                                        width={83}
                                        height={86}
                                    />
                                </div>

                                <h3 className="font-inter">
                                    {item.title}
                                </h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            <section className="seo-third-section">
                <div className="container">

                    <div className="seo-top-txt flex items-center justify-center flex-col">
                        <h2 className="font-aloevera">
                            All Things SEO!
                        </h2>

                        <p className="font-inter">
                            From start to finish, it&apos;s a fully-managed hassle-free process!
                        </p>
                    </div>


                    <div className="seo-service-grid seo-feature-groups">
                        {seoCards.map((item) => (
                            <div
                                className="seo-box seo-feature-group flex flex-col items-start gap-6"
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


            <section className="seo-fourth-section">
                <div className="container">

                    <div className="seo-top-txt flex items-center justify-center flex-col">
                        <h2 className="font-aloevera">
                            SEO vs AEO vs GEO
                        </h2>

                        <p className="font-inter">
                            Three strategies. One goal: Be everywhere your audience searches.
                        </p>
                    </div>


                    <div className="seo-aeo-grid">

                        {seoAeoCards.map((item) => (
                            <div
                                className="seo-aeo-box seo-comparison-card text-center"
                                key={item.title}
                            >
                                <div className="seo-comparison-copy">
                                    <h3 className="font-aloevera">
                                        {item.title}
                                    </h3>

                                    <p className="font-inter pr-brdr">
                                        {item.para}
                                    </p>

                                    <p className="font-inter">
                                        {item.para1}
                                    </p>
                                </div>

                                <div className="seo-comparison-image">
                                    <Image
                                        src={item.icon}
                                        alt={`${item.title} icon`}
                                    />
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
            <section className="seo-fifth-section">
                <div className="container">
                    <div className="seo-growth-row">
                        <div className="growth-content seo-fifth-sect-txt w-1/2">
                            <h3 className="font-inter pb-3">
                                Transparent & Effective SEO
                            </h3>
                            <h2 className="font-aloevera pb-5">
                                INCREASE VISITS. INCREASE SALES.
                            </h2>

                            <ul className="seo-lst">
                                <li className="font-inter">Fresh Weekly Blog Content</li>
                                <li className="font-inter">Keyword Research</li>
                                <li className="font-inter">Monthly Reports</li>
                                <li className="font-inter">On Page Optimization</li>
                                <li className="font-inter">Quality Backlinks!</li>
                                <li className="font-inter">No Contract. No Commitment!</li>
                            </ul>

                            <Link href="/about" className="seo-aeo-btn banner-btn font-inter">
                                Free Site audit
                            </Link>
                        </div>

                        <div className="growth-video w-1/2">
                            <button
                                type="button"
                                className="growth-play-button"
                                aria-label="Play video"
                            >
                                <span />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo-sixth-section">
                <div className="container">
                    <div className="seo-top-txt sixth-seo-txt flex items-center justify-center">
                        <h2 className="font-aloevera">
                            We manage everything for you, top to bottom.
                        </h2>
                    </div>
                    <div className="seo-short-grid">
                        {shorttext.map((item) => (
                            <div className="seo-short-txt-box" key={item.title}>
                                <h3 className="font-inter">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="seo-seventh-section">
                <div className="container">
                    <h2 className="let-us-help-heading font-aloevera">
                        Let Us Help You
                    </h2>

                    <div className="help-process">
                        {helpSteps.map((step, index) => (
                            <Fragment key={step.id}>
                                <article className="help-step">
                                    <div className="help-step-visual">
                                        <div className="help-big-hexagon">
                                            <div className="help-big-hexagon-inner">
                                                <Image
                                                    src={step.icon}
                                                    alt={`${step.title} icon`}
                                                    width={72}
                                                    height={78}
                                                />
                                            </div>
                                        </div>

                                        <div className="help-number-hexagon">
                                            <div className="help-number-hexagon-inner">
                                                <span className="font-aloevera">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="font-aloevera">
                                        {step.title}
                                    </h3>

                                    <p className="font-inter">
                                        {step.description}
                                    </p>
                                </article>

                                {index < helpSteps.length - 1 && (
                                    <div
                                        className="help-arrow-connector"
                                        aria-hidden="true"
                                    >
                                        <div className="help-arrow-icon">
                                            <Image
                                                src={arrowIcon}
                                                alt=""
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>
            <Faq />
            <SeoAuditForm />
            <Testimonials />
            <EasyBoyWebPro />

            <Footer />
        </main>
    );
}