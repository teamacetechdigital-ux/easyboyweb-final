"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    $?: (selector: string) => {
      tilt: (options: { axis: "y" }) => void;
    };
  }
}

const partners = [
  "/imgs/partner1.svg",
  "/imgs/partner2.svg",
  "/imgs/partner3.svg",
  "/imgs/partner4.svg",
  "/imgs/partner5.png",
  "/imgs/partner6.png",
  "/imgs/partner7.png",
  "/imgs/partner8.png",
  "/imgs/partner1.svg",
  "/imgs/partner2.svg",
  "/imgs/partner3.svg",
  "/imgs/partner4.svg",
  "/imgs/partner5.png",
  "/imgs/partner6.png",
  "/imgs/partner7.png",
  "/imgs/partner8.png",
];

export default function Partners() {
  useEffect(() => {
    const jquery = window.$;

    if (jquery) {
      jquery(".js-tilt").tilt({ axis: "y" });
    }
  }, []);

  return (
    <section className="partners-section">
      <div className="partners-track" aria-label="Partner logos">
        {partners.map((partner, index) => (
          <div key={`${partner}-${index}`} className="partner-item js-tilt">
            <img src={partner} alt="Partner logo" className="partner-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}
