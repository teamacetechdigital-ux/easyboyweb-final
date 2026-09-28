import Image from "next/image";
import Link from "next/link";
import styles from "./AgencyShowcase.module.css";

type AgencyShowcaseProps = {
  variant: "project" | "process";
};

const steps = [
  { title: "Strategy", description: "Your goals. Your audience. A clear direction." },
  { title: "Design", description: "Distinctive experiences, down to the details." },
  { title: "Development", description: "Thoughtful engineering that brings it all to life." },
];

export default function AgencyShowcase({ variant }: AgencyShowcaseProps) {
  if (variant === "process") {
    return (
      <div className={`agency-showcase ${styles.showcase} ${styles.process}`}>
        <div className={styles.processHeading}>
          <span className={styles.eyebrow}>The way we work</span>
          <span className={styles.brandMark} aria-hidden="true">✳</span>
        </div>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-aloevera">{step.title}</h3>
                <p className="font-inter">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.processFooter}>
          <span>One team. Every detail.</span>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`agency-showcase ${styles.showcase} ${styles.project}`}>
      <div className={styles.projectHeading}>
        <span className={styles.eyebrow}>Made by EasyBoyWeb</span>
        <span className={styles.discipline}>Design + Development</span>
      </div>
      <div className={styles.browser}>
        <div className={styles.browserBar} aria-hidden="true">
          <span className={styles.browserDots}><i /><i /><i /></span>
          <span className={styles.browserAddress}>Selected work</span>
          <span>↗</span>
        </div>
        <div className={styles.browserCanvas}>
          <Image
            src="/imgs/screen (4).svg"
            alt="A business website designed by EasyBoyWeb"
            fill
            sizes="(max-width: 767px) 85vw, 550px"
          />
        </div>
      </div>
      <div className={styles.projectFooter}>
        <span className="font-inter">From idea to experience.</span>
        <Link href="/Work" className={styles.workLink}>
          Explore our work <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
