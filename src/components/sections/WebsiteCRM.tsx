import Link from "next/link";

const systemSteps = [
  {
    number: "01",
    title: "Attract",
    subtitle: "Custom Website",
    description:
      "A conversion-focused experience built around your brand, services, and customers.",
  },
  {
    number: "02",
    title: "Capture",
    subtitle: "Lead Generation",
    description:
      "Strategic forms, calls-to-action, quote requests, and booking opportunities capture visitor intent.",
  },
  {
    number: "03",
    title: "Connect",
    subtitle: "CRM Integration",
    description:
      "New leads are automatically sent into your CRM instead of getting lost in emails or spreadsheets.",
  },
  {
    number: "04",
    title: "Convert",
    subtitle: "Sales Follow-Up",
    description:
      "Your team gets a clearer process for managing, nurturing, and converting opportunities.",
  },
];

export default function WebsiteCRM() {
  return (
    <section className="website-crm-section">
      <div className="container">
        <div className="website-crm-intro">
          <p className="website-crm-label font-aloevera">
            Custom Website + CRM Integration
          </p>

          <h2 className="website-crm-heading font-aloevera">
            More Than a Website.
            <br />
            A Lead Generation Engine.
          </h2>

          <p className="website-crm-description font-inter">
            Your website shouldn&apos;t just look good. It should capture
            opportunities, organize leads, and help turn visitors into
            customers. Our core web development package combines a fully
            custom-designed website with CRM integration, connecting your
            website directly to the system your sales team uses to manage and
            follow up with leads.
          </p>
        </div>

        <div className="website-crm-content">
          <div className="website-crm-copy">
            <h3 className="font-aloevera">
              Built to Generate.
              <br />
              Connected to Convert.
            </h3>

            <div className="website-crm-copy-text font-inter">
              <p>
                Every page, form, CTA, and conversion point is strategically
                designed to move visitors toward taking action.
              </p>

              <p>
                When someone submits an inquiry, requests a quote, books a
                consultation, or becomes a lead, their information can flow
                directly into your CRM, helping your team respond faster and
                keep opportunities organized.
              </p>

              <p>
                You&apos;re not just getting a website. You&apos;re getting the
                foundation of a lead generation and sales system.
              </p>
            </div>

            <Link
              href="/contact"
              className="website-crm-button font-inter"
            >
              Build My Growth System
            </Link>
          </div>

          <div className="website-crm-cards">
            {systemSteps.map((step) => (
              <article className="website-crm-card" key={step.number}>
                <h3 className="website-crm-card-heading font-aloevera">
                  <span>{step.number}</span> {step.title}
                </h3>

                <h4 className="font-inter">{step.subtitle}</h4>

                <p className="font-inter">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="website-crm-strip">
          <p className="font-aloevera">
            We Don&apos;t Just Build Websites. We Build Lead Generation
            Engines.
          </p>
        </div>
      </div>
    </section>
  );
}