import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import researchLogo from "../../icons/CreativeProcess.json";
import structureLogo from "../../icons/Layers.json";
import developmentLogo from "../../icons/ProgramCoding.json";
import designLogo from "../../icons/Design.json";
import testLogo from "../../icons/Planning.json";
import deployLogo from "../../icons/.json";
import Seo from "../../icons/SEO.json";
import Marketting from "../../icons/marketing.json";
import styles from "./HowWeDo.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HowWeDo = () => {
  gsap.registerPlugin(ScrollTrigger);
  // ref
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const line5Ref = useRef(null);
  const line6Ref = useRef(null);
  const line7Ref = useRef(null);
  const line8Ref = useRef(null);
  const line9Ref = useRef(null);
  const line10Ref = useRef(null);
  const line11Ref = useRef(null);
  const line12Ref = useRef(null);
  const line13Ref = useRef(null);
  const line14Ref = useRef(null);
  const howRef = useRef(null);

  const icons = [
    researchLogo,
    structureLogo,
    developmentLogo,
    designLogo,
    testLogo,
    deployLogo,
    Marketting,
    Seo,
  ];

  useEffect(() => {
    icons.forEach((ico, i) => {
      if (document.querySelector("#design-icon-" + i).innerHTML === "") {
        lottie.loadAnimation({
          container: document.querySelector("#design-icon-" + i),
          animationData: ico,
        });
      }
    });
  }, []);

  useEffect(() => {
    var x = window.matchMedia("(min-width: 768px)");
    if (x.matches) {
      const myTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: howRef.current,
          toggleActions: "restart none reverse none",
          start: "top 10%",
          end: "+=2000",
          pin: true,
          scrub: true,
        },
      });
      myTimeLine
        .to(line1Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line2Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line3Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          y: 0,
        })
        .to(line4Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line5Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line6Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line7Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          y: 0,
        })
        .to(line8Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line9Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line10Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line11Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          y: 0,
        })
        .to(line14Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line12Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        })
        .to(line13Ref.current, {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          x: 0,
        });
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  }, []);

  return (
    <div className={`howWrapperDiv ${styles.howWrapper}`}>
      <div className="container">
        <div className={styles.howTop}>
          <h2>how do we do it?</h2>
          <p>
            This is how we roll! A smart strategy is essential in taking your
            business on the path of success.
          </p>
        </div>
        <div className={`row ${styles.howRow}`} ref={howRef}>
          <div className={`col-6 ${styles.howDiv}`}>
            <div className={styles.howInner}>
              <div className={`howDiv ${styles.how}`}>
                <div className={styles.icon}>
                  <span id="design-icon-0"></span>
                </div>
                <div
                  className={`${styles.line} ${styles.line1}`}
                  ref={line1Ref}
                >
                  <img src="assets/images/l1.png" alt="line" />
                </div>
                <div className={styles.howText}>
                  <h4>Research</h4>
                  <p>
                    To research and comprehend the market and then determine the
                    best practices on the basis of the product offered.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.howDiv}`}>
            <div className={styles.howInner}>
              <div className={`howDiv ${styles.how}`}>
                <div className={styles.icon}>
                  <span id="design-icon-1"></span>
                </div>
                <div
                  className={`${styles.line} ${styles.line2}`}
                  ref={line2Ref}
                >
                  <img src="assets/images/l2.png" alt="line" />
                </div>
                <div
                  className={`${styles.line} ${styles.line3}`}
                  ref={line3Ref}
                >
                  <img src="assets/images/l3.png" alt="line" />
                </div>

                <div className={styles.howText}>
                  <h4>Structure</h4>
                  <p>
                    Look for a sound plan and develop a strategic proposition to
                    allign the things the way they are meant to be done to meet
                    the needs of the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.howDiv}`}>
            <div className={styles.howInner}>
              <div className={`howDiv ${styles.how}`}>
                <div className={styles.icon}>
                  <span id="design-icon-2"></span>
                </div>
                <div
                  className={`${styles.line} ${styles.line5}`}
                  ref={line5Ref}
                >
                  <img src="assets/images/l5.png" alt="line" />
                </div>
                <div
                  className={`${styles.line} ${styles.line6}`}
                  ref={line6Ref}
                >
                  <img src="assets/images/l21.png" alt="line" />
                </div>
                <div
                  className={`${styles.line} ${styles.line7}`}
                  ref={line7Ref}
                >
                  <img src="assets/images/l7.png" alt="line" />
                </div>

                <div className={styles.howText}>
                  <h4>Development</h4>
                  <p>
                    The simple websites can be transformed into completely
                    functional and stunning web-based applications that meet
                    goals and the targeted plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.howDiv}`}>
            <div className={styles.howInner}>
              <div className={`howDiv ${styles.how}`}>
                <div className={styles.icon}>
                  <span id="design-icon-3"></span>
                </div>
                <div
                  className={`${styles.line} ${styles.line4}`}
                  ref={line4Ref}
                >
                  <img src="assets/images/l4.png" alt="line" />
                </div>
                <div className={styles.howText}>
                  <h4>DESIGN</h4>
                  <p>
                    To think over again and look for a distinctive and
                    attractive layout that makes your company portfolio stand
                    out and conveys what you offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.howDiv}`}>
            <div className={styles.howInner}>
              <div className={`howDiv ${styles.how}`}>
                <div className={styles.icon}>
                  <span id="design-icon-4"></span>
                </div>
                <div
                  className={`${styles.line} ${styles.line8}`}
                  ref={line8Ref}
                >
                  <img src="assets/images/l21.png" alt="line" />
                </div>
                <div
                  className={`${styles.line} ${styles.line9}`}
                  ref={line9Ref}
                >
                  <img src="assets/images/l1.png" alt="line" />
                </div>
                <div className={styles.howText}>
                  <h4>Test</h4>
                  <p>
                    We ensure that the product we deliver for the rest of the
                    world to be ‘top quality’ and more than capable of meeting
                    the most recent standards of today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.howDiv}`}>
            <div className={styles.howInner}>
              <div className={`howDiv ${styles.how}`}>
                <div className={styles.icon}>
                  <span id="design-icon-5"></span>
                </div>
                <div
                  className={`${styles.line} ${styles.line2}`}
                  ref={line10Ref}
                >
                  <img src="assets/images/l2.png" alt="line" />
                </div>
                <div
                  className={`${styles.line} ${styles.line3}`}
                  ref={line11Ref}
                >
                  <img src="assets/images/l3.png" alt="line" />
                </div>
                <div className={styles.howText}>
                  <h4>Deploy</h4>
                  <p>
                    Then release the ship from the harbor and let it work its
                    magic while inspecting the masts to ensure smooth sailing ;)
                    (Puns intended!)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.howDiv}`}>
            <div className={styles.howInner}>
              <div className={`howDiv ${styles.how}`}>
                <div className={styles.icon}>
                  <span id="design-icon-6"></span>
                </div>
                <div
                  className={`${styles.line} ${styles.line4}`}
                  ref={line12Ref}
                >
                  <img src="assets/images/l5.png" alt="line" />
                </div>

                <div className={styles.howText}>
                  <h4>Marketing </h4>
                  <p>
                    We empower your brand with our featured marketing solutions
                    designed to amplify your reach and deliver results. So,
                    achieve sustained business growth with our marketing
                    campaigns designed to maximize your ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.howDiv}`}>
            <div className={styles.howInner}>
              <div className={`howDiv ${styles.how}`}>
                <div className={styles.icon}>
                  <span id="design-icon-7"></span>
                </div>
                <div
                  className={`${styles.line} ${styles.line4}`}
                  ref={line14Ref}
                >
                  <img src="assets/images/l4.png" alt="line" />
                </div>
                <div className={styles.howText}>
                  <h4>SEO</h4>
                  <p>
                    Raise your search engine rankings and attract more targeted
                    visitors with our specialized SEO services. Trust us to
                    deliver measurable results and uplift your digital presence
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
