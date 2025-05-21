import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Page Not Found</h1>
        <Link to={"/"}>
          <p style={{ color: "blue", textDecoration: "underline" }}>
            Go to homepage?
          </p>
        </Link>
      </div>
      <Footer />
    </>
  );
}
