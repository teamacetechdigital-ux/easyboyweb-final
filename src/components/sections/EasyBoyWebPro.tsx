"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function EasyBoyWebPro() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="easyboy-pro-section">
      <div className="container">
        <div className="easyboy-pro-card">
          <div className="easyboy-pro-content">
            <h2 className="font-aloevera">
              Power Up With
              <br />
              EasyBoyWeb Pro
            </h2>

            <p className="font-inter">
              Everything you need to build, scale, and succeed
              online. Optimized performance with premium features
              at your fingertips. Discover the Pro difference.
            </p>

            <Link
              href="/easyboyweb-pro"
              className="easyboy-pro-button font-inter"
            >
              Learn More EasyBoyWeb Pro
            </Link>
          </div>

          <div className="easyboy-pro-video">
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              aria-label="EasyBoyWeb Pro introduction video"
            >
              <source
                src="/imgs/BoyWeb_Pro.mp4"
                type="video/mp4"
              />

              Your browser does not support HTML video.
            </video>

            {!isPlaying && (
              <button
                type="button"
                className="easyboy-video-play-button"
                onClick={toggleVideo}
                aria-label="Play EasyBoyWeb Pro video"
              >
                <span aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div className="easyboy-pro-cta">
          <h2 className="font-aloevera">
            Ready to Build Something
            <br />
            Amazing?
          </h2>

          <p className="font-inter">
            Let’s turn your idea into a powerful digital product.
          </p>

          <div className="easyboy-pro-actions">
            <Link
              href="/contact"
              className="easyboy-quote-button font-inter"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/contact"
              className="easyboy-call-button font-inter"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}