import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Latest.module.css";
import gsap from "gsap";
import BlogCard from "../BlogCard/BlogCard";
import Blogs from "../../blogs";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LatestTechnologies = (props) => {
  const homeBlogs = Blogs.slice(0, 3);

  const cards = useRef([]);
  const root = useRef();

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 767px)", () => {
      gsap.fromTo(
        cards.current,
        { rotationY: -270, opacity: 0 },
        {
          rotationY: -360,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          ease: "Liner",
          scrollTrigger: {
            trigger: root.current,
          },
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      className={
        window.location.href.indexOf("blogs") > -1
          ? `pb-5 mb-3 ${styles.latestTechnologies}`
          : styles.latestTechnologies
      }
      style={{ position: "relative" }}
    >
      <div className={`container`}>
        <h2>
          Latest technology<br></br> insights
        </h2>
        <div ref={root} className={`row`}>
          {homeBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              blog={blog}
              addRef={(element) => cards.current.push(element)}
            />
          ))}
        </div>
        <div className="row d-flex justify-content-center">
          <Link className={`btn btn-primary ${styles.viewAll}`} to="/blogs">
            view all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestTechnologies;
