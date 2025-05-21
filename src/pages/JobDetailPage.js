import React from "react";
import { useHistory } from "react-router-dom";
import JobDetail from "../components/JobDetail";
import JobsData from "../JobsData";
import DocumentMeta from "react-document-meta";

const JobDetailPage = () => {
  const history = useHistory();
  const slug = history.location.pathname.split("/")[2];
  let detailContent = JobsData.find((job) => job.slug === slug);

  const meta = {
    canonical: `https://www.SheziTechSolution.co/careers/${detailContent.slug}`,
  };

  return (
    <DocumentMeta {...meta}>
      <JobDetail />
    </DocumentMeta>
  );
};

export default JobDetailPage;
