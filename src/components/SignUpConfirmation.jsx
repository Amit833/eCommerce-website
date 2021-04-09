import React from "react";
import { Link } from "react-router-dom";

export const SignUpConfirmation = () => {
  return (
    <>
      <div>
        <h1>Your Sign Up is Successful! Please Check Your Email. </h1>
      </div>
      <Link to="/">
        <button>Contitue Shopping</button>
      </Link>
    </>
  );
};
