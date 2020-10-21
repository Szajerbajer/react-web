import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";

const Blog = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />;
        <Route path="/product" exact component={ProductPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Blog;
