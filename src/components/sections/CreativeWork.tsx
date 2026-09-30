import ProjectGallery from "./ProjectGallery";

const creativeProjects = [
  { image: "/imgs/gallery/Creativescreen1.png", alt: "Lowe's capacity management application" },
  { image: "/imgs/gallery/Creativescreen2.png", alt: "Custom software project two, full screen preview" },
  { image: "/imgs/gallery/Creativescreen3.png", alt: "Custom software project three, full screen preview" },
  { image: "/imgs/gallery/Creativescreen4.png", alt: "Custom software project four, full screen preview" },
];

export default function CreativeWork() {
  return <ProjectGallery title="Our Recent Work" projects={creativeProjects} />;
}
