import { ACTION } from "./searchType";

export const searchAction = (searchValue) => {
  return {
    type: ACTION.SEARCH_PRODUCTS,
    payload: searchValue,
  };
};

//  searchvalue is came from navbar-searchbox dispatch(searchAction(e.target.value))

// we separate the type in another file because we need the type here in our
// action creator and also in our reducer. and also we can avoid the spealing mistakes.
