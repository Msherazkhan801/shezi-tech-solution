import React from "react";
import Jobs from "../components/Jobs";
import DocumentMeta from "react-document-meta";

const Careers = () => {
  const meta = {
    title: "Web design and development | Career | Shezi Tech Solution.",
    description:
      "Build your career with the best web design and development company.",
    canonical: "https://www.SheziTechSolution.co/careers",
    meta: {
      name: {
        keywords:
          "web developer jobs, front end developer jobs, entry level web developer jobs, front end web developer jobs, full stack web developer jobs, web dev jobs, entry level front end developer jobs",
      },
    },
  };
  return (
    <DocumentMeta {...meta}>
      <Jobs />
    </DocumentMeta>
  );
};

export default Careers;
