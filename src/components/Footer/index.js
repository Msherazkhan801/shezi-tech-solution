import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { emailPrimary, phonePK, phoneUS } from "../../PhoneNumber";

const Footer = () => {
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
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const facebook = <FontAwesomeIcon icon={faFacebookF} />;
  const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          {/* <div className={styles.loc}>
            <h4>Office Location</h4>
            <a
              href="https://www.google.com/maps/place/5800+Ambler+Dr+Suite+119,+Mississauga,+ON+L4W+4J4,+Canada/@43.6429224,-79.6460878,17z/data=!3m1!4b1!4m5!3m4!1s0x882b38b5b5bfffff:0xac6142731de787a6!8m2!3d43.6429224!4d-79.6460878"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.city}>
                <span className={styles.icon}>
                  <FiMapPin />
                </span>
                <span>
                  5800 Ambler Drive, Unit # 119, Mississauga, ON, L4W-4J4
                </span>
              </p>
            </a>
            <a href={`tel:${phoneUS}`}>
              <p className={styles.phone}>
                <span className={styles.icon}>
                  <FiPhone />
                </span>
                <span className={styles.cityAdress}>{phoneUS}</span>
              </p>
            </a>
          </div> */}
          <div className={styles.locationContent}>
          <h4>Office Location</h4>
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
          <div className={styles.footerLinks}>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/knowledgethinker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {facebook}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {linkedin}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com//"
                  target="_blank"
                  rel="noreferrer"
                >
                  {instagram}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {twitter}
                </a>
              </li>
            </ul>
            <p className={styles.copyRights}>
              © 2024 <Link to="/">Shezi Tech Solution.</Link> - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
