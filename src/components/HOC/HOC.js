import React from "react";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";

const Hoc = (props) => {
  return (
    <>
      {props.children}
      <Contact />
    </>
  );
};

export default Hoc;
