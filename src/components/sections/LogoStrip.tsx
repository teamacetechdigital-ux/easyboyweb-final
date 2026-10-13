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
  return (
    <section className={`${styles.section} ${className}`.trim()} aria-label={label}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <div className={styles.group} key={copy} aria-hidden={copy === 1}>
              {logos.map((logo) => (
                <div className={styles.item} key={logo.src}>
                  <Image
                    src={logo.src}
                    alt={copy === 0 ? logo.name : ""}
                    width={140}
                    height={48}
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
