export function addToCartRequest(id: number) {
  return {
    type: "@cart/ADD_REQUEST",
    payload: {
      id,
    },
  };
}

export function addToCartSuccess(product: string) {
  return {
    type: "@cart/ADD_SUCCESS",
    payload: {
      product,
    },
  };
}

export function updateAmountSuccess(id: number, amount: number) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCCESS",
    payload: {
      id,
      amount,
    },
  };
}

export function updateAmountRequest(id: number, amount: number) {
  return {
    type: "@cart/UPDATE_AMOUNT_REQUEST",
    id,
    amount,
  };
}

export function removeFromCart(id: number) {
  return {
    type: "@cart/REMOVE",
    id,
  };
}
