import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from "react-icons/md";
import { formatPrice } from "../../utils/format";
import {
  Container,
  ProductTable,
  Total,
  EmptyCart,
  StartShopping,
} from "./Cart_Styles";
import { IState } from "../../store/modules/cart/sagas";
import {
  removeFromCart,
  updateAmountRequest,
} from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";
import Header from "../../components/Header";

export default function Cart() {
  const total = useSelector((state: IState) => {
    const totalPrice = state.cart.items.reduce((totalAmount, product) => {
      return totalAmount + product.price * product.amount;
    }, 0);

    return formatPrice(totalPrice);
  });

  const cart = useSelector((state: IState) =>
    state.cart.items.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product: IProduct) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product: IProduct) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }
  function remove(product: IProduct) {
    dispatch(removeFromCart(product.id));
  }

  return (
    <>
      <Header />
      <Container>
        {cart.length === 0 ? (
          <EmptyCart>
            <MdRemoveShoppingCart />

            <div>
              <h2>Oops...</h2>
              <p>Cart empty!</p>
              <StartShopping to="/">Start Shopping</StartShopping>
            </div>
          </EmptyCart>
        ) : (
          <>
            <ProductTable>
              <thead>
                <tr>
                  <th />
                  <th>PRODUCT</th>
                  <th>AMOUNT</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <figure>
                        <img src={product.image} alt={product.title} />
                      </figure>
                    </td>
                    <td>
                      <strong>{product.title}</strong>
                      <span>{formatPrice(product.price)}</span>
                    </td>
                    <td>
                      <div>
                        <button
                          type="button"
                          onClick={() => decrement(product)}
                        >
                          <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="text" readOnly value={product.amount} />
                        <button
                          type="button"
                          onClick={() => increment(product)}
                        >
                          <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{product.subtotal}</strong>
                    </td>
                    <td>
                      <button type="button" onClick={() => remove(product)}>
                        <MdDelete size={20} color="#7159c1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>

            <footer>
              <button type="submit">Checkout</button>
              <Total>
                <span>TOTAL:</span>
                <strong>{total}</strong>
              </Total>
            </footer>
          </>
        )}
      </Container>
    </>
  );
}
