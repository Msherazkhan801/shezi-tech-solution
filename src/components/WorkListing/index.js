import React from "react";
import WorkData from "../../WorkData";
import styles from "./WorkListing.module.css";
import { Link } from "react-router-dom";

const WorkListing = () => {
  return (
    <div className={styles.WorkListing}>
      <div className="pageTopSection">
        <div className="container">
          <h1>Our Outclass Work!</h1>
          <p>Web Development Means, Exclusively Stunning Layout!</p>
          <p>
            Shezi Tech Solution. believe in the idea of progress and arching up to
            the current standards of advancement. Therefore, we provide the
            top-notch web development services to improve our customer's brand
            and assist them to keep it update and as user-friendly as they can.
          </p>
        </div>
      </div>
      <div className={`container ${styles.WorkListingInner}`}>
        <div className="row">
          {WorkData.map((work) => {
            return (
              <div className="col-md-6" key={work.id}>
                <Link to={`/work/${work.slug}`}>
                  <div className={styles.workItem}>
                    <div className={styles.image}>
                      <img src={`/${work.src}`} alt="work" />
                    </div>
                    <div className={styles.workDesc}>
                      <h4>{work.title}</h4>
                      <p>{work.desc.overview}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkListing;
