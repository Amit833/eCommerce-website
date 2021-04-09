import React from "react";
import { Link } from "react-router-dom";
import { TiArrowLeftOutline } from "react-icons/ti";
import box from "../assets/box.jpg";

export const About = (props) => {
  

  return (
    <>
     
     
     <div className="confirmation-box">
      <div className="empty_basket_container">
        <div className="img_container">
          <img src={box} alt="empty" />
        </div>

       
        <div>
          <p>We call our warehouse a logistics center or “fulfillment center”. This is where the complete “fulfillment”, ie the processing of customer orders, takes place from the first to the last step: Goods are delivered by the manufacturers and sent directly to the customer.</p>
        </div>
        <div className="btn_goback_container">
          <Link to="/">
            <button>
              <TiArrowLeftOutline className="mb-1" />
            Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};
