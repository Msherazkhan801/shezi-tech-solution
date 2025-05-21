import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./WhatWeDo.module.css";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);
  return (
    <div className={styles.whatWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 order-1 order-lg-0">
            <div className={styles.whatImages}>
              <img
                src="assets/images/what1.png"
                className={`d-none d-lg-block ${styles.whatOne}`}
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="400"
                data-aos-easing="linear"
                alt="what we do "
              />
              <img
                src="assets/images/what2.png"
                className={`d-none d-lg-block ${styles.whatTwo}`}
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="700"
                data-aos-easing="linear"
                alt="what we do "
              />
              <img
                src="assets/images/what3.png"
                className={`d-none d-lg-block ${styles.whatThree}`}
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="700"
                data-aos-easing="linear"
                alt="what we do"
              />
              <img
                src="assets/images/what.png"
                className={`d-block d-lg-none ${styles.whatOne}`}
                alt="what we do "
                height="auto"
                width="100%"
              />
            </div>
          </div>
          <div
            className={`col-xl-7 col-lg-6  pl-lg-5 order-0 order-lg-1 ${styles.whatContent}`}
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <h2>what we do!</h2>
            <p>
              Shezi Tech Solution is your trusted partner for cutting-edge web
              services and high-quality academic content. We help businesses and
              students alike by delivering professionally designed websites,
              engaging digital content, and effective link exchange solutions to
              boost your online visibility. Whether you need a modern website,
              well-researched academic materials, or strategic link
              partnerships, our expert team is here to support your growth. We
              combine creativity, technology, and academic expertise to provide
              services that help you succeed in the digital world.
            </p>
            <p>
              We create applications that are{" "}
              <b>powerful, intuitive, and user-friendly.</b>
            </p>
            <div className={`d-flex flex-column ${styles.whatOptions} `}>
              <span>Strategic Planning & Business Evaluation</span>
              <span>Custom Web & Mobile App Design and Development</span>
              <span>Effective SEO Strategies and Digital Marketing</span>
              <span>Comprehensive Support & Project Management</span>
            </div>
            <Link to="/who-we-are" className="btn btn-primary">
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
