import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import Work from "../components/Work";
import Websolutions from "../components/Websolutions";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import LatestTechnologies from "../components/LatestTechnologies";
import DocumentMeta from "react-document-meta";
import { Link } from "react-router-dom";

const Home = () => {
  const meta = {
    title: "Website development services | Shezi Tech Solution.",
    description:
      "Shezi Tech Solution. is a leading IT company, that helps businesses around the globe to grow with innovative custom web designs, and website development services",
    canonical: "https://www.SheziTechSolution.co",
    meta: {
      name: {
        keywords:
          "website development,outsource website development,outsource development,web development,web design company,web development company,website development company,website design company,IT company,web design and development",
        title: "Website development services | Shezi Tech Solution.",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <Hero />
      <WhatWeDo />
      <Link to="/work">
        <Work />
      </Link>
      <Websolutions />
      <Testimonials />
      <Clients />
      <LatestTechnologies />
    </DocumentMeta>
  );
};

export default Home;
