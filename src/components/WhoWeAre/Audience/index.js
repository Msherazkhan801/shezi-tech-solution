import React from "react";
import styles from "./Audience.module.css";

const Audience = () => {
  return (
    <div className={styles.audience}>
      <div className="container">
        <h1>Who We Are</h1>
        <h4>
          5 Years of building Impactful Brand designs, driven for success.
        </h4>
        <div className={styles.innerAudience}>
          <div className="row">
            <div className="col-lg-6 pr-lg-5">
              <div className={`mb-4 mb-lg-0 ${styles.audienceLeft}`}>
                {/* <h3>Quality Software Solutions</h3>
                <h3>App & Web Development</h3>
                <h3>Redesigning Web</h3> */}
                <h3>We are Designers</h3>
                <h3>We are Software Engineers</h3>
                <h3>We are Innovative</h3>
                <h3>We are Creative</h3>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-0">
              <div className={styles.audienceRight}>
                <p>
                Shezi Tech Solution. is an agency that is digitally focused and prepared to provide efficient solutions which deal with both frontend development and backend development to help you become a successful brand in today's world. We have a team of 70+ employees with diverse and accomplished backgrounds in all fields related to web development and marketing. We try to diversify the content strategy and bring variation in web development. Our sailors make you sail through the competition in the market and make your brand name stand out with the latest website development and digital marketing trends. We provide a personalized and personalized service to each client whether they are large or small.
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;
