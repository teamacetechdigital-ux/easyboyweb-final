import Image from "next/image";
import styles from "./ProEntrepreneur.module.css";

function CreditIcon({ type }: { type: "coins" | "card" | "message" | "phone" | "mail" | "info" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === "coins" && <><ellipse cx="9" cy="8" rx="5" ry="3" /><path d="M4 8v4c0 1.7 2.2 3 5 3m-5-3v4c0 1.7 2.2 3 5 3" /><ellipse cx="16" cy="14" rx="4" ry="2.5" /><path d="M12 14v4c0 1.4 1.8 2.5 4 2.5s4-1.1 4-2.5v-4M9 5V2m-2 1h4" /></>}
      {type === "card" && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h5" /></>}
      {type === "message" && <path d="M20 15a2 2 0 0 1-2 2H9l-5 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10ZM8 8h8M8 12h5" />}
      {type === "phone" && <path d="m8 3 3 5-3 2c1.5 3 3 4.5 6 6l2-3 5 3-1 4c-1 3-7 0-11-4S2 6 5 4l3-1Z" />}
      {type === "mail" && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>}
      {type === "info" && <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7h.01" /></>}
    </svg>
  );
}

export default function ProEntrepreneur() {
  return (
    <section className={styles.section} aria-labelledby="pro-entrepreneur-heading">
      <div className="container">
        <div className={`${styles.content} font-inter`}>
          <div className={styles.top}>
            <div className={styles.introduction}>
              <h2 id="pro-entrepreneur-heading" className={styles.heading}>
                Built By Entrepreneurs,{" "}<br />For Entrepreneurs
              </h2>
              <p className={styles.description}>
                We&apos;re a team of developers, marketers, and business owners helping companies scale.
              </p>
            </div>

            <div className={styles.credits} data-reveal-group="product">
              <article className={styles.creditCard} data-card-motion="product">
                <span className={`${styles.icon} ${styles.coinIcon}`} data-card-icon><CreditIcon type="coins" /></span>
                <h3 className={styles.cardHeading}>Included Monthly Credits</h3>
                <p className={styles.cardDescription}>
                  Depending on your plan, you&apos;ll receive free monthly credits for texting, phone numbers, call minutes, email sends, phone and email verification, and AI usage.
                </p>
              </article>

              <article className={styles.creditCard} data-card-motion="product">
                <div className={styles.cardTitleRow}>
                  <span className={styles.icon} data-card-icon><CreditIcon type="card" /></span>
                  <h3 className={styles.cardHeading}>$10 Credit<br />Powerhouse</h3>
                </div>
                <p className={styles.cardDescription}>A $10 credit value gives you approximately:</p>
                <ul className={styles.creditValues}>
                  <li><CreditIcon type="message" />1,000 Text Messages</li>
                  <li><CreditIcon type="phone" />1,000 Call Minutes</li>
                  <li><CreditIcon type="mail" />10,000 Emails</li>
                </ul>
              </article>
            </div>
          </div>

          <div className={styles.note} data-reveal-card>
            <CreditIcon type="info" />
            <div>
              <p><strong>Automatic Reload:</strong> Once credits are used, accounts reload seamlessly in $10 increments.</p>
              <p className={styles.noteDetail}>Note: Unused credits do not roll over to the next month.</p>
            </div>
          </div>

        </div>

        <div className="automation-cta" data-reveal-card>
          <div className="automation-cta-content">
            <h2 className="automation-cta-heading font-inter">
              Ready To Automate And
              {" "}
              Scale Your Business?
            </h2>

            <p className="automation-cta-description font-inter">
              Join thousands of businesses using EasyBoyWeb Pro to
              save time, increase conversions, and grow faster.
            </p>

            <div className="automation-cta-buttons">
              <a
                href="/contact?service=pro"
                className="automation-cta-button automation-cta-primary font-inter"
              >
                Get Started Today
              </a>

              <a
                href="/contact?service=pro-demo"
                className="automation-cta-button automation-cta-secondary font-inter"
              >
                Book A Free Demo
              </a>
            </div>
          </div>

          <Image
            src="/imgs/rocket_img.svg"
            alt="EasyBoyWeb automation rocket"
            width={478}
            height={647}
            className="automation-rocket"
          />
        </div>
      </div>
    </section>
  );
}
