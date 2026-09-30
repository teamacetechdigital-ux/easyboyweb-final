import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="container section-spacing" style={{ maxWidth: "900px" }}>
        <h1 className="font-aloevera">Privacy Policy</h1>
        <div className="font-inter" style={{ display: "grid", gap: "1rem" }}>
          <p>
            Easyboyweb is committed to protecting your privacy. We collect the
            information you provide when you contact us, request a quote, or submit
            a form through our website.
          </p>
          <p>
            This information is used to respond to inquiries, provide our services,
            improve the customer experience, and communicate updates related to our
            work.
          </p>
          <p>
            We do not sell or rent personal information to third parties. We may use
            trusted service providers to support our operations, subject to
            confidentiality obligations.
          </p>
          <p>
            You may contact us at any time to request access to, correction of, or
            deletion of your personal information.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
