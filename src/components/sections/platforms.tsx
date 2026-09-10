const partners = [
  "/imgs/platform1.svg.svg",
  "/imgs/platform2.svg",
  "/imgs/platform3.svg",
  "/imgs/platform4.svg",
  "/imgs/platform5.svg",
  "/imgs/platform6.svg",
  "/imgs/platform7.svg",
  "/imgs/platform4.svg",
  "/imgs/platform1.svg",
  "/imgs/platform2.svg",
  "/imgs/platform3.svg",
  "/imgs/platform4.svg",
  "/imgs/platform5.svg",
  "/imgs/platform6.svg",
  "/imgs/platform7.svg",
  "/imgs/platform5.svg",
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
