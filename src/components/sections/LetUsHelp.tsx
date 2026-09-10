import { Fragment } from "react";
import Image from "next/image";

import helpIcon1 from "../../../public/imgs/help_icon1.svg";
import helpIcon2 from "../../../public/imgs/help_icon2.svg";
import helpIcon3 from "../../../public/imgs/help_icon3.svg";
import helpIcon4 from "../../../public/imgs/help_icon4.svg";
import arrowIcon from "../../../public/imgs/arrow_icon.svg";

const helpSteps = [
  {
    number: "1",
    title: "Design",
    description: "Branding, UX/UI, strategy",
    icon: helpIcon1,
  },
  {
    number: "2",
    title: "Build",
    description: "Web, mobile, software development",
    icon: helpIcon2,
  },
  {
    number: "3",
    title: "Launch",
    description: "Hosting, deployment, optimization",
    icon: helpIcon3,
  },
  {
    number: "4",
    title: "Grow",
    description: "SEO, automation, marketing",
    icon: helpIcon4,
  },
];

export default function LetUsHelp() {
  return (
    <section className="let-us-help-section">
      <div className="container">
        <h2 className="let-us-help-heading font-aloevera">
          Let Us Help You
        </h2>

        <div className="help-process">
          {helpSteps.map((step, index) => (
            <Fragment key={step.title}>
              <article className="help-step">
                <div className="help-step-visual">
                  <div className="help-big-hexagon">
                    <div className="help-big-hexagon-inner">
                      <Image
                        src={step.icon}
                        alt={`${step.title} icon`}
                        width={72}
                        height={78}
                      />
                    </div>
                  </div>

                  <div className="help-number-hexagon">
                    <div className="help-number-hexagon-inner">
                      <span className="font-aloevera">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="font-aloevera">
                  {step.title}
                </h3>

                <p className="font-inter">
                  {step.description}
                </p>
              </article>

              {index < helpSteps.length - 1 && (
                <div
                  className="help-arrow-connector"
                  aria-hidden="true"
                >
                  <div className="help-arrow-icon">
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