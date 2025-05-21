import React from "react";
import Hoc from "../components/HOC/HOC";
import Team from "../components/Team";
import DocumentMeta from "react-document-meta";

const TeamPage = () => {
  const meta = {
    title: "Web design and development | Team | SheziTechSolution",
    description:
      "SheziTechSolution have an expert team in web design and development. As a web design company provides outstanding services to clients to upgrade their businesses.",
    canonical: "https://www.SheziTechSolution.co/team",
    meta: {
      name: {
        keywords:
          "web design services, web development, web design firms, best web designer, eCommerce web designer, agency web design, web designing near me, website programming, web page development, custom web design, website development cost, web design company, web development",
      },
    },
  };
  return (
    <DocumentMeta {...meta}>
      <Team />
    </DocumentMeta>
  );
};

export default TeamPage;
