import React, { useEffect, useCallback, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Work.module.css";
import WorkData from "../../WorkData";
import { Link, useHistory } from "react-router-dom";
import AOS from "aos";

const Work = () => {
  const history = useHistory();
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2500,
    lazyLoad: "ondemand",
    cssEase: "linear",
    infinite: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const handleOnItemClick = useCallback(
    (e) => {
      if (dragging) {
        e.preventDefault();
      }
    },
    [dragging]
  );

  return (
    <div className={styles.workWrapper}>
      <div className={`container`}>
        {window.location.href.indexOf("work") > -1 ? (
          ""
        ) : (
          <div
            className={styles.workTop}
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <div className={styles.title}>
              <h2>Our Services</h2>
            </div>
            <div className={styles.workText}>
              <p>
              These are some of the valued clients we’ve proudly partnered with and supported over the years.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.workSlider}>
        <Slider
          {...settings}
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
        >
          {WorkData.map((work) => {
            if (parseInt(history.location.pathname.split("/")[2]) !== work.id) {
              return (
                <div className={styles.item} key={work.id}>
                  <Link to={`/work/${work.slug}`} onClick={handleOnItemClick}>
                    <img
                      className={styles.slideImages}
                      src={`/${work.src}`}
                      alt="work"
                      height="auto"
                      width="100%"
                    />
                  </Link>
                </div>
              );
            } else {
              return null;
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Work;
