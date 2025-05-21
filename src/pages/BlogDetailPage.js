import React from "react";
import { useHistory } from "react-router-dom";
import Blogs from "../blogs";
import BlogDetail from "../components/BlogDetail";
import DocumentMeta from "react-document-meta";

const BlogDetailPage = () => {
  const history = useHistory();
  const id = history.location.pathname.split("/")[2];
  let blogData = Blogs.find((blog) => blog.slug === id);

  const meta = {
    title: blogData.title,
    description: blogData.metadescription,
    canonical: `https://www.SheziTechSolution.co/blogs/${blogData.slug}`,
  };

  if (blogData.hasOwnProperty("metakeywords")) {
    meta["meta"] = {
      name: {
        keywords: blogData.metakeywords,
      },
    };
  }

  return (
    <DocumentMeta {...meta}>
      <BlogDetail />
    </DocumentMeta>
  );
};

export default BlogDetailPage;
