import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import custom1 from "../../../public/imgs/custom1.svg";
import custom2 from "../../../public/imgs/custom2.svg";
import custom3 from "../../../public/imgs/custom3.svg";
import custom4 from "../../../public/imgs/custom4.svg";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/src/components/sections/Testimonials";
import Faq from "@/src/components/sections/Faq";
import EasyBoyWebPro from "@/src/components/sections/EasyBoyWebPro";
import CreativeWork from "@/src/components/sections/CreativeWork";
import Partners from "@/src/components/sections/partners"
import WebsiteCRM from "@/src/components/sections/WebsiteCRM";
import Technologies from "@/src/components/sections/Technologies";
import HowWeWork from "@/src/components/sections/HowWeWork";


const seoCards = [
  {
    title: "UI/UX Design",
    para: "We use latest technology and solutions that will make your software responsive, visually engaging, and easy to use.",
    icon: custom1,
  },
  {
    title: "Front-End Development",
    para: "We’re well-versed in modern JS frameworks, responsive layouts, scalable CSS, and universal application development.",
    icon: custom2,
  },
  {
    title: "Back-End Development",
    para: "We’re highly experienced in SOLID full-stack development, RESTFul API, scalable architecture, and third-party integrations.",
    icon: custom3,
  },
  {
    title: "AI Development",
    para: "Custom AI solutions designed to automate processes, improve efficiency, and accelerate business growth.",
    icon: custom4,
  },
];

export default function CustomSoftwareDevelopment() {
  return (
    <main className="custom-software-page custom-software-development-page">
      <Header />
      <section className="custom-development-banner custom-software-hero">
        <div className="container">
          <div className="banner-content flex flex-col items-center justify-center text-center">
            <h1 className="font-aloevera">
              Custom Software Development
            </h1>
            <p className="font-inter">
              Full-service web application development, including front-end development, back-end development, and UI/UX services.
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
      <section className="custom-development-sec-section custom-software-services">
        <div className="container">

          <div className="custom-software-grid">
            {seoCards.map((item) => (
              <div
                className="seo-box custom-software-card"
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

      <CreativeWork />
      <WebsiteCRM />

      <section className="clients-serve-section">
        <div className="container">
          <h2 className="clients-serve-heading font-aloevera">
            Clients We Serve
          </h2>
        </div>
      </section>

      <Partners/>
  <HowWeWork />
     <section className="clients-serve-section">
  <div className="container">
    <h2 className="clients-serve-heading font-aloevera">
      Technologies We Use
    </h2>
  </div>
</section>

    

      <Technologies/>
      <Testimonials/>
      <Faq />
      <EasyBoyWebPro />
      <Footer />
    </main>
  );
}
