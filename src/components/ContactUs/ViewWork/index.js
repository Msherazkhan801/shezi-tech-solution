import React from "react";
import { Link } from "react-router-dom";
import styles from "./ViewWork.module.css";

const ViewWork = () => {
  return (
    <div className={styles.ViewWork}>
      <div className="container">
        <div className={styles.ViewWorkInner}>
          <h2 style={{textTransform:"uppercase"}}>Take a look at our latest projects and achievements.</h2>
          <Link to="/work" className={`  ${styles.viewWork}`}>
            <button className={styles.viewWorkbtn}>View our Service </button>
          </Link>
          <div className={styles.lookingFor}>
            <p className="text-center">
            Ready to build a career that truly impacts the world?
            </p>
          </div>

          <Link to="/careers" className={styles.getHired}>
            get hired
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewWork;
