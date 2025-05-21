import React from "react";
import styles from "./OfficeLocation.module.css";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { emailPrimary, phonePK, phoneUS } from "../../../PhoneNumber";
const OfficeLoc = () => {
  const PhoneLink = ({ children }) => {
    return (
      <a href={`tel:${children}`}>
        <p className={styles.phone}>
          <span className={styles.icon}>
            <FiPhone />
          </span>
          <span className={styles.cityAdress}>{children}</span>
        </p>
      </a>
    );
  };

  const EmailLink = ({ children }) => {
    return (
      <a href={`mailto:${children}`} className={styles.email}>
        <span className={styles.icon}>
          <FiMail />
        </span>
        {children}
      </a>
    );
  };

  return (
    <div className={styles.officeLoc}>
      <div className="container">
        <div className={styles.OfficeLocInner}>
          <div className={styles.top}>
            <h3>Office Locations</h3>
          </div>
          <div className="row flex gap-10">
            <div className={`col-md-4 ${styles.location}`}>
              <div className={styles.locationInner}>
                <div className={styles.locationContent}>
                  <h4 className={styles.country}>UK</h4>
                  <a
                    href="https://www.google.co.uk/maps/place/Signify+Technology+Group/@51.5150899,-0.1138847,14z/data=!3m1!5s0x48761cb29e1550a5:0x312ae52af5f78d74!4m10!1m2!2m1!1sCity+of+London+technology+office!3m6!1s0x4876034aca364fbd:0x40890e539ab72a95!8m2!3d51.5165554!4d-0.0885207!15sCiBDaXR5IG9mIExvbmRvbiB0ZWNobm9sb2d5IG9mZmljZZIBCXJlY3J1aXRlcqoBhwEKCC9tLzAxX2M0CggvbS8wMW4zMgoIL20vMDRqcGwKCC9tLzA3YzF2EAEqFSIRdGVjaG5vbG9neSBvZmZpY2UoADIeEAEiGvO1Jhu4O3u0oztRGj2vau_SdPk6-skFzsdNMiQQAiIgY2l0eSBvZiBsb25kb24gdGVjaG5vbG9neSBvZmZpY2XgAQA!16s%2Fg%2F11c1tqppjh?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className={styles.city}>
                      <span className={styles.icon}>
                        <FiMapPin />
                      </span>
                      <span className={styles.detailBox}>
                      1st Floor, 3 Moorgate Pl, 
                        <span className={styles.cityAdress}>
                        London EC2R 6EA, 
                        </span>
                        <span className={styles.cityAdress}>United Kingdom</span>
                      </span>
                    </p>
                  </a>
                  <PhoneLink>{phoneUS}</PhoneLink>
                  <EmailLink>{emailPrimary}</EmailLink>
                </div>
              </div>
            </div>
          
            <div className={`col-md-4 ${styles.location}`}>
              <div className={styles.locationInner}>
                <div className={styles.locationContent}>
                  <h4 className={styles.country}>Pakistan</h4>
                  <a
                    href="https://www.google.co.uk/maps/place/Johar+Town,+Lahore,+Pakistan/@31.4645821,74.2563626,14z/data=!3m1!4b1!4m6!3m5!1s0x3919015f82b0b86f:0x2fcaf9fdeb3d02e6!8m2!3d31.469693!4d74.2728461!16zL20vMGdnNDlt?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                    rel="noreferrer"
                  >
                    <p className={styles.city}>
                      <span className={styles.icon}>
                        <FiMapPin />
                      </span>
                      <span className={styles.detailBox}>
                   Takwa Plaza, Building 8,
                        <span className={styles.cityAdress}>
                          F Block, Johar Town
                        </span>
                        <span className={styles.cityAdress}>
                          Lahore, Pakistan.
                        </span>
                      </span>
                    </p>
                  </a>
                  <PhoneLink>{phonePK}</PhoneLink>
                  <EmailLink>{emailPrimary}</EmailLink>
                </div>
              </div>
            </div>
              <div className={`col-md-4 ${styles.location}`}>
              <div className={styles.locationInner}>
                <div className={styles.locationContent}>
                  <h4 className={styles.country}>Pakistan</h4>
              <p >Coming Soon in Islamabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLoc;
