import React from "react";
import styles from "./Latest.module.css";
import Blogs from "../../blogs";
import BlogCard from "../BlogCard/BlogCard";

const RelatedBlog = ({ related }) => {
  return (
    <div className={`container`}>
      <div className={`d-flex justify-content-center ${styles.titleContainer}`}>
        <h2>You may also Read</h2>
      </div>
      <div className={`row d-flex justify-content-center`}>
        {Blogs.filter((item) => related.includes(item.id)).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlog;
