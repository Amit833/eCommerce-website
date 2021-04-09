import React from "react";
import { NavBar } from "./NavBar";
import { Products } from "./Products";
import { Link } from "react-router-dom";
import { SignInForm } from "./SignInForm";

export const Home = () => {
  return (
    <div>
      <Products />
    </div>
  );
};
