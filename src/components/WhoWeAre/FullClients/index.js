import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FullClients.module.css";

const FullClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    centerPadding: "40px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={styles.fullClientsWrapper}>
      <div className="container">
        <div className={styles.fullClientsInner}>
          <div className={styles.top}>
            <h2>OUR FULL RANGE OF CLIENTS</h2>
            <p>
              We understand the essence of the website development projects and
              then provide innovative solutions to each client. We, as a team
              are very proud of our work, and we guarantee to accomplish and
              deliver the unmatched standards in IT industry. Customer
              satisfaction is our top priority for which we have dedicated
              project managers and digital media experts with a record of
              exceptional project delivery.
            </p>
          </div>
          <div
            className={`webSliderWrapper fullClients ${styles.fullClientSlider}`}
          >
            <Slider {...settings}>
              <div className={styles.item}>
                <img src="assets/images/client1.png" alt="client" />
              </div>
              <div className={styles.item}>
                <img src="assets/images/client2.png" alt="client" />
              </div>
              <div className={styles.item}>
                <img src="assets/images/client3.png" alt="client" />
              </div>
              <div className={styles.item}>
                <img src="assets/images/client4.png" alt="client" />
              </div>
              <div className={styles.item}>
                <img src="assets/images/client5.png" alt="client" />
              </div>
              <div className={styles.item}>
                <img src="assets/images/client6.png" alt="client" />
              </div>
              <div className={styles.item}>
                <img src="assets/images/client7.png" alt="client" />
              </div>
              <div className={styles.item}>
                <img src="assets/images/client8.png" alt="client" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullClients;
