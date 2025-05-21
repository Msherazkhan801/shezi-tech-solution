import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function useArrayRef() {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
}

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  // ref
  const leftRef = useRef(null);
  const heroRef = useRef(null);
  const leftTextRef = useRef(null);
  const titleRef = useRef(null);

  // end ref
  const [refs, setRef] = useArrayRef();

  useEffect(() => {
    // Hero Left Animation
    var x = window.matchMedia("(min-width: 768px)");
    if (x.matches) {
      const myTimeLine = gsap.timeline({
        ScrollTrigger: {
          trigger: heroRef.current,
          toggleActions: "restart none",
          end: "bottom 75%",
        },
      });

      // Hero Left animation
      myTimeLine.from([leftRef.current, leftTextRef.current], {
        xPercent: -100,
        duration: 0.5,
        stagger: 0.25,
      });

      myTimeLine.from(titleRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
      });
      // Hero right Animation
      myTimeLine.from(refs.current, {
        opacity: 0,
        scale: 0,
        transformOrigin: "center center",
        duration: 1,
        stagger: 0.3,
      });
    }
  }, [refs]);
  return (
    <div className={styles.HeroWrapper} id="hero-wrapper">
      <div className="container">
        <div className={`row ${styles.heroRow}`}>
          <div className={`col-xl-7 col-lg-5 ${styles.heroLeft}`}>
            <div className={styles.tags} ref={leftRef}>
              <span>Elevating Your Digital Presence</span>
            </div>
            <div className={styles.tagline} ref={heroRef}>
              <h1 ref={titleRef}>
                Crafting Engaging Websites, Powerful Content and <span></span> Powerful ideas.
              </h1>
              <p ref={leftTextRef}>
                Helping Your Brand Connect, Communicate, and Convert
              </p>
            </div>
          </div>
          <div className={`col-xl-5 col-lg-7 ${styles.heroRight}`}>
            <div className={` ${styles.heroImage}`}>
              <div className={styles.heroOuterImage}>
                <img
                  src="assets/images/hero-right.png"
                  width="100%"
                  height="auto"
                  alt="hero"
                />
              </div>
              <div className={styles.heroInnerImage}>
                <img
                  src="assets/images/inner-circle.png"
                  alt="circle"
                  height="auto"
                  width="100%"
                />
                <div className={styles.heroSkills}>
                  <div
                    className={`${styles.skill} ${styles.skill1}`}
                    ref={setRef}
                  >
                    <img
                      src="assets/images/hero-skills/skill1.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                    <img
                      src="assets/images/hero-skills/name1.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                  </div>
                  <div
                    className={`${styles.skill} ${styles.skill2}`}
                    ref={setRef}
                  >
                    <img
                      src="assets/images/hero-skills/skill2.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                    <img
                      src="assets/images/hero-skills/name2.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                  </div>
                  <div
                    className={`${styles.skill} ${styles.skill3}`}
                    ref={setRef}
                  >
                    <img
                      src="assets/images/hero-skills/skill3.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                    <img
                      src="assets/images/hero-skills/name3.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                  </div>
                  <div
                    className={`${styles.skill} ${styles.skill4}`}
                    ref={setRef}
                  >
                    <img
                      src="assets/images/hero-skills/skill4.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                    <img
                      src="assets/images/hero-skills/name4.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                  </div>
                  <div
                    className={`${styles.skill} ${styles.skill5}`}
                    ref={setRef}
                  >
                    <img
                      src="assets/images/hero-skills/skill5.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                    <img
                      src="assets/images/hero-skills/name5.png"
                      alt="skill"
                      height="auto"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
