import LogoStrip from "./LogoStrip";

const platforms = [
  { src: "/imgs/platform3.svg", name: "Shopify" },
  { src: "/imgs/platform5.svg", name: "Google Analytics" },
  { src: "/imgs/platform-nextjs.svg", name: "Next.js" },
  { src: "/imgs/platform7.svg", name: "WooCommerce" },
  { src: "/imgs/platform4.svg", name: "Mailchimp" },
  { src: "/imgs/platform-digitalocean.svg", name: "DigitalOcean" },
  { src: "/imgs/platform2.svg", name: "WordPress" },
];

export default function Platforms() {
  return (
    <LogoStrip
      logos={platforms}
      label="Platforms and integrations"
      className="platforms-section"
    />
  );
}
