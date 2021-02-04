import { CartActions, IProduct } from './types';
// import { IAction } from '../rootReducer';

export function addToCartRequest(id:number) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: {
      id,
    },
  };
}

export function addToCartSuccess(product:string) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id:number) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id:number, amount:number) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id:number, amount:number) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}