import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/imgs/logo.svg";
import tiktokIcon from "../../../public/imgs/tiktok_icon.svg";
import instagramIcon from "../../../public/imgs/instagram_icon.svg";
import twitterIcon from "../../../public/imgs/twitter_icon.svg";
import facebookIcon from "../../../public/imgs/facebook_icon.svg";
import youtubeIcon from "../../../public/imgs/youtube_icon.svg";
import emailSendIcon from "../../../public/imgs/emailSend_icon.svg";
import phoneIcon from "../../../public/imgs/phone.svg";
import footerLogo from "../../../public/imgs/footerlogo.svg";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Easyboyweb Pro", href: "/easyboyweb-pro" },
  { label: "What We Do", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  {
    label: "Web Development",
    href: "/services#web-development",
  },
  {
    label: "Mobile App Development",
    href: "/services#mobile-development",
  },
  {
    label: "Custom Software",
    href: "/services#custom-software",
  },
  {
    label: "Ecommerce Solution",
    href: "/services#ecommerce",
  },
  {
    label: "SEO & Ads",
    href: "/services#seo",
  },
  {
    label: "Social Media Automation",
    href: "/services#social-media",
  },
  {
    label: "CRM (EasyBoyWeb Pro)",
    href: "/easyboyweb-pro",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: facebookIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: youtubeIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: instagramIcon,
  },
  {
    label: "Twitter",
    href: "https://x.com",
    icon: twitterIcon,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: tiktokIcon,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-brand-logo">
              <Image
                src={logo}
                alt="Easyboyweb"
                width={250}
                height={45}
              />
            </Link>

            <p className="footer-brand-description font-inter">
              We’re a team of entrepreneurs, engineers, and
              designers who love solving tough problems. We believe
              everyone’s got a natural drive to create, and through
              real collaboration, we can make amazing things happen.
              Take a look around, and if you think we’d be a good
              match, give us a shout!
              <br />
              Offices in Greenville, South Carolina and Atlanta,
              Georgia.
            </p>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  key={social.label}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
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
          </div>

          <nav
            className="footer-links-column"
            aria-label="Quick links"
          >
            <h2 className="font-aloevera">Quick Links</h2>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="footer-links-column footer-services-column"
            aria-label="Services"
          >
            <h2 className="font-aloevera">Services</h2>

            <ul>
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="font-inter"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-newsletter">
            <h2 className="font-aloevera">
              Stay In The Loop
            </h2>

            <p className="footer-newsletter-description font-inter">
              Be the first to hear about our latest updates and
              exclusive offers. Subscribe to the{" "}
              <span className="clr-chng">Easyboyweb</span>{" "}
              newsletter.
            </p>

            <form className="footer-email-form">
              <input
                type="email"
                name="email"
                className="font-inter"
                placeholder="Email"
                aria-label="Email address"
                required
              />

              <button
                type="submit"
                aria-label="Subscribe to newsletter"
              >
                <Image
                  src={emailSendIcon}
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
            </form>

            <p className="footer-email-disclaimer font-inter">
              By providing your email, you agree to receive news,
              offers, and updates from Easyboyweb related to our
              services. You can unsubscribe at any time.
            </p>

            <a
              href="tel:+18008070319"
              className="footer-phone font-inter"
            >
              <Image
                src={phoneIcon}
                alt=""
                width={18}
                height={18}
              />

              <span>Phone: +1 800-807-0319</span>
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="font-inter">
            © Copyright Easyboyweb 2026. All Rights Reserved.
          </p>

          <div className="footer-legal-links font-inter">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>

      <div className="footer-large-logo" aria-hidden="true">
        <Image
          src={footerLogo}
          alt=""
          width={1810}
          height={327}
        />
      </div>
    </footer>
  );
}