import Link from "next/link";
import Image from "next/image";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer"
import Partners from "../components/sections/partners";
import ServicesSlider from "../components/sections/ServicesSlider";
import skill1 from "../../public/imgs/skill1.svg";
import skill2 from "../../public/imgs/skill2.svg";
import skill3 from "../../public/imgs/skill3.svg";
import skill4 from "../../public/imgs/skill4.svg";
import skill5 from "../../public/imgs/skill5.svg";
import skill6 from "../../public/imgs/skill6.svg";
import WhoWeAre from "../components/sections/WhoWeAre";
import LetUsHelp from "../components/sections/LetUsHelp";
import OurWork from "../components/sections/OurWork";
import Testimonials from "../components/sections/Testimonials";
import EasyBoyWebPro from "../components/sections/EasyBoyWebPro"
import SkillTiltBox from "../components/sections/SkillTiltBox";




export default function HomePage() {
  return (
    <main className="home-page">
      <Header />
      <section className="banner">
        <video
          className="banner-video"
          src="/imgs/banner-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="banner-overlay" />

        <div className="banner-side-list" aria-label="Quick categories">
          <span className="font-inter">
            <Link href="/facebook">Facebook</Link>
          </span>
          <span className="font-inter">
            <Link href="/twitter">Twitter</Link>
          </span>
          <span className="font-inter">
            <Link href="/instagram">Instagram</Link>
          </span>
          <span className="font-inter">
            <Link href="/youtube">Youtube</Link>
          </span>
        </div>

        <div className="container">
          <div className="banner-content flex flex-col items-center justify-center text-center">
            <h1 className="font-aloevera">
              Custom Web, Mobile &{" "}
              <span className="clr-chng">Software Solutions</span> That Grow
              Your Business
            </h1>
            <p className="font-inter">
              A full-service web development agency in Greenville, SC & Atlanta,
              GA helping businesses design, build, and scale digital products
              that convert.
            </p>
            <Link href="/contact" className="banner-btn">
              Let’s Talk
            </Link>
          </div>
        </div>
      </section>

      <Partners />


      <section className="third-section">
        <div className="container">
          <div className="prnt-third-txt flex items-center justify-center flex-col gap-8">
            <h2 className="font-aloevera">
              Everything You Need to Build, Launch & Grow Online
            </h2>
            <p className="font-inter">
              From startups to enterprise brands, we deliver scalable digital
              solutions tailored to your business goals.
            </p>
          </div>
          <div className="prnt-thrd-box">
            <SkillTiltBox>
              <div className="skill-icon">
                <Image src={skill1} alt="Web Development" />
              </div>
              <h3 className="font-aloevera">
                Web Development
              </h3>
            </SkillTiltBox>
            <SkillTiltBox>
              <div className="skill-icon">
                <Image src={skill2} alt="Mobile App Development" />
              </div>
              <h3 className="font-aloevera">
                Mobile App Development
              </h3>
            </SkillTiltBox>
            <SkillTiltBox>
              <div className="skill-icon">
                <Image src={skill3} alt="Custom Software" />
              </div>
              <h3 className="font-aloevera">
                Custom Software
              </h3>
            </SkillTiltBox>
            <SkillTiltBox>
              <div className="skill-icon">
                <Image src={skill4} alt="Ecommerce Solutions" />
              </div>
              <h3 className="font-aloevera">
                Ecommerce Solutions
              </h3>
            </SkillTiltBox>
            <SkillTiltBox>
              <div className="skill-icon">
                <Image src={skill5} alt="SEO & Ads" />
              </div>
              <h3 className="font-aloevera">
                SEO & Ads
              </h3>
            </SkillTiltBox>
            <SkillTiltBox>
              <div className="skill-icon">
                <Image src={skill6} alt="Social Media Automation" />
              </div>
              <h3 className="font-aloevera">
                Social Media Automation
              </h3>
            </SkillTiltBox>
            <SkillTiltBox>
              <div className="skill-icon">
                <Image src={skill3} alt="CRM EasyBoyWeb Pro" />
              </div>
              <h3 className="font-aloevera">
                CRM (EasyBoyWeb Pro)
              </h3>
            </SkillTiltBox>
          </div>
        </div>
      </section>


      <section className="growth-section">
        <div className="container">
          <div className="flex items-center justify-center gap-16">
            <div className="growth-content w-1/2">
              <h2 className="font-aloevera">
                A Modern Web &amp; Mobile
                <br />
                <span className="clr-chng">Development Agency</span> Built
                <br />
                For Growth
              </h2>

              <p className="font-inter">
                At Easyboyweb, we combine strategy, design, and engineering to create
                powerful digital experiences. Whether you need a high-performing
                website, a custom CRM, or a scalable mobile app, our team delivers
                solutions that attract, convert, and retain customers.
                <br />
                We don’t just build—we partner with you to grow.
              </p>

              <Link href="/about" className="growth-button banner-btn font-inter">
                Learn More About Us
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

      <ServicesSlider />
      <LetUsHelp />
      <WhoWeAre />
      <OurWork />


      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-video">
            <button
              type="button"
              className="why-choose-play"
              aria-label="Play video"
            >
              <span aria-hidden="true" />
            </button>
          </div>

          <div className="why-choose-content">
            <h2 className="font-aloevera">
              Why Businesses Choose
              <br />
              Easyboyweb
            </h2>

            <p className="font-inter">
              Our website development and mobile solutions are tailor-made to
              captivate your audience while ensuring seamless management for you.
              From ideation to full-service design &amp; development, we’re all
              about crafting sites, web software and mobile apps that not only look
              amazing but also function flawlessly.
              <br />
              But here’s the kicker – we don’t stop there!
              <br />
              With our worry-free hosting and management services, you can breathe
              easy knowing your online assets are in good hands. And let’s talk
              about automated SEO and social media solutions – we’ve got the tools
              to skyrocket your visibility and engagement, leaving you free to
              focus on what really matters: your business.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
      <EasyBoyWebPro />

      <Footer />
    </main>
  );
}
