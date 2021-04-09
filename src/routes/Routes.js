import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Home } from "../components/Home";
import { About } from "../components/About"
import { Details } from "../components/Details";
import { Basket } from "../components/Basket";
import { CheckOut } from "../components/CheckOut";
import { Footer } from "../components/Footer";
import { SignUpForm } from "../components/SignUpForm";
import { SignUpConfirmation } from "../components/SignUpConfirmation";
import { SignInForm } from "../components/SignInForm";

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/details" component={Details} />
          <Route path="/basket" component={Basket} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/signupconfirmation" component={SignUpConfirmation} />
          <Route path="/signin" component={SignInForm} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};
