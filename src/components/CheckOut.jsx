import React from "react";
import { Link } from "react-router-dom";
import cnf from "../assets/box1.jpg";

export const CheckOut = () => {
  return (
    <div className="confirmation-box">
      <div className="empty_basket_container">
        <div className="img_container">
          <img src={cnf} alt="empty" />
        </div>

        <div>
          <h2>Your Orders Confirmed!</h2>
        </div>
        <div>
          <p>Thanks for shopping with us!</p>
        </div>
        <div className="btn_goback_container">
          <Link to="/">
            <button>Shope More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

