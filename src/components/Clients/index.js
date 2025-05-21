import React from "react";
import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className="container">
        <div className={`row align-items-center`}>
          <div className={`col-lg-6 col-xl-5`}>
            <h2>Clients WE’VE WORKED WITH</h2>
          </div>
          <div className={`col-xl-7 col-lg-6`}>
            <div className={styles.clientsList}>
              <div className={styles.client}>
                <img
                  src="assets/images/clients/client1.jpg"
                  alt="client"
                  height="auto"
                  width="100%"
                />
              </div>
              <div className={styles.client}>
                <img
                  src="assets/images/clients/client2.jpg"
                  alt="client"
                  height="auto"
                  width="100%"
                />
              </div>
              <div className={styles.client}>
                <img
                  src="assets/images/clients/client3.jpg"
                  alt="client"
                  height="auto"
                  width="100%"
                />
              </div>
              <div className={styles.client}>
                <img
                  src="assets/images/clients/client4.jpg"
                  alt="client"
                  height="auto"
                  width="100%"
                />
              </div>
              <div className={styles.client}>
                <img
                  src="assets/images/clients/client5.jpg"
                  alt="client"
                  height="auto"
                  width="100%"
                />
              </div>
              <div className={styles.client}>
                <img
                  src="assets/images/clients/client6.jpg"
                  alt="client"
                  height="auto"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
