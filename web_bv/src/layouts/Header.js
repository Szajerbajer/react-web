import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/beach1.jpg";
import img2 from "../images/beach2.jpg";
import img3 from "../images/beach3.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={img1} alt="volleyball" />}
        />
        <Route
          path="/contact"
          render={() => <img src={img2} alt="volleyball" />}
        />
        <Route
          path="/product"
          render={() => <img src={img3} alt="volleyball" />}
        />
        <Route render={() => <img src={img1} alt="volleyball" />} />
      </Switch>
    </>
  );
};

export default Header;
