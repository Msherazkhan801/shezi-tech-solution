import React from "react";
import { Route, Switch } from "react-router-dom";
import BlogDetailPage from "../pages/BlogDetailPage";
import BlogsListing from "../pages/BlogsListing";
import Careers from "../pages/Careers";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import JobDetailPage from "../pages/JobDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import TechnologiesPage from "../pages/TechnologiesPage";
import WhoWeAre from "../pages/WhoWeAre";
import WorkDetailPage from "../pages/WorkDetailPage";
import WorkListingPage from "../pages/WorkListingPage";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/who-we-are">
        <WhoWeAre />
      </Route>
      <Route exact path="/contact-us">
        <ContactUs />
      </Route>
      <Route exact path="/blogs">
        <BlogsListing />
      </Route>
      <Route exact path="/work">
        <WorkListingPage />
      </Route>
      <Route exact path="/careers">
        <Careers />
      </Route>
      <Route exact path="/technologies">
        <TechnologiesPage />
      </Route>
      <Route exact path="/work/:slug">
        <WorkDetailPage />
      </Route>
      <Route exact path="/careers/:slug">
        <JobDetailPage />
      </Route>
      <Route exact path="/blogs/:slug">
        <BlogDetailPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
