"use client";
import { useState } from "react";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/src/components/sections/Testimonials";
import Faq from "@/src/components/sections/Faq";
import EasyBoyWebPro from "@/src/components/sections/EasyBoyWebPro";
import Process from "@/src/components/sections/Process";
import digitalIcon1 from "../../../public/imgs/brand1.svg";
import digitalIcon2 from "../../../public/imgs/brand2.svg";
import digitalIcon3 from "../../../public/imgs/brand3.svg"

const workImages = [
    "/imgs/ourwork_1.svg",
    "/imgs/ourwork_2.svg",
    "/imgs/ourwork_3.svg",
    "/imgs/ourwork_4.svg",
    "/imgs/ourwork_5.svg",
    "/imgs/ourwork_6.svg",
    "/imgs/ourwork_7.svg",
    "/imgs/ourwork_8.svg",
];

const digitalBenefits = [
    {
        title: "Fast Turnaround",
        para: "Get your designs delivered quickly without compromising on quality.",
        icon: digitalIcon1,
    },
    {
        title: "Vector Files Included",
        para: "Receive fully scalable source files for print, web, and future edits.",
        icon: digitalIcon2,
    },
    {
        title: "Unlimited Revisions",
        para: "We refine your design until it matches your vision perfectly.",
        icon: digitalIcon3,
    },
];



export default function CustomSoftwareDevelopment() {

    const [openLogoFaq, setOpenLogoFaq] = useState<number | null>(
  null
);

const toggleLogoFaq = (index: number) => {
  setOpenLogoFaq((current) =>
    current === index ? null : index
  );
};
    return (
       <main className="digital-marketing-page">
            <Header />
            <section className="custom-development-banner digital-banner">
                <div className="container">
                    <div className="banner-content resp-web-ban-cont flex flex-col items-center justify-center text-center">
                        <h1 className="font-aloevera">
                            Digital Branding
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
            <section className="digital-sec-section">
                <div className="container">
                    <div className="seo-top-txt digital-sec-txt flex flex-col text-center gap-4 items-center justify-center pb-14">
                        <h2 className="font-aloevera">
                            Elevate your brand with us!
                        </h2>
                    </div>

                    <div className="digital-benefits-grid">
                        {digitalBenefits.map((item) => (
                            <article className="digital-benefit-card" key={item.title}>
                                <Image src={item.icon} alt={`${item.title} icon`} />
                                <h3 className="font-inter">{item.title}</h3>
                                <p className="font-inter">{item.para}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

<Process />

            <section className="our-work-section">
                <div className="container">
                    <h2 className="our-work-heading font-aloevera">
                        Our Work
                    </h2>

                    <div className="our-work-grid">
                        {workImages.map((image, index) => (
                            <div className="our-work-card" key={image}>
                                <Image
                                    src={image}
                                    alt={`Our work project ${index + 1}`}
                                    width={345}
                                    height={184}
                                />
                            </div>
                        ))}
                    </div>

                    <a href="/work" className="our-work-button font-inter">
                        Learn More
                    </a>
                </div>
            </section>


<Faq/>
            
            <Testimonials />
            
            <EasyBoyWebPro />
            <Footer />
        </main>
    );
}
