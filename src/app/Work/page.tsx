"use client";
import Link from "next/link";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import MobileScreen from"@/src/components/sections/MobileScreen";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";


const webAppSlides = [
  {
    image: "/imgs/Creativescreen1.svg",
    link: "#",
    alt: "Web application project one",
  },
  {
    image: "/imgs/Creativescreen2.svg",
    link: "#",
    alt: "Web application project two",
  },
  {
    image: "/imgs/Creativescreen3.svg",
    link: "#",
    alt: "Web application project three",
  },
  {
    image: "/imgs/Creativescreen4.svg",
    link: "#",
    alt: "Web application project four",
  },
];

const websiteSlides = [
  {
    image: "/imgs/screen (1).svg",
    link: "#", // Add your link
    alt: "Website project one",
  },
  {
    image: "/imgs/screen (2).svg",
    link: "#", // Add your link
    alt: "Website project two",
  },
  {
    image: "/imgs/screen (3).svg",
    link: "#", // Add your link
    alt: "Website project three",
  },
  {
    image: "/imgs/screen (4).svg",
    link: "#", // Add your link
    alt: "Website project four",
  },
  {
    image: "/imgs/screen (5).svg",
    link: "#", // Add your link
    alt: "Website project five",
  },
];

const websiteCloneCount = 3;

const websiteLoopSlides = [
  ...websiteSlides.slice(-websiteCloneCount),
  ...websiteSlides,
  ...websiteSlides.slice(0, websiteCloneCount),
];




const logoSlides = [
  {
    image: "/imgs/ourwork_1.svg",
    alt: "Brand logo one",
  },
  {
    image: "/imgs/ourwork_2.svg",
    alt: "Brand logo two",
  },
  {
    image: "/imgs/ourwork_3.svg",
    alt: "Brand logo three",
  },
  {
    image: "/imgs/ourwork_4.svg",
    alt: "Brand logo four",
  },
  {
    image: "/imgs/ourwork_5.svg",
    alt: "Brand logo five",
  },
  {
    image: "/imgs/ourwork_6.svg",
    alt: "Brand logo six",
  },
  {
    image: "/imgs/ourwork_7.svg",
    alt: "Brand logo seven",
  },
  {
    image: "/imgs/ourwork_8.svg",
    alt: "Brand logo eight",
  },
];

const logoCloneCount = 5;

const logoLoopSlides = [
  ...logoSlides.slice(-logoCloneCount),
  ...logoSlides,
  ...logoSlides.slice(0, logoCloneCount),
];


 





export default function Page() {

 const websiteViewportRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(websiteCloneCount);
  const animationRef = useRef(false);
  const resetTimerRef = useRef<number | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToPosition = useCallback(
    (
      position: number,
      behavior: ScrollBehavior = "smooth",
    ) => {
      const viewport = websiteViewportRef.current;

      if (!viewport) return;

      const slides =
        viewport.querySelectorAll<HTMLElement>(
          ".website-work-slide",
        );

      const targetSlide = slides[position];

      if (!targetSlide) return;

      viewport.scrollTo({
        left: targetSlide.offsetLeft,
        behavior,
      });
    },
    [],
  );

  const resetSliderPosition = useCallback(
    (position: number) => {
      positionRef.current = position;
      scrollToPosition(position, "auto");
      animationRef.current = false;
    },
    [scrollToPosition],
  );

  const moveSlider = useCallback(
    (direction: -1 | 1) => {
      if (animationRef.current) return;

      animationRef.current = true;

      const nextPosition =
        positionRef.current + direction;

      positionRef.current = nextPosition;

      const logicalSlide =
        ((nextPosition - websiteCloneCount) %
          websiteSlides.length +
          websiteSlides.length) %
        websiteSlides.length;

      setActiveSlide(logicalSlide);
      scrollToPosition(nextPosition, "smooth");

      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }

      resetTimerRef.current = window.setTimeout(
        () => {
          const firstClonePosition =
            websiteCloneCount +
            websiteSlides.length;

          if (nextPosition >= firstClonePosition) {
            resetSliderPosition(websiteCloneCount);
            return;
          }

          if (nextPosition < websiteCloneCount) {
            resetSliderPosition(
              websiteCloneCount +
                websiteSlides.length -
                1,
            );
            return;
          }

          animationRef.current = false;
        },
        700,
      );
    },
    [resetSliderPosition, scrollToPosition],
  );

  const goToSlide = useCallback(
    (slideIndex: number) => {
      if (animationRef.current) return;

      animationRef.current = true;

      const nextPosition =
        websiteCloneCount + slideIndex;

      positionRef.current = nextPosition;
      setActiveSlide(slideIndex);
      scrollToPosition(nextPosition, "smooth");

      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }

      resetTimerRef.current = window.setTimeout(
        () => {
          animationRef.current = false;
        },
        700,
      );
    },
    [scrollToPosition],
  );

  useEffect(() => {
    const setInitialPosition = () => {
      scrollToPosition(
        positionRef.current,
        "auto",
      );
    };

    const initialTimer = window.setTimeout(
      setInitialPosition,
      50,
    );

    window.addEventListener(
      "resize",
      setInitialPosition,
    );

    return () => {
      window.clearTimeout(initialTimer);

      window.removeEventListener(
        "resize",
        setInitialPosition,
      );

      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, [scrollToPosition]);

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      moveSlider(1);
    }, 3500);

    return () => window.clearInterval(autoplay);
  }, [moveSlider]);





 const logoViewportRef =
    useRef<HTMLDivElement>(null);

  const logoPositionRef =
    useRef(logoCloneCount);

  const logoAnimationRef = useRef(false);

  const logoResetTimerRef =
    useRef<number | null>(null);

  const scrollToLogoPosition = useCallback(
    (
      position: number,
      behavior: ScrollBehavior = "smooth",
    ) => {
      const viewport = logoViewportRef.current;

      if (!viewport) return;

      const slides =
        viewport.querySelectorAll<HTMLElement>(
          ".logo-work-slide",
        );

      const selectedSlide = slides[position];

      if (!selectedSlide) return;

      viewport.scrollTo({
        left: selectedSlide.offsetLeft,
        behavior,
      });
    },
    [],
  );

  const resetLogoPosition = useCallback(
    (position: number) => {
      logoPositionRef.current = position;

      scrollToLogoPosition(position, "auto");

      logoAnimationRef.current = false;
    },
    [scrollToLogoPosition],
  );

  const moveLogoSlider = useCallback(
    (direction: -1 | 1) => {
      if (logoAnimationRef.current) return;

      logoAnimationRef.current = true;

      const nextPosition =
        logoPositionRef.current + direction;

      logoPositionRef.current = nextPosition;

      scrollToLogoPosition(
        nextPosition,
        "smooth",
      );

      if (logoResetTimerRef.current) {
        window.clearTimeout(
          logoResetTimerRef.current,
        );
      }

      logoResetTimerRef.current =
        window.setTimeout(() => {
          const firstRightClone =
            logoCloneCount +
            logoSlides.length;

          if (nextPosition >= firstRightClone) {
            resetLogoPosition(logoCloneCount);
            return;
          }

          if (nextPosition < logoCloneCount) {
            resetLogoPosition(
              logoCloneCount +
                logoSlides.length -
                1,
            );
            return;
          }

          logoAnimationRef.current = false;
        }, 700);
    },
    [
      resetLogoPosition,
      scrollToLogoPosition,
    ],
  );

  useEffect(() => {
    const setLogoPosition = () => {
      scrollToLogoPosition(
        logoPositionRef.current,
        "auto",
      );
    };

    const initialTimer = window.setTimeout(
      setLogoPosition,
      50,
    );

    window.addEventListener(
      "resize",
      setLogoPosition,
    );

    return () => {
      window.clearTimeout(initialTimer);

      window.removeEventListener(
        "resize",
        setLogoPosition,
      );

      if (logoResetTimerRef.current) {
        window.clearTimeout(
          logoResetTimerRef.current,
        );
      }
    };
  }, [scrollToLogoPosition]);

  useEffect(() => {
    const logoAutoplay = window.setInterval(
      () => {
        moveLogoSlider(1);
      },
      3000,
    );

    return () =>
      window.clearInterval(logoAutoplay);
  }, [moveLogoSlider]);

 

  const webAppViewportRef =
    useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] =
    useState(0);

  const [visibleSlides, setVisibleSlides] =
    useState(3);

  const maximumSlide = Math.max(
    0,
    webAppSlides.length - visibleSlides,
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => {
      if (current >= maximumSlide) {
        return 0;
      }

      return current + 1;
    });
  }, [maximumSlide]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((current) => {
      if (current <= 0) {
        return maximumSlide;
      }

      return current - 1;
    });
  }, [maximumSlide]);

  useEffect(() => {
    const updateVisibleSlides = () => {
      let newVisibleSlides = 3;

      if (window.innerWidth <= 786) {
        newVisibleSlides = 1;
      } else if (window.innerWidth <= 1140) {
        newVisibleSlides = 2;
      }

      setVisibleSlides(newVisibleSlides);

      const newMaximumSlide = Math.max(
        0,
        webAppSlides.length -
          newVisibleSlides,
      );

      setCurrentSlide((current) =>
        Math.min(current, newMaximumSlide),
      );
    };

    updateVisibleSlides();

    window.addEventListener(
      "resize",
      updateVisibleSlides,
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleSlides,
      );
    };
  }, []);

  useEffect(() => {
    const viewport = webAppViewportRef.current;

    if (!viewport) return;

    const slides =
      viewport.querySelectorAll<HTMLElement>(
        ".web-app-work-slide",
      );

    const selectedSlide =
      slides[currentSlide];

    if (!selectedSlide) return;

    viewport.scrollTo({
      left: selectedSlide.offsetLeft,
      behavior: "smooth",
    });
  }, [currentSlide, visibleSlides]);

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      window.clearInterval(autoplay);
    };
  }, [nextSlide]);
















    // return
  return (
    <>

<Header/>
<section className="work-banner-section">
  <div className="container">
    <div className="work-banner-content">
      <svg
        className="work-banner-icon"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M54 45V33C54 22 63 14 74 14H86C97 14 106 22 106 33V45"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <path
          d="M30 46H130C141 46 150 55 150 66V84C150 92 146 99 139 103L113 118C108 121 102 123 96 123H64C58 123 52 121 47 118L21 103C14 99 10 92 10 84V66C10 55 19 46 30 46Z"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinejoin="round"
        />

        <path
          d="M14 106V132C14 142 22 150 32 150H128C138 150 146 142 146 132V106"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <circle cx="80" cy="85" r="6" fill="currentColor" />
      </svg>

      <h1 className="font-aloevera">
        Our Work
      </h1>

      <Link
        href="/contact"
        className="work-banner-button font-inter"
      >
        Let&apos;s Talk
      </Link>
    </div>
  </div>
</section>



{/* website */}
    <section className="website-work-section">
      <div className="container">
        <h2 className="website-work-heading font-aloevera">
          Websites
        </h2>

        <div className="website-work-arrows">
          <button
            type="button"
            className="website-work-arrow font-inter"
            onClick={() => moveSlider(-1)}
            aria-label="Previous website"
          >
            &#8592;
          </button>

          <button
            type="button"
            className="website-work-arrow font-inter"
            onClick={() => moveSlider(1)}
            aria-label="Next website"
          >
            &#8594;
          </button>
        </div>

        <div
          ref={websiteViewportRef}
          className="website-work-viewport"
        >
          <div className="website-work-track">
            {websiteLoopSlides.map(
              (slide, index) => (
                <article
                  className="website-work-slide"
                  key={`${slide.image}-${index}`}
                >
                  <a
                    href={slide.link}
                    className="website-work-image-link"
                    onClick={(event) => {
                      if (slide.link === "#") {
                        event.preventDefault();
                      }
                    }}
                    aria-label={`Open ${slide.alt}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      draggable={false}
                    />
                  </a>

                  <a
                    href={slide.link}
                    className="website-work-link font-inter"
                    onClick={(event) => {
                      if (slide.link === "#") {
                        event.preventDefault();
                      }
                    }}
                  >
                    Visit Website
                  </a>
                </article>
              ),
            )}
          </div>
        </div>

        <div className="website-work-dots">
          {websiteSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.image}
              className={`website-work-dot ${
                activeSlide === index
                  ? "website-work-dot-active"
                  : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Open website slide ${
                index + 1
              }`}
            />
          ))}
        </div>
      </div>
    </section>



<MobileScreen/>

    {/* mobile */}
 
 <section className="logo-work-section">
      <div className="container">
        <h2 className="logo-work-heading font-aloevera">
          Logos
        </h2>

        <div className="logo-work-arrows">
          <button
            type="button"
            className="logo-work-arrow font-inter"
            onClick={() => moveLogoSlider(-1)}
            aria-label="Previous logos"
          >
            &#8592;
          </button>

          <button
            type="button"
            className="logo-work-arrow font-inter"
            onClick={() => moveLogoSlider(1)}
            aria-label="Next logos"
          >
            &#8594;
          </button>
        </div>

        <div
          ref={logoViewportRef}
          className="logo-work-viewport"
        >
          <div className="logo-work-track">
            {logoLoopSlides.map(
              (logo, index) => (
                <div
                  className="logo-work-slide"
                  key={`${logo.image}-${index}`}
                >
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    draggable={false}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>


{/* mobile app */}
<section className="web-app-work-section">
      <div className="container">
        <h2 className="web-app-work-heading font-aloevera">
          Web Apps
        </h2>

        <div className="web-app-work-arrows">
          <button
            type="button"
            className="web-app-work-arrow font-inter"
            onClick={previousSlide}
            aria-label="Previous web apps"
          >
            &#8592;
          </button>

          <button
            type="button"
            className="web-app-work-arrow font-inter"
            onClick={nextSlide}
            aria-label="Next web apps"
          >
            &#8594;
          </button>
        </div>

        <div
          ref={webAppViewportRef}
          className="web-app-work-viewport"
        >
          <div className="web-app-work-track">
            {webAppSlides.map((slide) => (
              <article
                className="web-app-work-slide"
                key={slide.image}
              >
                <a
                  href={slide.link}
                  className="web-app-work-image-link"
                  target={
                    slide.link === "#"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    slide.link === "#"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  onClick={(event) => {
                    if (slide.link === "#") {
                      event.preventDefault();
                    }
                  }}
                  aria-label={`Open ${slide.alt}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    draggable={false}
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
<Footer/>

    </>
  );
}




