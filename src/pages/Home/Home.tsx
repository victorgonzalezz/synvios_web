import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/format";
import GridPlaceholder from "../../components/GridPlaceholder/GridPlaceholder";
import { ProductList } from "./Home_Styles";
import { MdAddShoppingCart } from "react-icons/md";
import { IProduct } from "../../store/modules/cart/types";
import api from "../../services/api";
import { addToCartRequest } from "../../store/modules/cart/actions";
import Header from "../../components/Header";
import { IState } from "../../store/modules/cart/sagas";
interface ProductsState extends IProduct {
  priceFormatted: string;
  loading: boolean;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState([] as ProductsState[]);
  const amount = useSelector((state: IState) =>
    state.cart.items.reduce((sumAmount:any, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    api.get("products").then((response) => {
      setProducts(
        response.data.map((product: IProduct) => ({
          ...product,
          priceFormatted: formatPrice(product.price),
          loading: false,
        }))
      );
    });
  }, []);

  const handleAddProduct = useCallback(
    (product: IProduct) => {
      dispatch(addToCartRequest(product.id));
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <ProductList>
        {products === null ? (
          <GridPlaceholder repeatCount={6} />
        ) : (
          products &&
          products.map((product) => (
            <li key={product.id}>
              <figure>
                <img src={product.image} alt={product.title} />
              </figure>
              <strong>{product.title}</strong>

              <div>
                <span>{product.priceFormatted}</span>

                <button type="button" onClick={() => handleAddProduct(product)}>

                    <div>
                      <MdAddShoppingCart size={16} color="#FFF" />
                      {amount[product.id] || 0}
                    </div>
                  

                  <span>ADD TO CART</span>
                </button>
                
              </div>
            </li>
          ))
        )}
      </ProductList>
    </>
  );
};

export default Home;
