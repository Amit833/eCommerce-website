import { ACTIONS } from "./productTypes";

export const addItemToBasket = (item) => {
  return { type: ACTIONS.ADD_ITEM, payload: item };
}; // coming from productsCard and also we will use it to increase the item quantity in plus button which will come from basket

export const deleteItem = (id) => {
  return { type: ACTIONS.DELETE_ITEM, payload: id };
};

export const decreaseItem = (item) => {
  return { type: ACTIONS.DECREASE_ITEM, payload: item };
};

export const deleteAllItem = () => {
  return { type: ACTIONS.DELETE_ALL_ITEM };
};
