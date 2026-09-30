import Image from "next/image";
import type { CSSProperties } from "react";
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
  return (
    <section className={`${styles.section} ${className}`} aria-label={label}>
      <ul
        className={styles.grid}
        style={{ "--brand-count": logos.length } as CSSProperties}
      >
        {logos.map((logo) => (
          <li className={styles.item} key={logo.name}>
            <Image
              src={logo.src}
              alt={logo.name}
              width={180}
              height={80}
              className={styles.logo}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
