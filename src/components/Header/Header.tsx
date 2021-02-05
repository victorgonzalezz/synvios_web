import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Container, Cart } from "./Header_Styles";
import { IState } from "../../store/modules/cart/sagas";
import { useHistory } from "react-router-dom";

// import logo from "../../assets/images/logo.svg";

export default function Header() {
  const cartSize = useSelector((state: IState) =>
    state.cart.items.reduce((total, p) => {
      return total + p.amount;
    }, 0)
  );

  const history = useHistory();

  return (
    <Container>
      <button onClick={() => history.push("/")}>HOME</button>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>
            {cartSize === 1 ? `${cartSize} product` : `${cartSize} products`}
          </span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
        <span>{cartSize}</span>
      </Cart>
    </Container>
  );
}
