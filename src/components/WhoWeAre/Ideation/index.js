import React from "react";
import styles from "./Ideation.module.css";

const Ideation = () => {
  return (
    <div className={styles.Ideation}>
      <div className="container">
        <div className={styles.ideationInner}>
          <nav className={styles.siteTabs}>
            <div
              className="nav nav-tabs flex-column"
              id="nav-tab"
              role="tablist"
            >
              <a
                className="nav-item nav-link active"
                id="nav-ideation-tab"
                data-toggle="tab"
                href="#nav-ideation"
                role="tab"
                aria-controls="nav-ideation"
                aria-selected="true"
              >
                STRATEGIZING AND EVALUATION
              </a>
              <a
                className="nav-item nav-link"
                id="nav-design-tab"
                data-toggle="tab"
                href="#nav-design"
                role="tab"
                aria-controls="nav-design"
                aria-selected="false"
              >
                WEB/APP DESIGN AND DEVELOPMENT
              </a>
              <a
                className="nav-item nav-link"
                id="nav-seo-tab"
                data-toggle="tab"
                href="#nav-seo"
                role="tab"
                aria-controls="nav-seo"
                aria-selected="false"
              >
                SEO AND MARKETING
              </a>
              <a
                className="nav-item nav-link"
                id="nav-support-tab"
                data-toggle="tab"
                href="#nav-support"
                role="tab"
                aria-controls="nav-support"
                aria-selected="false"
              >
                SUPPORT AND MANAGEMENT
              </a>
            </div>
          </nav>
          <div
            className={`tab-content ${styles.ideationTabContane}`}
            id="nav-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="nav-ideation"
              role="tabpanel"
              aria-labelledby="nav-ideation-tab"
            >
              <p>
                After the initial meeting with the client, we develop a detailed research strategy and carry out a thorough analysis of the market where the project will  be implemented. Our next step is to develop a solid strategy that meets all objectives set by our clients. We work closely with our clients and keep them updated at every stage of the project.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-design"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              <p>
                The module is handed over to our team of Devs, and they are instructed from every dimension. Our team consists of members that are highly competent and have years of expertise in their particular fields, designing and developing everything to suit client needs while keeping deliverability in mind. So that we can arrive at the goal of "Success."
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-seo"
              role="tabpanel"
              aria-labelledby="nav-seo-tab"
            >
              <p>
                We integrate SEO and marketing seamlessly with our strategy, design, and support phases. Our SEO experts enhance your web presence and ensure higher visibility and engagement. We also develop targeted marketing campaigns that align with your business goals. Our approach drives traffic and boosts conversions that make your project a success. We monitor performance and adjust strategies as well to maximize positive results.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-support"
              role="tabpanel"
              aria-labelledby="nav-support-tab"
            >
              <p>
                We are fully capable of taking your project beyond your expectations. We don't stop unless the project has been completed, tested, deployed, and delivered in the best possible way. We are always concerned about the well-being and the success of our clients and try our best to keep it functioning and also check if there is an error at any end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideation;
