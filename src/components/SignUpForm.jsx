import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addUser } from "../actions/authenticationAction";
import { SignUpConfirmation } from "./SignUpConfirmation";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const allUsersArray = useSelector(
    (state) => state.authenticationReducer.users
  );

  const toSubmit = (data) => {
    dispatch(addUser({ data })); // this data is form data .we dispatch it to addUser action

    const targetUser = allUsersArray.find((elem) => elem.email === data.email);
    if (targetUser) return alert("User already exits!");

    setFormSubmitted(true);
  };

  return formSubmitted ? (
    <SignUpConfirmation state={setFormSubmitted} />
  ) : (
    <form className="myForm" onSubmit={handleSubmit(toSubmit)}>
      <div className="firstName">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="adam"
          ref={register({ required: true })}
        />
        {errors.firstName && <small>First Name is Requerd!</small>}
      </div>

      <div className="lastName">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="gil"
          ref={register({ required: true })}
        />
        {errors.lastName && <small>Last Name is Requerd!</small>}
      </div>

      <div className="email">
        <label htmlFor="email">Email Address:</label>
        <input
          type="text"
          placeholder="adam@gmail.com"
          name="email"
          ref={register}
        />
        {errors.email && <small>Email address is Requerd!</small>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register({
            required: true, // you must fill password
            minLength: 4,
          })}
        />
        {errors.password && <small>Password Requerd!</small>}
      </div>

      <div>
        <label htmlFor="confirmPassword"> Confirm Password:</label>
        <input
          type="password"
          placeholder="comfirm password"
          name="password"
          ref={register({
            required: true, // you must fill password
            minLength: 4,
          })}
        />
        {errors.password && <small>Password Requerd!</small>}
      </div>

      <div className="streetName">
        <label htmlFor="streetName">Street Name</label>
        <input
          type="text"
          name="streetName"
          ref={register({ required: true })}
        />
        {errors.streetName && <small>Street Name is Requerd!</small>}
      </div>

      <div className="city">
        <label htmlFor="city">City Name</label>
        <input type="text" name="city" ref={register({ required: true })} />
        {errors.city && <small>City Name is Requerd!</small>}
      </div>

      <div className="postalCode">
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          ref={register({ required: true })}
        />
        {errors.postalCode && <small>Postal Code is Requerd!</small>}
      </div>

      <div className="mobile">
        <label htmlFor="mobile">Mobile/Telephone</label>
        <input type="text" name="mobile" ref={register({ required: true })} />
        {errors.mobile && <small>Mobile/Telephone is Requerd!</small>}
      </div>

      <div className="userAgreement">
        <label htmlFor="useragreement">User agreement</label>
        <input
          type="radio"
          name="useragreement"
          ref={register({ required: true })}
        />
        {errors.useragreement && (
          <small>please agree to the user agreement!</small>
        )}
      </div>

      <div className="submit">
        <input type="submit" />
      </div>
    </form>
  );
};
