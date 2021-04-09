import { ACTIONS } from "../actions/productTypes";

const initialState = {
  items: [],
};

export const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      const exist = state.items.find((item) => item.id === action.payload.id);
      if (!exist) {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      } else
        return {
          ...state,
          items: state.items.map((itm) =>
            itm.id === action.payload.id
              ? { ...itm, quantity: itm.quantity + 1 }
              : { ...itm }
          ),
        };
    case ACTIONS.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload), // not 100% clear. j item id ta delete korte cai seta chara baki gula filter kore rekhe dilam.orthaat shudhu oi id tai delete hobe baki gula roye jabe
      };

    // oi id gula filter kore rekhe dao j gula action.payload er soman noi. jeta soman seta delete kore dao.
    // filter give us or return numbers of arrayready specipy it in basket when we dispatched it(item.id)
    // why dont's write action.payload.id here? because we al
    //why we are not using find method here?

    case ACTIONS.DECREASE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  item.quantity > 1 ? item.quantity - 1 : (item.quantity = 1),
              }
            : { ...item }
        ),
      };

    case ACTIONS.DELETE_ALL_ITEM:
      return {
        items: [],
      };

    default:
      return state;
  }
};
