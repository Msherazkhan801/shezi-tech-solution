import React from "react";
import WorkListing from "../components/WorkListing";
import DocumentMeta from "react-document-meta";

const WorkListingPage = () => {
  const meta = {
    title: "Website design & development | Shezi Tech Solution.",
    description:
      "Best website development services provided to customers. How SheziTechSolution provide technology-driven web designs and web development services for customers",
    canonical: "https://www.SheziTechSolution.co/work",
    meta: {
      name: {
        keywords:
          "it company, it companies near me, it services company, outsourced IT services, website development services, web development, outsource web development, website development,web design company, web application development, web design, and development, web development services",
        title: "Website design & development | Shezi Tech Solution.",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <WorkListing />
    </DocumentMeta>
  );
};

export default WorkListingPage;
