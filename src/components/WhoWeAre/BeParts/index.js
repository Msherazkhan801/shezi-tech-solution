import React from "react";
import { Link } from "react-router-dom";
import styles from "./BeParts.module.css";

const BeParts = () => {
  return (
    <div className={styles.beParts}>
      <div className="container">
        <div className={styles.bePartsInner}>
          <h2>Come and be a part of our team!</h2>
          <p>
          We Build Fully Integrated & User-Friendly Apps. 
Our team of experts provides a professional and friendly service which includes frontend development and also backend development, that takes care and work hard to meet the requirements of the client. We turn visions of the future into stunning realities of web development world.
          </p>

          <Link to="/careers" className="btn btn-primary">
            Explore Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeParts;
