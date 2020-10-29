import React from "react";
import {Route} from 'react-router-dom';
import ProductListPage from "../pages/ProductListPage";
import "../styles/Footer.css"

const Footer = () => {
  return (
  <div>
    <h2>Footer</h2>
    <Route path="/" exact render={() => {
      return (
        <p>Jesteś na stronie <span>głównej</span></p>
      )
    }}/>
    <Route path="/:page" exact render={(props) => {
      return (
      <p>Jesteś na stronie <span>{props.match.params.page}</span></p>
      )
    }}/>
    <Route path="/:page/:idProduct" exact render={(props) => {
      return (
      <p>Jesteś na stronie <span>{props.match.params.page}</span></p>
      )
    }}/>
    </div>)
};

export default Footer;
