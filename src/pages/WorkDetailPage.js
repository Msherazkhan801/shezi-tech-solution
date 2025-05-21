import React from "react";
import DocumentMeta from "react-document-meta";
import { useHistory } from "react-router-dom";
import WorkDetail from "../components/WorkDetail";
import WorkData from "../WorkData";

const WorkDetailPage = () => {
  const history = useHistory();
  const slug = history.location.pathname.split("/")[2];
  let respData = WorkData.find((work) => work.slug === slug);
  const meta = {
    canonical: `https://www.SheziTechSolution.co/work/${respData.slug}`,
  };
  return (
    <DocumentMeta {...meta}>
      <WorkDetail />
    </DocumentMeta>
  );
};

export default WorkDetailPage;
