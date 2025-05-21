import React from "react";
import Form from "../../Form";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={`mb-lg-5 mb-1 mb-md-4 ${styles.form}`}>
      <div className="container">
        <div className={styles.ContactFormInner}>
         <Form phone lookingFor business   />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
