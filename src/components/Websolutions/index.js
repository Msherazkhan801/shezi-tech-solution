import React, { useEffect, useRef } from "react";
import WebData from "../../webSolutionData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Websolutions.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const Websolutions = () => {
  gsap.registerPlugin(ScrollTrigger);
  const webLeftRef = useRef(null);
  const webRightRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    arrows: false,
    pauseOnHover: true,
    autoplay: false,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
    cssEase: "linear",
  };
  useEffect(() => {
    var x = window.matchMedia("(min-width: 768px)");
    if (x.matches) {
      gsap.fromTo(
        webLeftRef.current,
        {
          x: "-100%",
        },
        {
          scrollTrigger: {
            trigger: webLeftRef.current,
            toggleActions: "restart none none none",
          },
          x: 0,
          duration: 1.2,
        }
      );

      // Web Right
      gsap.fromTo(
        webRightRef.current,
        {
          x: "100%",
        },
        {
          scrollTrigger: {
            trigger: webLeftRef.current,
            toggleActions: "restart none none none",
          },
          x: 0,
          duration: 1,
        }
      );
    }
  }, []);
  return (
    <div className={styles.webSolutions}>
      <div className={`container`}>
        <div className={`row align-items-center webSliderWrapper`}>
          <div className={`col-lg-6 pr-md-5`}>
            <div className={styles.webSlider} ref={webLeftRef}>
              <Slider {...settings}>
                {WebData.map((web, index) => {
                  return (
                    <div className={styles.item} key={index}>
                      <Link to={{
                        pathname:"/technologies",
                        state:{id:web.id}

                      }}><h2>{web.title}</h2></Link>
                      <p>{web.description}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.webSolutionImage}`}>
            <img
              src="assets/images/wordpress.webp"
              alt="technology "
              ref={webRightRef}
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Websolutions;
