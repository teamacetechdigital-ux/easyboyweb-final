import ProjectGallery from "./ProjectGallery";

const mobileProjects = [
  {
    image: "/imgs/app1.png",
    alt: "Nairobi Professional app welcome screen",
  },
  {
    image: "/imgs/app2.png",
    alt: "Nairobi Professional app sign-in screen",
  },
  {
    image: "/imgs/app3.png",
    alt: "Sheen Magazine app welcome screen",
  },
  {
    image: "/imgs/app4.png",
    alt: "Sheen Magazine app issues screen",
  },
  {
    image: "/imgs/app5.png",
    alt: "Black Enlightenment app welcome screen",
  },
  {
    image: "/imgs/app6.png",
    alt: "Atlanta guide app local listings screen",
  },
  {
    image: "/imgs/app7.png",
    alt: "Nairobi Professional app splash screen",
  },
];

export default function MobileScreen() {
  return <ProjectGallery title="Our Recent Work" projects={mobileProjects} variant="mobile" />;
}
