import Image from "next/image";
import styles from "./LogoStrip.module.css";

type BrandLogo = {
  src: string;
  name: string;
};

type LogoStripProps = {
  logos: BrandLogo[];
  label: string;
  className?: string;
};

export default function LogoStrip({ logos, label, className = "" }: LogoStripProps) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className={`${styles.section} ${className}`.trim()} aria-label={label}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {marqueeLogos.map((logo, index) => (
            <div
              className={styles.item}
              key={`${logo.name}-${index}`}
              aria-hidden={index >= logos.length}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={180}
                height={80}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
