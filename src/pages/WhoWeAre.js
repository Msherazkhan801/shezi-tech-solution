import React from "react";
import HowWeDo from "../components/HowWeDo";
import Audience from "../components/WhoWeAre/Audience";
import MeetTeam from "../components/WhoWeAre/MeetTeam";
import Ideation from "../components/WhoWeAre/Ideation";
import FullClients from "../components/WhoWeAre/FullClients";
import BeParts from "../components/WhoWeAre/BeParts";
import DocumentMeta from "react-document-meta";

const WhoWeAre = () => {
  const meta = {
    title: "Web design company | Shezi Tech Solution.",
    description:
      "We are a growing IT solutions provider company, that eases businesses to grow with the demand for web design, website development, and  IT support and management.",
    canonical: "https://www.SheziTechSolution.co/who-we-are",
    meta: {
      name: {
        keywords:
          "it company,it companies near me,it services company,it outsource,web development,website development, website development services,web development company,website development company,web design company",
        title: "Web design company | Shezi Tech Solution.",
      },
    },
  };
  return (
    <DocumentMeta {...meta}>
      <Audience />
      <MeetTeam />
      <Ideation />
      <HowWeDo />
      <FullClients />
      <BeParts />
    </DocumentMeta>
  );
};

export default WhoWeAre;
