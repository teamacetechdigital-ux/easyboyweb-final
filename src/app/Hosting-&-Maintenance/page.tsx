"use client";
import { useState } from "react";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import weFocusimg from "../../../public/imgs/we-focus-img1.png";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/src/components/sections/Testimonials";
import Faq from "@/src/components/sections/Faq";
import EasyBoyWebPro from "@/src/components/sections/EasyBoyWebPro";
import WebsiteCRM from "@/src/components/sections/WebsiteCRM";
import maintenanceIcon1 from "../../../public/imgs/main1.svg";
import maintenanceIcon2 from "../../../public/imgs/main2.svg";
import maintenanceIcon3 from "../../../public/imgs/main3.svg";
import maintenanceIcon4 from "../../../public/imgs/main4.svg";
import maintenanceIcon5 from "../../../public/imgs/main5.svg";
import maintenanceIcon6 from "../../../public/imgs/main6.svg";
import innerImg from "../../../public/imgs/center-img.png";
import crmImg from "../../../public/imgs/sec-focus-crm-img.png";
import crmImg2 from "../../../public/imgs/crm2.png";


const maintenanceServices = [
    {
        title: "WordPress Maintenance",
        para: "WordPress maintenance services include updating plugins, themes, creating daily backups, optimizing SEO, enhancing performance, fixing bugs, and maintaining the seamless operation of your website.",
        icon: maintenanceIcon1,
    },
    {
        title: "Website Content Updates",
        para: "Are you too busy to maintain the content of your website? Is there any content you need to add, remove, or edit? Let us handle it for you!",
        icon: maintenanceIcon2,
    },
    {
        title: "Site Speed Improvements",
        para: "We enhance your website’s loading times by optimizing images, streamlining code, and using caching. This results in a faster site, leading to better user experience, improved SEO, and higher conversions.",
        icon: maintenanceIcon3,
    },
    {
        title: "Site Updates & Repairs",
        para: "Ensuring smooth website operation involves addressing issues and applying the latest features and security patches, which prevent downtime, enhance performance, and maintain security and reliability.",
        icon: maintenanceIcon4,
    },
    {
        title: "SEO Errors & Updates",
        para: "Identifying and fixing SEO errors is key to improving your website’s search engine visibility. Regular updates ensure your site stays optimized for the latest search algorithms, driving more organic traffic and improving rankings.",
        icon: maintenanceIcon5,
    },
    {
        title: "New Tools, APIs & Integrations",
        para: "Upgrading your website with new tools, APIs, and integrations enhances functionality, streamlines processes, and improves user experience while expanding your site’s capabilities.",
        icon: maintenanceIcon6,
    },
];

const leftCards = [
    {
        title: "Security",
        description:
            "Regular updates and security checks protect your site from vulnerabilities and potential threats.",
    },
    {
        title: "Performance",
        description:
            "Ongoing maintenance ensures your website runs smoothly, loads quickly, and provides a positive user experience.",
    },
    {
        title: "Content Updates",
        description:
            "Keeping your content fresh and relevant helps engage visitors and improve search engine rankings.",
    },
    {
        title: "Backup and Recovery",
        description:
            "Regular backups safeguard your data, enabling quick recovery in cases of data loss or system failures.",
    },
];

const rightCards = [
    {
        title: "Search Engine Optimization (SEO)",
        description:
            "Maintenance supports SEO efforts, helping your site rank higher in search engine results.",
    },
    {
        title: "Technology Updates",
        description:
            "Keeping up with the latest technologies ensures compatibility with new devices and browsers.",
    },
    {
        title: "Customer Trust",
        description:
            "A well-maintained website instills confidence in users, demonstrating your commitment to professionalism and reliability.",
    },
    {
        title: "Uptime and Reliability",
        description:
            "Regular maintenance minimizes downtime, ensuring your website is always available for your customers.",
    },
];

const hostingServices = [
    {
        title: "SSD Cloud Hosting",
        para: "Solid-state drives (SSDs) offer greater speed and reliability compared to traditional hard drives because they do not have any moving parts. With our SSD Cloud Hosting, your pages will load super fast and your customers will be very happy.",
        icon: maintenanceIcon1,
    },
    {
        title: "Built-in Advanced Caches",
        para: "Enjoy lightning-fast load times with built-in Memcached, Varnish, Nginx, Redis, and Object Cache Pro at no additional charge as part of our hosting package.",
        icon: maintenanceIcon2,
    },
    {
        title: "Free SSL Certificate",
        para: "If you host your website with EasyBoyWeb, an SSL certificate is included at no additional cost. Need help with a specialized SSL setup? Just let us know.",
        icon: maintenanceIcon3,
    },
    {
        title: "Daily Backups",
        para: "Regular backups are essential in website hosting to ensure data safety and quick recovery in case of any data loss or corruption.",
        icon: maintenanceIcon4,
    },
    {
        title: "FREE Advanced Firewall, Malware Defense & Protection",
        para: "A robust firewall, comprehensive security measures, and effective malware protection are crucial to safeguard your site against cyber threats.",
        icon: maintenanceIcon5,
    },
    {
        title: "Unlimited Visitors",
        para: "Welcome unlimited monthly visitors without the confines of capped plans. Our infrastructure is built to support your needs.",
        icon: maintenanceIcon6,
    },
];



export default function CustomSoftwareDevelopment() {

    const [openHostingFaq, setOpenHostingFaq] = useState<
        number | null
    >(null);

    const toggleHostingFaq = (index: number) => {
        setOpenHostingFaq((current) =>
            current === index ? null : index
        );
    };
    return (
        <main className="responsive-website-page">
            <Header />
            <section className="custom-development-banner resp-web-deveplop">
                <div className="container">
                    <div className="banner-content resp-web-ban-cont flex flex-col items-center justify-center text-center">
                        <h1 className="font-aloevera">
                            WordPress Website<br /> Hosting, Maintenance, Security,<br /> Updates & Support
                        </h1>
                        <Link
                            href="/contact"
                            className="banner-btn"
                        >
                            let’s talk
                        </Link>
                    </div>
                </div>
            </section>
            <section className="resp-development-sec-section">
                <div className="container">
                    <div className="seo-top-txt res-sec-sect-cont flex flex-col text-center gap-4 items-center justify-center pb-14">
                        <h2 className="font-aloevera">
                            Reliable Website Maintenance Services
                        </h2>
                        <p className="font-inter">Companies often ask about what “regular updates” mean when it comes to website maintenance. It’s a very important question, and the answer differs from one provider to another. Our maintenance program guarantees the security and timely updates of your website, providing valuable resources that benefit your business.</p>
                    </div>

                    <div className="maintenance-services-grid">
                        {maintenanceServices.map((item) => (
                            <article
                                className="maintenance-service-card flex flex-col items-start gap-4"
                                key={item.title}
                            >
                                <div className="maintenance-service-icon">
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
                            </article>
                        ))}
                    </div>

                </div>
            </section>
            <WebsiteCRM />

            <section className="top-notch-section">
                <div className="container">
                    <div className="seo-top-txt top-notch-txt-sect flex flex-col text-center gap-6 items-center justify-center pb-14">
                        <h2 className="font-aloevera">
                            Top-Notch Website Maintenance Solutions Provider
                        </h2>
                        <p className="font-inter">Our development team stays updated on the latest and greatest in web design and development tools. We specialize in a wide range of web technologies, helping businesses maintain secure, efficient, and flawless websites. Our maintenance packages are designed for websites across all sizes and sectors, providing the essential expertise and support every business needs. <br /><br /> A website maintenance plan is important for a number of reasons:</p>
                    </div>
                    {/* Main Content */}
                    <div className="mt-12 grid items-center gap-10 lg:grid-cols-[280px_minmax(420px,1fr)_280px] xl:grid-cols-[340px_minmax(420px,1fr)_340px]">
                        {/* Left Cards */}
                        <div className="flex flex-col gap-3">
                            {leftCards.map((card) => (
                                <div
                                    key={card.title}
                                    className="rounded-[5px] bg-[#2C3E50] px-5 py-5 text-white"
                                >
                                    <h3 className="mb-3 text-[20px] font-inter font-semibold leading-tight">
                                        {card.title}
                                    </h3>

                                    <p className="text-[16px] font-inter leading-[1.65] text-white/90">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Center Graphic */}
                        <div className="flex items-center justify-center">
                            <div className="maintenance-graphic-frame">
                                {/* Rotating Orbit Image */}
                                <div className="maintenance-graphic">
                                    <Image
                                        src={innerImg}
                                        alt="Website maintenance services"
                                        fill
                                        priority
                                        className="object-contain animate-maintenance-fade"
                                        sizes="(max-width: 1024px) 90vw, 540px"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Cards */}
                        <div className="flex flex-col gap-3">
                            {rightCards.map((card) => (
                                <div
                                    key={card.title}
                                    className="rounded-[5px] bg-[#2C3E50] px-5 py-5 text-white"
                                >
                                    <h3 className="mb-3 text-[20px] font-inter font-semibold leading-tight">
                                        {card.title}
                                    </h3>

                                    <p className="text-[16px] font-inter leading-[1.65] text-white/90">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link href="/contact" className="top-notch-cta font-inter">
                        get a free estimate
                    </Link>
                </div>
            </section>

            <section className="we-focus-sections">
                <div className="container">
                    <div className="flex items-start justify-between">
                        <div className="w-1/2 we-focus-main-txt">
                            <h2 className="font-aloevera pb-8">Website Maintenance Services to Boost Your Business:</h2>
                            <Image
                                src={crmImg}
                                alt="We Focus Image"
                            />
                        </div>
                        <div className="w-1/2 we-focus-main-txt">

                            <p className="font-inter">Our goal is to support the growth of your business and ensure your clients are happy. The cost of monthly website maintenance depends on the size and kind of your site. Contact us with your business needs for a personalized quote.</p>

                            <ul className="pt-5 font-inter">
                                <li>Regular updates for content, images, pages, links, news, blog, etc.</li>
                                <li>Site Security Updates (HTTPS, PCI Compliance)</li>
                                <li>Page Speed Optimization</li>
                                <li>SEO Audits (404s, website errors, etc.)</li>
                                <li>Website performance & functionality checkup</li>
                                <li>WordPress maintenance services</li>
                                <li>WordPress Plugin updates</li>
                                <li>Mobile usability check</li>
                                <li>Bug fixing & troubleshooting</li>
                                <li>Cross browser compatibility check</li>
                                <li>Website audit and broken link fixing</li>
                            </ul>
                            <Link
                                href="/contact"
                                className="banner-btn font-inter"
                            >
                                get a free estimate
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="we-focus-sections clr-bg-chng hosting-focus-section">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="w-1/2">
                            <Image
                                src={crmImg2}
                                alt="We Focus Image"
                            />
                        </div>
                        <div className="w-1/2 we-focus-main-txt txt-clr-two">
                            <h2 className="font-aloevera pb-8">Let us host your WordPress website!</h2>
                            <p className="font-inter">EasyBoyWeb offers affordable website hosting with premium features included, available to all our customers.<br /><br />
                                Reliable web hosting ensures your website is always accessible, loads quickly for a smooth user experience, and has robust security features like SSL certificates and frequent backups. Quick and efficient support is also important. We provide all of this and more.</p>
                        </div>
                    </div>

                    <div className="hosting-services-grid">
                        {hostingServices.map((item) => (
                            <article className="hosting-service-card" key={item.title}>
                                <Image src={item.icon} alt={`${item.title} icon`} />
                                <h3 className="font-inter">{item.title}</h3>
                                <p className="font-inter">{item.para}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Faq />            
            <Testimonials />
            <EasyBoyWebPro />
            <Footer />
        </main>
    );
}
