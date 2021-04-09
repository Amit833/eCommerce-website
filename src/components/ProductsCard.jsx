import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToBasket } from "../actions/ProductActions";

export const ProductsCard = ({ item }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ProductsReducer.items);
  return (
    <div className="col-md-4 col-sm-12 ">
      <div class="card">
        <img src={item.image} class="card-img-top" alt={item.image} />

        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price: ${item.price}</p>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => dispatch(addItemToBasket(item))}
              type="button"
              class="btn "
            >
              Add To Cart
            </button>
            <Link to={{ pathname: "/details", state: item }}>
              <button type="button" class="btn">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
