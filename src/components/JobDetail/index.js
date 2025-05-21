import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./JobDetail.module.css";
import JobsData from "../../JobsData";
import Form from "../Form";

const JobDetail = () => {
  const history = useHistory();
  const slug = history.location.pathname.split("/")[2];
  let detailContent = JobsData.find((job) => job.slug === slug);

  return (
    <div className={`jobDetailWrapper ${styles.jobDetailWrapper}`}>
      <div className="jobDetail">
        <div className="row">
          <div className={`col-lg-6 ${styles.detailLeft}`}>
            <Link to="/careers" className={styles.back}>
              <img src="/assets/images/back-to.png" alt="back-to" /> Back to
              Jobs
            </Link>
            <h2>Join the team</h2>
            <h4 className={`mt-4 ${styles.apply}`}>Apply now</h4>
            {detailContent?.detail?.map((detail, index) => {
              return (
                <div className={styles.jobDescription} key={index}>
                  <div id={`accordion${index}`} className="accordion">
                    <div className="mb-0">
                      <div className="card-header px-0 ">
                        <a
                          className={`card-title accordion-button collapsed ${styles.detailTitle}`}
                          data-toggle="collapse"
                          href={`#collapse${index}`}
                        >
                          <h4>{detail.title}</h4>
                        </a>
                      </div>
                      <div
                        id={`collapse${index}`}
                        className="card-body px-0 pt-0 collapse"
                        data-parent="#accordion"
                      >
                        <p>{detail.info}</p>
                        <ul className={styles.listItemWrapper}>
                          {detail?.list?.map((item, index) => {
                            return (
                              <li className={styles.listItem} key={index}>
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-6">
            <div className={`jobContact ${styles.jobContact}`}>
              <h3>TELL US A BIT ABOUT YOURSELF</h3>
              <Form phone resume subscription />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
