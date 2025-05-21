import React from "react";
import Technologies from "../components/Technologies";
import DocumentMeta from "react-document-meta";

const TechnologiesPage = () => {
  const meta = {
    title: "Best web design company | Technologies | Shezi Tech Solution.",
    description:
      "As a web design company, using front-end and back-end technologies to " +
      "serve startups and businesses for getting the best web design and development services. " +
      "We hold high standards when it comes to web design and development by using hi-end " +
      "technologies to serve startups and businesses. " +
      "Web Sailors is the Best web design and development services provider company that holds high " +
      "standards by using hi-end technologies to serve startups and businesses.",
    canonical: "https://www.SheziTechSolution.co/technologies",
    meta: {
      name: {
        keywords:
          "responsive web design, responsive design, web design company, web designer, web development company, web page design, website design company, website development company, web design agency, homepage design, top it companies",
      },
    },
  };
  return (
    <DocumentMeta {...meta}>
      <Technologies />
    </DocumentMeta>
  );
};

export default TechnologiesPage;
