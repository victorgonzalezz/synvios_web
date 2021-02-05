import produce from "immer";
import { Reducer } from "react";
import { ICart } from "./types";

const INITIAL_STATE: ICart = {
  items: [
  ],
};

const cart: Reducer<ICart, any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@cart/ADD_SUCCESS":
      console.log(action);

      const { product } = action.payload;

      return produce(state, (draft) => {
        console.log({ draft });

        draft.items.push(product);
      });

    case "@cart/REMOVE":
      return produce(state, (draft) => {
        const productIndex = draft.items.findIndex(
          (item) => item.id === action.id
        );

        if (productIndex >= 0) {
          draft.items.splice(productIndex, 1);
        }
      });

    case "@cart/UPDATE_AMOUNT_SUCCESS": {
      return produce(state, (draft) => {
        const productIndex = draft.items.findIndex(
          (p) => p.id === action.payload.id
        );

        if (productIndex >= 0) {
          draft.items[productIndex].amount = Number(action.payload.amount);
        }
      });
    }

    default:
      return state;
  }
};

export default cart;
