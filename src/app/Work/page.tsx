import Link from "next/link";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import MobileScreen from "@/src/components/sections/MobileScreen";
import ProjectGallery from "@/src/components/sections/ProjectGallery";

const websiteProjects = [
  { image: "/imgs/screen1slide.png", alt: "Website project one" },
  { image: "/imgs/screen2slide.png", alt: "Website project two" },
  { image: "/imgs/screen3slide.png", alt: "Website project three" },
  { image: "/imgs/screen4slide.png", alt: "Website project four" },
  { image: "/imgs/screen5slide.png", alt: "Website project five" },
  { image: "/imgs/screen6slide.png", alt: "Website project six" },
  { image: "/imgs/screen7slide.png", alt: "Website project seven" },
  { image: "/imgs/screen8slide.png", alt: "Website project eight" },
  { image: "/imgs/screen9slide.png", alt: "Website project nine" },
  { image: "/imgs/screen10slide.png", alt: "Website project ten" },
  { image: "/imgs/screen11slide.png", alt: "Website project eleven" }
];

const logoProjects = [
  { image: "/imgs/ourwork_1.png", alt: "Brand logo one" },
  { image: "/imgs/ourwork_2.png", alt: "Brand logo two" },
  { image: "/imgs/ourwork_3.png", alt: "Brand logo three" },
  { image: "/imgs/ourwork_4.png", alt: "Brand logo four" },
  { image: "/imgs/ourwork_5.png", alt: "Brand logo five" },
  { image: "/imgs/ourwork_6.png", alt: "Brand logo six" },
  { image: "/imgs/ourwork_7.png", alt: "Brand logo seven" },
];

const webAppProjects = [
  { image: "/imgs/Creativescreen1.png", alt: "Lowe's capacity management application" },
  { image: "/imgs/Creativescreen2.png", alt: "Web application project two, full screen preview" },
  { image: "/imgs/Creativescreen3.png", alt: "Web application project three, full screen preview" },
  { image: "/imgs/Creativescreen4.png", alt: "Web application project four, full screen preview" },
  { image: "/imgs/Creativescreen5.png", alt: "Web application project five, full screen preview" },
  { image: "/imgs/Creativescreen6.png", alt: "Web application project six, full screen preview" },
];

export default function Page() {
  return (
    <main className="work-page">
      <Header />
      <section className="work-banner-section" data-site-banner>
  <div className="container">
    <div className="work-banner-content">
      <svg
        className="work-banner-icon"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M54 45V33C54 22 63 14 74 14H86C97 14 106 22 106 33V45"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <path
          d="M30 46H130C141 46 150 55 150 66V84C150 92 146 99 139 103L113 118C108 121 102 123 96 123H64C58 123 52 121 47 118L21 103C14 99 10 92 10 84V66C10 55 19 46 30 46Z"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinejoin="round"
        />

        <path
          d="M14 106V132C14 142 22 150 32 150H128C138 150 146 142 146 132V106"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <circle cx="80" cy="85" r="6" fill="currentColor" />
      </svg>

      <h1 className="font-aloevera">
        Our Work
      </h1>

      <Link
        href="/contact"
        className="work-banner-button font-inter"
      >
        Let&apos;s Talk
      </Link>
    </div>
  </div>
</section>
      <ProjectGallery title="Websites" projects={websiteProjects} />
      <MobileScreen />
      <ProjectGallery title="Logos" projects={logoProjects} variant="logos" />
      <ProjectGallery title="Web Apps" projects={webAppProjects} />
      <Footer />
    </main>
  );
}
