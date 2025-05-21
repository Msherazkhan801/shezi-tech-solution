import React from "react";
import ContactForm from "../components/ContactUs/ContactForm";
import OfficeLoc from "../components/ContactUs/OfficeLocation";
import ViewWork from "../components/ContactUs/ViewWork";
import DocumentMeta from "react-document-meta";

const ContactUs = () => {
  const meta = {
    title: "Contact us - Shezi Tech Solution",
    description:
      "Contact Shezi Tech Solution. for the best web design, web app development, and website development services. Get consultancy Via phone, email, and online meeting.",
    canonical: "https://www.shezitechsolution.co/contact-us",
    meta: {
      name: {
        keywords:
          "web design services, web development, web design firms, best web designer, eCommerce web designer, agency web design, web designing near me, website programming, web page development, custom web design, website development cost, web design company, web development",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <div className="contactUsPage">
        <div className="container">
          <h1 className="text-center mb-2">Contact us</h1>
          <p className="text-center">How can we help you?</p>
        </div>
        <ContactForm />
        <OfficeLoc />
        <ViewWork />
      </div>
    </DocumentMeta>
  );
};

export default ContactUs;
