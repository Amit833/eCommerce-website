import { ACTION } from "../actions/searchType";

export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION.SEARCH_ALL_PRODUCTS:
      console.log("payload=", action.payload);

      return (state = action.payload);
    default:
      return state;
  }
};
