import { call, select, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import { addToCartSuccess, updateAmountSuccess } from "./actions";
import { formatPrice } from "../../../utils/format";
import { ICart } from "./types";

export interface IState {
  cart: ICart;
}

function* addToCart({ payload }: { payload: { id: number } }) {
  // yield put(setProductStatus(id, true));

  const { id } = payload;

  const productExists = yield select((state: IState) =>
    state.cart.items.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error("Requested Amount is Out of Stock");
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
    // history.push("/cart");
  }
}

function* updateAmount({ id, amount }: { id: number; amount: number }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error("Product amount not available in stock");
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

const ADD_REQUEST: any = "@cart/ADD_REQUEST";
const UPDATE_AMOUNT_REQUEST: any = "@cart/UPDATE_AMOUNT_REQUEST";

export default all([
  takeLatest(ADD_REQUEST, addToCart),
  takeLatest(UPDATE_AMOUNT_REQUEST, updateAmount),
]);
