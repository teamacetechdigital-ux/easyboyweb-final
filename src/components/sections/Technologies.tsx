import LogoStrip from "./LogoStrip";

const technologies = [
  { src: "/imgs/Technologies_icon1.svg", name: "AJAX" },
  { src: "/imgs/Technologies_icon2.svg", name: "PHP" },
  { src: "/imgs/Technologies_icon3.svg", name: "React" },
  { src: "/imgs/Technologies_icon4.svg", name: "Amazon Web Services" },
  { src: "/imgs/Technologies_icon5.svg", name: "Google Cloud" },
  { src: "/imgs/Technologies_icon6.svg", name: "Angular" },
  { src: "/imgs/Technologies_icon7.svg", name: "Python" },
  { src: "/imgs/Technologies_icon8.svg", name: "Vue.js" },
  { src: "/imgs/platform-nextjs.svg", name: "Next.js" },
];

export default function Technologies() {
  return (
    <LogoStrip
      logos={technologies}
      label="Technologies we use"
      className="technologies-section"
    />
  );
}
