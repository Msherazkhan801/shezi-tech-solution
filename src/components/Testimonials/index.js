import styles from "./Testimonials.module.css";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className={styles.TestimonialsWrapper}>
      <div className={`container`}>
        <Slider {...settings} className="test-slider">
          <div className={styles.testimonial}>
            <p className={styles.text}>
            "Our collaboration has been seamless since the start.
             Their reliability and expertise keep me coming back, with no plans to change providers."
            </p>
            <h4>
              Deo Jhone - <span>cheeer</span>
            </h4>
          </div>
          <div className={styles.testimonial}>
            <p className={styles.text}>

            "Two years in, and our relationship with Shezi tech Solution.
             remains solid. I appreciate their professionalism—no scope creep, just consistent delivery."
            </p>
            <h4>
              Sabeeh Ullah - <span>tech-reach-pro</span>
            </h4>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
