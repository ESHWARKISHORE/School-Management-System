import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
//------------------------Main Pages------------------------------------//
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/Main Pages/LoginPage/LoginPage";
import HomePage from "views/Main Pages/HomePage/HomePage";

//-------------------------Admin Pages---------------------------------//
import AdminLoginPage from "views/AdminPage/AdminLoginPage/AdminLoginPage"
import AdminHomepage from "views/AdminPage/HomePage/HomePage";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    {/* //----------------------------------Main Pages------------------------------------- */}
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/abc" component={Components}/>
      {/* ------------------------------Admin Page-------------------------------------- */}
      <Route path="/AdminLoginPage" component={AdminLoginPage} />
      <Route path="/AdminHomePage" component={AdminHomepage} />
      {/* -------------------------------Basic Page---------------------------------------- */}
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
