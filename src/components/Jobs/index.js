import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import JobsData from "../../JobsData";
import styles from "./Jobs.module.css";

const Jobs = () => {
  const settings = {
    className: "centerSlider",
    centerMode: true,
    infinite: true,
    dots: true,
    arrows: false,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500,
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
  return (
    <>
      <div className="container">
        <div className={styles.joinTeam}>
          <div className={styles.joinTop}>
            <h1>Craft Your Sustainable Career In Web Development!</h1>
            <p>
              Build a career that suits your lifestyle, in a company where your
              voice matters. Let’s build a sustainable world together.
            </p>
          </div>
          <div className={styles.jobWrapper}>
            {JobsData.map((job, index) => {
              return (
                <div className={styles.job} key={index}>
                  <div className="row">
                    <div className={`col-md-6 ${styles.jobLeft}`}>
                      <span>{job.hours}</span>
                      <h4 className={styles.title}>{job.title}</h4>
                    </div>
                    <div className={`col-md-6 ${styles.jobRight}`}>
                      <Link
                        className={`btn btn-primary ${styles.btnApply}`}
                        to={`/careers/${job.slug}`}
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.working}>
          <div className="row">
            <div className="col-md-6">
              {/* <h3>
                      Working at <span>SheziTechSolution</span> means flexibility, trust and meaningful choices
                    </h3> */}
              <h3>
                Don't implement everything, Just <br></br>
                <span>create</span> an effective plan!
              </h3>
            </div>
            <div className="col-md-6">
              <p>
                Working at Shezi Tech Solution. means being a part of a community
                that values growth, mutual trust and respect.
                <br></br> <br></br>
                We want to continuously learn and improve, so we maintain a
                feedback-oriented mindset. And most importantly, we care – about
                creating sustainable software, about how our actions affect the
                world, and about each individual employee’s experience. As a
                Certified B Corporation®, we offer a safe, inclusive and
                productive environment for all team members, and we’re always
                open to feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`officeSlider ${styles.officePics}`}>
        <Slider {...settings}>
          <div className={styles.officsPic}>
            <img src="/assets/images/office/office1.png" alt="office-gallery" />
          </div>
          <div className={styles.officsPic}>
            <img src="/assets/images/office/office2.png" alt="office-gallery" />
          </div>
          <div className={styles.officsPic}>
            <img src="/assets/images/office/office3.png" alt="office-gallery" />
          </div>
          <div className={styles.officsPic}>
            <img src="/assets/images/office/office1.png" alt="office-gallery" />
          </div>
          <div className={styles.officsPic}>
            <img src="/assets/images/office/office2.png" alt="office-gallery" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Jobs;
