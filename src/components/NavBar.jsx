import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { searchAction } from "../actions/searchAction";

export const NavBar = () => {
  const state = useSelector((state) => state.ProductsReducer.items);
  const basketCount = state.reduce((acc, item) => acc + item.quantity, 0);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <div className=" d-flex justify-content-center w-100">

          <Link className="navbar-brand text-center" to="/">
            
            Unique Shopping
            </Link>
          </div>

          <div className="absolute-icon">

          <Link to="/basket" className="nav-link ">
            <FaShoppingCart />

            <p>{basketCount}</p>
          </Link>
          </div>


          <div className="form-toggle d-flex justify-content-center w-100 search-bar  ">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => dispatch(searchAction(e.target.value))}
              />
            </form>

            </div>
            <button
              className="navbar-toggler  absolute-toggle-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent "
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link" to="/signin">
                  Sign In
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>

             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
