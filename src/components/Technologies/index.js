import React from "react";
import styles from "./Technologies.module.css";
import technologiesData from "../../technologiesData";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const Technologies = () => {

    const { state } = useLocation()


  useEffect(() => {
    if (state)
 {
        document.getElementsByClassName("techWraper")[state.id-1].scrollIntoView();
      }
    }, [state])

  return (
    <div className={styles.technlogiesWrapper}>
      <div className="pageTopSection">
        <div className="container">
          <h1>TECHNOLOGIES</h1>
          <p>
            We offer only well-recognized and time-tested technologies to bring
            advancement and also provide all kinds of technical support to any
            of your business goals.
          </p>
        </div>
      </div>
      <div className="container">
        {technologiesData.map((category, index) => {
          return (
            <div className={`techWraper ${styles.technologies}`} key={index}>
              <h2>{category.title}</h2>
              <p>{category.desc}</p>
              <div className={styles.technologiesList}>
                {category.tech.map((tech, index) => {
                  return (
                    <div className={styles.tech} key={index}>
                      <img src={tech.src} alt={tech.alt} />
                      <h4>{tech.title}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
