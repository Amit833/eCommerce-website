import { ACTION } from "../actions/authenticationType";
import { nanoid } from "nanoid";

const id = nanoid();

const initialState = {
  users: [],
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ADD_USER:
      console.log("paylaod", action.payload);
      return {
        ...state,
        users: [...state.users, { ...action.payload.data, id: id }],
      };
    case ACTION.UPDATE_USER:
      return {
        ...state,
        users: [...state.users, { ...action.payload.data }],
      };
    case ACTION.DELETE_USER:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload), // what is item here?
      };
    default:
      return state;
  }
};
