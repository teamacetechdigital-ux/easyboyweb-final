"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../../../public/imgs/logo.svg";
import phone from "../../../public/imgs/phone.svg";
import mail from "../../../public/imgs/mail.svg";
import arrow from "../../../public/imgs/arrow.svg";
import Image from "next/image";

const services = [
  { label: "UX & Custom Software", href: "/UX-&-Custom-Software" },
  { label: "AI Development", href: "/Ai-Development" },
  { label: "Mobile Apps", href: "/Mobile-Apps" },
  { label: "Custom Web Development", href: "/Custom-Web-Development" },
  { label: "Hosting & Maintenance", href: "/Hosting-&-Maintenance" },
  { label: "Digital Strategy & SEO", href: "/Digital-Strategy-&-SEO" },
  { label: "Digital Branding", href: "/Digital-Branding" },
];

type HeaderVariant = "default" | "blogDetail";

interface HeaderProps {
  variant?: HeaderVariant;
  className?: string;
}

export default function Header({ variant = "default", className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isBlogDetail = variant === "blogDetail";

  return (
    <header className={`site-header${isBlogDetail ? " header--blog-detail" : ""} ${className}`.trim()}>
      <div className="container site-header-container">
        <div className="site-header-bar">
          <div className="logo-col">
            <Link href="/" onClick={closeMenu}>
              <Image src={Logo} alt="Easyboyweb home" priority />
            </Link>
          </div>

          <nav className={`site-nav ${isMenuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <Link className="font-inter" href="/Landing-Page" onClick={closeMenu}>
              easyboyweb Pro
            </Link>
            <div className="services-menu">
              <button
                className="services-trigger font-inter"
                type="button"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                What We Do
                <Image src={arrow} alt="" aria-hidden="true" />
              </button>
              <div className="services-dropdown">
                {services.map((service) => (
                  <Link key={service.href} href={service.href} onClick={closeMenu}>
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link className="font-inter" href="/Work" onClick={closeMenu}>
              Work
            </Link>
            <Link className="font-inter" href="/blog" onClick={closeMenu}>
              Blog
            </Link>
            <div className="mobile-contact-links">
              <Link href="tel:+1 800-807-0319">Call Us</Link>
              <Link href="/contact">Email Us</Link>
            </div>
          </nav>

          <div className="icn-col">
            <Link href="tel:+1 800-807-0319" aria-label="Call us">
              <Image src={phone} alt="" aria-hidden="true" />
            </Link>
            <Link href="/contact" aria-label="Email us">
              <Image src={mail} alt="" aria-hidden="true" />
            </Link>
          </div>

          <button
            className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

