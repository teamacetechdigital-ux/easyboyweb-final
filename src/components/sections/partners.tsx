import LogoStrip from "./LogoStrip";

const partners = [
  { src: "/imgs/partner1.svg", name: "Dell" },
  { src: "/imgs/partner2.svg", name: "Marriott" },
  { src: "/imgs/partner3.svg", name: "Lowe's" },
  { src: "/imgs/partner4.svg", name: "AT&T" },
  { src: "/imgs/partner5.svg", name: "Smalls Sliders" },
  { src: "/imgs/partner6.svg", name: "Nairobi Professional" },
  { src: "/imgs/partner7.svg", name: "Tampa General Hospital" },
  { src: "/imgs/partner8.svg", name: "Summit Racing Equipment" },
];

export default function Partners() {
  return (
    <LogoStrip logos={partners} label="Clients we serve" className="partners-section" />
  );
}
