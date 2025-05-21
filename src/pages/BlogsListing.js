import React from "react";
import DocumentMeta from "react-document-meta";
import PaginatedBlogs from "../components/PaginatedBlogs";

const BlogsListing = () => {
  const meta = {
    title: "Blogs | Shezi Tech Solution.",
    canonical: "https://www.SheziTechSolution.co/blogs",
  };

  return (
    <DocumentMeta {...meta}>
      <div className="container blog-listing-page">
        <div
          className="d-flex justify-content-center"
          style={{ marginBottom: "2em" }}
        >
          <h2 className="text-center">
            Latest technology
            <br />
            insights
          </h2>
        </div>
        <PaginatedBlogs itemsPerPage={6}></PaginatedBlogs>
      </div>
    </DocumentMeta>
  );
};

export default BlogsListing;
