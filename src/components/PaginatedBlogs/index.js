import gsap from "gsap";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import ReactPaginate from "react-paginate";
import Blogs from "../../blogs";
import BlogCard from "../BlogCard/BlogCard";

export default function PaginatedBlogs({ itemsPerPage }) {
  const cards = useRef([]);
  const root = useRef();

  const [currentItems, setCurrentItems] = useState(Blogs);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useLayoutEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(Blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(Blogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Blogs.length;

    setItemOffset(newOffset);
  };

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
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={root} className="row">
      {currentItems &&
        currentItems.map((blog, index) => (
          <BlogCard
            key={index}
            addRef={(element) => cards.current.push(element)}
            blog={blog}
            ms={150 * index}
          />
        ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
