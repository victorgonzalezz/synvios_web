import produce from 'immer';
import { ICart } from './types';

const INITIAL_STATE: ICart[] = [];

export default function cart(
  state = INITIAL_STATE,
  action:any) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });

    // case '@cart/REMOVE':
    //   return produce(state, draft => {
    //     const productIndex = draft.findIndex(p => p.id === action.id);

    //     if (productIndex >= 0) {
    //       draft.splice(productIndex, 1);
    //     }
    //   });

    // case '@cart/UPDATE_AMOUNT_SUCCESS': {
    //   return produce(state, draft => {
    //     const productIndex = draft

    //     if (productIndex >= 0) {
    //       draft[productIndex].amount = Number(action.amount);
    //     }
    //   });
    // }

    default:
      return state;
  }
}