import React from "react";
import { Link } from "react-router-dom";
import { TiArrowLeftOutline } from "react-icons/ti";

export const Details = (props) => {
  const { item } = props.location;
  console.log("location", props.location); //inside the props.location.state we have all of our item informations

  return (
    <>
      <div>
        <Link to="/">
          <button type="button" className="btn btn-danger ms-5 mt-5">
            <TiArrowLeftOutline className="mb-1" />
            Back To Home
          </button>
        </Link>
      </div>

      <div className="card mt-5 ms-5 me-5 mb-5">
        <div className="row g-0">
          <div className="col-md-4 mt-3 mb-3 d-flex justify-content-center">
            <img
              src={props.location.state.image}
              alt={props.location.state.image}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.location.state.name}</h5>
              <p className="card-text">{props.location.state.desc}</p>
              <h5 className="card-title">
                Price: ${props.location.state.price}
              </h5>
              <p className="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
