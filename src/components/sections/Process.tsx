import { Fragment } from "react";
import Image from "next/image";

import process1 from "../../../public/imgs/process1.svg";
import process2 from "../../../public/imgs/process2.svg";
import helpIcon3 from "../../../public/imgs/help_icon3.svg";
import arrowIcon from "../../../public/imgs/arrow_icon.svg";

const workSteps = [
  {
    number: "1",
    title: "Collecting Data",
    para: "We understand your vision and goals for your website, and collect/create content.",
    icon: process1,
  },
  {
    number: "2",
    title: "Design & Development",
    para: "We build something that looks good and works even better.",
    icon: process2,
  },
  {
    number: "3",
    title: "Launch",
    para: "After you approve the design, we push your website live for the world to see.",
    icon: helpIcon3,
  },
];

export default function HowWeWork() {
  return (
    <section className="how-we-work-section bg-clr-chng">
      <div className="container">
        <h2 className="how-we-work-heading process-clr-chng-tit font-aloevera">
          How We Work
        </h2>
        <p className="font-inter process-para">Website development with EasyBoyWeb is as easy as 1, 2, 3!</p>
        <div className="how-we-work-process">
          {workSteps.map((step, index) => (
            <Fragment key={step.title}>
              <article className="how-we-work-step clr-step-chng">
                <div className="how-we-work-visual">
                  <div className="how-we-work-big-hexagon clr-chng-hexagon">
                    <div className="how-we-work-big-hexagon-inner">
                      <Image
                        src={step.icon}
                        alt={`${step.title} icon`}
                        width={72}
                        height={78}
                      />
                    </div>
                  </div>

                  <div className="how-we-work-number">
                    <div className="how-we-work-number-inner">
                      <span className="font-aloevera">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="font-aloevera">
                  {step.title}
                </h3>
                <p className="font-inter">{step.para}</p>
              </article>

              {index < workSteps.length - 1 && (
                <div
                  className="how-we-work-connector"
                  aria-hidden="true"
                >
                  <div className="how-we-work-arrow">
                    <Image
                      src={arrowIcon}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}