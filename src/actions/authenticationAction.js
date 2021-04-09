import { ACTION } from "../actions/authenticationType.js";

export const addUser = (data) => {
  return { type: ACTION.ADD_USER, payload: data };
};
