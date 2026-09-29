const platforms = [
  { src: "/imgs/platform1.svg", name: "Mailchimp" },
  { src: "/imgs/platform2.svg", name: "Google Analytics" },
  { src: "/imgs/platform-nextjs.svg", name: "Next.js" },
  { src: "/imgs/platform4.svg", name: "WooCommerce" },
  { src: "/imgs/platform5.svg", name: "Mailchimp" },
  { src: "/imgs/platform-digitalocean.svg", name: "DigitalOcean" },
  { src: "/imgs/platform7.svg", name: "WordPress" },
];

const partners = [...platforms, ...platforms];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-track" aria-label="Partner logos">
        {partners.map((partner, index) => (
          <div key={`${partner.src}-${index}`} className="partner-item">
            <img
              src={partner.src}
              alt={index < platforms.length ? partner.name : ""}
              className="partner-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
