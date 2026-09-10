import { Fragment } from "react";
import Image from "next/image";

import helpIcon1 from "../../../public/imgs/help_icon1.svg";
import helpIcon2 from "../../../public/imgs/help_icon2.svg";
import helpIcon3 from "../../../public/imgs/help_icon3.svg";
import arrowIcon from "../../../public/imgs/arrow_icon.svg";

const workSteps = [
  {
    number: "1",
    title: "Design",
    icon: helpIcon1,
  },
  {
    number: "2",
    title: "Build",
    icon: helpIcon2,
  },
  {
    number: "3",
    title: "Launch",
    icon: helpIcon3,
  },
];

export default function HowWeWork() {
  return (
    <section className="how-we-work-section">
      <div className="container">
        <h2 className="how-we-work-heading font-aloevera">
          How We Work
        </h2>

        <div className="how-we-work-process">
          {workSteps.map((step, index) => (
            <Fragment key={step.title}>
              <article className="how-we-work-step">
                <div className="how-we-work-visual">
                  <div className="how-we-work-big-hexagon">
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