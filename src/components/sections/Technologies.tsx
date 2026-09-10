import Image from "next/image";

const technologies = [
  "/imgs/Technologies_icon1.svg",
  "/imgs/Technologies_icon2.svg",
  "/imgs/Technologies_icon3.svg",
  "/imgs/Technologies_icon4.svg",
  "/imgs/Technologies_icon5.svg",
  "/imgs/Technologies_icon6.svg",
  "/imgs/Technologies_icon7.svg",
  "/imgs/Technologies_icon8.svg",
  "/imgs/Technologies_icon9.svg",
   "/imgs/Technologies_icon1.svg",
  "/imgs/Technologies_icon2.svg",
  "/imgs/Technologies_icon3.svg",
  "/imgs/Technologies_icon4.svg",
  "/imgs/Technologies_icon5.svg",
  "/imgs/Technologies_icon6.svg",
  "/imgs/Technologies_icon7.svg",
  "/imgs/Technologies_icon8.svg",
  "/imgs/Technologies_icon9.svg"
];

export default function Technologies() {
  return (
    <section className="technologies-section">
      <div
        className="technologies-track"
        aria-label="Technologies we use"
      >
        {technologies.map((technology, index) => (
          <div
            className="technology-item"
            key={`${technology}-${index}`}
          >
            <Image
              src={technology}
              alt={`Technology ${index + 1}`}
              width={140}
              height={70}
              className="technology-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}