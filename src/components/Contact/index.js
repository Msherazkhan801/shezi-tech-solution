import React from "react";
import { Link } from "react-router-dom";
import { emailPrimary, phoneUS } from "../../PhoneNumber";
import Form from "../Form";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      {window.location.href.indexOf("contact-us") > -1 ? (
        ""
      ) : (
        <div className={`contactWrapper ${styles.contactWrapper}`}>
          <div className={`container`}>
            <div className={`row`}>
              <div className={`col-lg-6 pr-4 pt-md-4 ${styles.contactText}`}>
                <h2>Let's Have a "PROJECT DISCUSSION</h2>
                <p>
                Shezi Tech Solution is a trusted and dynamic tech company based in Pakistan, 
                committed to delivering high-quality Agile IT services. From custom web and mobile
                 development to digital branding and content marketing, we help businesses grow with
                  innovative and scalable solutions.


                </p>
                <p className={styles.contactNumber}>
                  <a href={`tel:${phoneUS}`}>{phoneUS}</a>
                </p>
                <p className={styles.contactEmail}>
                  <a href={`mailto:${emailPrimary}`}>{emailPrimary}</a>
                </p>
                <p className={styles.contactLink}>
                  <Link to="/contact-us">Get in touch</Link>
                </p>
              </div>
              <div
                className={`col-lg-6 pl-lg-5 d-flex align-item-center justify-content-center`}
              >
                <Form lookingFor business />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
