import ProjectGallery from "./ProjectGallery";

const mobileProjects = [
  {
    image: "/imgs/gallery/appscreen1.png",
    alt: "Nairobi Professional and Sheen Magazine mobile apps, showing all four app screens",
  },
  {
    image: "/imgs/gallery/appscreen2.png",
    alt: "Black Enlightenment, Atlanta guide, and Nairobi Professional mobile apps, showing all three app screens",
  },
];

export default function MobileScreen() {
  return <ProjectGallery title="Our Recent Work" projects={mobileProjects} variant="mobile" />;
}
