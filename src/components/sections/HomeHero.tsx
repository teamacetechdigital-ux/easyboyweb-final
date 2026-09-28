"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = true;
    const syncPlayback = () => {
      if (paused || preference.matches || !inView || document.hidden) video.pause();
      else void video.play().catch(() => { /* Keep the static composition if autoplay is unavailable. */ });
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(section);
    preference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    syncPlayback();
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [paused]);

  return (
    <section className="banner studio-hero" ref={sectionRef} aria-labelledby="hero-heading">
      <video ref={videoRef} className="banner-video" src="/imgs/banner-video.mp4" muted loop playsInline preload="metadata" aria-hidden="true" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      <div className="banner-overlay" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="banner-content">
          <div className="hero-eyebrow"><span /> Strategy. Design. Development.</div>
          <h1 id="hero-heading" className="font-aloevera">
            <span className="hero-line"><span className="hero-word">Built to</span></span>
            <span className="hero-line"><span className="hero-word hero-word-accent">stand out.</span></span>
          </h1>
          <p className="hero-description">Custom websites, mobile apps &amp; software that turn your next big idea into your unfair advantage.</p>
          <div className="hero-actions">
            <a href="tel:+18008070319" className="banner-btn hero-primary" data-magnetic>Let’s talk <span aria-hidden="true">↗</span></a>
            <a href="#selected-work" className="hero-secondary">Explore our work <span aria-hidden="true">↘</span></a>
          </div>
          <div className="hero-proof"><span className="hero-proof-mark" aria-hidden="true">✳</span><p>Big thinking. Personal attention.<br /><span>Greenville, SC &amp; Atlanta, GA</span></p></div>
        </div>
        <Link href="/Work" className="hero-showcase" aria-label="Explore our website and mobile design projects">
          <div className="hero-orbit" aria-hidden="true"><span /></div>
          <div className="hero-project-stack">
            <div className="hero-project hero-project-back">
              <div className="hero-browser-bar"><i /><i /><i /><span>Thoughtfully designed.</span></div>
              <div className="hero-project-image"><Image src="/imgs/screen (4).svg" alt="" fill sizes="(max-width: 760px) 60vw, 340px" /></div>
            </div>
            <div className="hero-project hero-project-front">
              <div className="hero-browser-bar"><i /><i /><i /><span>Beautifully built.</span><b>↗</b></div>
              <div className="hero-project-image"><Image src="/imgs/screen (2).svg" alt="Website design from the Easyboyweb portfolio" fill sizes="(max-width: 760px) 65vw, 390px" preload /></div>
            </div>
            <div className="hero-project hero-project-mobile"><Image src="/imgs/mobile_screen.svg" alt="" fill sizes="(max-width: 760px) 100px, 140px" /></div>
            <div className="hero-project-tag"><span aria-hidden="true">✳</span> Made to make<br />an impression.</div>
          </div>
          <div className="hero-showcase-caption"><span>Ideas into impact</span><span>View selected work ↗</span></div>
        </Link>
      </div>
      <div className="container hero-bottom">
        <a href="#expertise" className="hero-scroll"><span className="hero-scroll-line" aria-hidden="true" /> Scroll to discover</a>
        <span className="hero-bottom-note">Your ambition. Our craft.</span>
        <button type="button" className="hero-video-toggle" onClick={() => setPaused(!paused)} aria-label={isPlaying ? "Pause background video" : "Play background video"} aria-pressed={paused}><span aria-hidden="true">{isPlaying ? "Ⅱ" : "▷"}</span> Background video</button>
      </div>
    </section>
  );
}
