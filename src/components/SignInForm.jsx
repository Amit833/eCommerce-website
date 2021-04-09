import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { SignInConfirmation } from "./SignInConfirmation";

export const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const allUsersInformation = useSelector(
    (state) => state.authenticationReducer.users
  );

  const [formSubmitted, setFormSubmitted] = useState(false);

  const toSubmit = (data) => {
    const targetUser = allUsersInformation.filter(
      (user) => user.email === data.email && user.password === data.password
    )[0]; // why [0]?
    console.log("targetUser=", targetUser);

    targetUser ? setFormSubmitted(true) : alert("signin failed!Try Again!");
  };

  return formSubmitted ? (
    <SignInConfirmation state={setFormSubmitted} />
  ) : (
    <form className="signIn" onSubmit={handleSubmit(toSubmit)}>
      <div>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          ref={register({ required: true })}
          placeholder="enter your email"
        />
        {errors.email && <small>wrong email address!</small>}
      </div>

      <div>
        <label htmlFor="password">password:</label>
        <input
          type="text"
          name="password"
          ref={register({ required: true })}
          placeholder="enter your password"
        />
        {errors.password && <small>wrong password!</small>}
      </div>

      <div className="buttonContainer">
        <button>submit</button>
      </div>
    </form>
  );
};
