import { combineReducers } from "redux";
import { ProductsReducer } from "./ProductsReducer";
import { authenticationReducer } from "./authenticationReducer";
import { searchReducer } from "./searchReducer";
import { allProductsReducer as allProducts } from "./allProducts";

export const rootReducer = combineReducers({
  ProductsReducer,
  authenticationReducer,
  searchReducer,
  allProducts,
});

// we combine all the reducers here
