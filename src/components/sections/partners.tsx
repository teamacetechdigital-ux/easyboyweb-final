const partners = [
  "/imgs/partner1.svg",
  "/imgs/partner2.svg",
  "/imgs/partner3.svg",
  "/imgs/partner4.svg",
  "/imgs/partner5.svg",
  "/imgs/partner6.svg",
  "/imgs/partner7.svg",
  "/imgs/partner8.svg",
  "/imgs/partner1.svg",
  "/imgs/partner2.svg",
  "/imgs/partner3.svg",
  "/imgs/partner4.svg",
  "/imgs/partner5.svg",
  "/imgs/partner6.svg",
  "/imgs/partner7.svg",
  "/imgs/partner8.svg",
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-track" aria-label="Partner logos">
        {partners.map((partner, index) => (
          <div key={`${partner}-${index}`} className="partner-item">
            <img src={partner} alt="Partner logo" className="partner-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}
