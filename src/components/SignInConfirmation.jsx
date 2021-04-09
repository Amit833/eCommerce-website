import React from "react";
import { Link } from "react-router-dom";

export const SignInConfirmation = ({ state }) => {
  return (
    <div>
      <h2> SignIn was successful!</h2>
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};
