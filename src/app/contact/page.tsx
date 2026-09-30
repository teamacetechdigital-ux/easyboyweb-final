import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="container section-spacing">
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="section-kicker">Contact</p>
          <h1 className="font-aloevera" style={{ marginBottom: "1rem" }}>
            Let’s build your next big win.
          </h1>
          <p className="font-inter" style={{ marginBottom: "2rem" }}>
            Tell us what you’re building and we’ll help shape the right strategy,
            design, and technical approach for your business.
          </p>

          <div style={{ display: "grid", gap: "1rem", textAlign: "left" }}>
            <a href="tel:+18008070319" className="font-inter">
              Phone: +1 800-807-0319
            </a>
            <a href="mailto:hello@easyboyweb.com" className="font-inter">
              Email: hello@easyboyweb.com
            </a>
            <p className="font-inter">
              Offices in Greenville, South Carolina and Atlanta, Georgia.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
