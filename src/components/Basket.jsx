import { useSelector, useDispatch } from "react-redux";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { TiArrowLeftOutline } from "react-icons/ti";

import {
  deleteItem,
  addItemToBasket,
  decreaseItem,
  deleteAllItem,
} from "../actions/ProductActions";
import { Link } from "react-router-dom";

export const Basket = () => {
  const state = useSelector((state) => state.ProductsReducer.items);
  const dispatch = useDispatch();

  const subTotal = state.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ); // (acc,item) here item is indivedual item of items. we loop throw the items because of reduce method

  console.log("subTotal", subTotal);

  const itemsPrice = parseFloat(subTotal);

  const shippingPrice = itemsPrice > 500 ? 0 : itemsPrice * 0.15;
  const totalPrice = itemsPrice + shippingPrice;

  console.log("totalPrice=", typeof totalPrice);

  const basketItem = state.map((item) => {
    return (
      <div className="basket-item">
        <div className="card mb-3">
          <img src={item.image} class="card-img-top" alt={item.image} />

          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p>
              <strong>Details:</strong>
              {item.desc}
            </p>
            <p className="card-text ">
              <strong>Price:</strong>${item.price * item.quantity}
            </p>

            <div className=" group-btn d-flex col-sm-12 justify-content-around ">
              <div className="plusMinus d-flex ">
                <AiFillMinusSquare
                  className=" align-self-center"
                  style={{ color: "#504949", fontSize: "35px" }}
                  onClick={() => dispatch(decreaseItem(item))}
                />
                <div className=" align-self-center">{item.quantity}</div>
                <AiFillPlusSquare
                  className=" align-self-center"
                  style={{ color: "#504949", fontSize: "35px" }}
                  onClick={() => dispatch(addItemToBasket(item))} // addItemToBasket means increseItem
                />
              </div>

              <div className="deleteButton">
                <button onClick={() => dispatch(deleteItem(item.id))}>
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {state.length === 0 ? (
        <h2 className="empty-basket d-flex justify-content-center align-items-center ">Basket is empty !</h2>
      ) : (
        <div className="container-fluid checkout-page">
          <div className="row md-hide max-auto gy-2 checkout-head-container">
            <div className=" col-sm-12">{basketItem}</div>

            <div className="checkout-container col-lg-4 col-md-6 col-sm-12 ">
              <div className="card checkout-card">
                <div className="items-detail mt-3 ">
                  <div className="priceDetail">
                    <span>ItemsPrice:</span> <span>${itemsPrice}</span>
                  </div>
                  <div className="priceDetail">
                    <span>ShippingPrice:</span> <span>${shippingPrice}</span>
                  </div>
                  <div className="priceDetail">
                    <span>TotalPrice:</span> <span>${totalPrice}</span>
                  </div>
                </div>
                <Link to="/checkout">
                  <button>Checkout</button>
                </Link>
              </div>
            </div>
          </div>

          {/* 2 buttons */}
          <div className="back-delete d-flex justify-content-around justify-content-lg-center align-items-center button-container">
            <Link to="/">
              <button className="btn1">
                <TiArrowLeftOutline className="mb-1" />
                Go Back
                </button>
            </Link>

            <button className="btn2 " onClick={() => dispatch(deleteAllItem())}>
              Delete all item
            </button>
          </div>
        </div>
      )}
    </>
  );
};
