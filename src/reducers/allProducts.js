import { MyData } from "../data/MyData";
import { ACTION } from "../actions/searchType";

const initialState = MyData;

export const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SEARCH_PRODUCTS:
      const value = action.payload.toLowerCase(); // we convert the search name to lower case if client type anything in searchbox it will convert to lowercase
      const searchedProducts = MyData.filter(
        (product) => product.name.toLowerCase().includes(value) //here we filter that data from myData whichOne search our client in line 9(value)
      );

      return [...searchedProducts]; // why we spred?
    default:
      return state;
  }
};
