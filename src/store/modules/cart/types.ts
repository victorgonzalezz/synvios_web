export type IProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
};

export type ICart = {
  items: IProduct[];
};

export const CartActions = {
  ADD_TO_CART: '@cart/ADD_REQUEST',
  ADD_SUCCESS: '@cart/ADD_SUCCESS',
  REMOVE_FROM_CART: '@cart/REMOVE',
  UPDATE_AMOUNT: '@cart/UPDATE_AMOUNT',
  UPDATE_AMOUNT_SUCCESS: '@cart/UPDATE_AMOUNT_SUCCESS',
};