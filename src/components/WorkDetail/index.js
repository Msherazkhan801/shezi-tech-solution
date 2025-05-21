import React from "react";
import styles from "./WorkDetail.module.css";
import workData from "../../WorkData";
import Work from "../Work";
import { Link, useParams } from "react-router-dom";

const WorkDetail = () => {
  const { slug } = useParams();

  let respData = workData.find((work) => work.slug === slug);

  return (
    <>
      <div className={styles.workDetailInner}>
        <div className={`text-center ${styles.workDetailCover}`}>
          <img
            src={`/assets/images/${respData.desc.image}`}
            alt="detail-cover"
          />
        </div>

        <div className={styles.cannaRiver}>
          <div className="container">
            <h1 className="text-center">{respData.title}</h1>
            <div className="row">
              <div className={`col-lg-8 pr-lg-5 ${styles.riverLeft}`}>
                <h3>The brief</h3>
                <p>{respData.desc.overview}</p>
              </div>
              <div className={`col-lg-4 ${styles.riverRight}`}>
                <ul className="list-unstyled pl-0">
                  <li>
                    <p className="orange">industry</p>
                    <p>{respData.desc.industry}</p>
                  </li>
                  <li>
                    <p className="orange">location</p>
                    <p>{respData.desc.location}</p>
                  </li>
                  <li>
                    <p className="orange">Service</p>
                    <p>{respData.desc.service}</p>
                  </li>
                  <li>
                    <p className="orange">visit</p>
                    <p>
                      <a
                        href={`${respData.desc.website}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {respData.desc.website}
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quality */}
        <div className={styles.qualityWrapper}>
          <div className="container">
            <div className={`text-center ${styles.qualityImage}`}>
              <img
                src={`/assets/images/${respData.desc.image2}`}
                alt="quality-cover"
              />
            </div>
          </div>
        </div>

        {/* Objective */}
        <div className={styles.objectiveWrapper}>
          <div className="container">
            <div className="row align-item-center">
              <div className="col-lg-7">
                <div className={styles.objective}>
                  <h3>objective</h3>
                  <p>{respData.desc.objective}</p>
                </div>
                <div className={styles.problematic}>
                  <h3>Solution</h3>
                  <p>{respData.desc.Solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Best Selling */}
        {respData.desc.image3 && respData.desc.image4 && (
          <div className={styles.bestSelling}>
            <div className="container">
              <div className={`col-12 ${styles.top}`}>
                <p>
                  We have made the remaining pages of the website simpler and
                  highlighted them with rich content.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <img
                    src={`/assets/images/${respData.desc.image3}`}
                    alt="best-selling"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src={`/assets/images/${respData.desc.image4}`}
                    alt="best-selling"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gets Cracking */}
        <div className={styles.cracking}>
          <div className="container">
            <div className={` ${styles.innerCracking}`}>
              <h3>Lets Get Cracking</h3>

              <div className={styles.verticalLine}></div>
              <Link to="/contact-us" className="btn btn-primary">
                start your project
              </Link>
            </div>
          </div>
        </div>

        {/* Browse work */}
        <div className={styles.browseWork}>
          <div className="container">
            <h2>browse other work</h2>
          </div>
          <Work />
        </div>
      </div>
    </>
  );
  // const { workid } = props;
  // const html = DetailContent(workid);
  // return <div className={styles.workDetailWrapper}>{html}</div>;
};

export default WorkDetail;
