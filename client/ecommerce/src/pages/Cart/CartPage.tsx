import React from "react";
import Product from "../../components/Product/Product";
import classes from "./Cart.module.css";
import { useContext } from "react";
import { ShopContext } from "../../store/shop-store";

const products = [
  {
    id: 1,
    artist_name: "Alice In Chains",
    item_name: "Facelift",
    price: 30,
    content: "2LP",
    year: "2023",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/43/Alice_In_Chains-Facelift.jpg",
  },
];

const CartPage = () => {
  const { cartItems, getCartItemCount } = useContext(ShopContext);

  return (
    <div className={classes.cart}>
      <h3 className={classes.title}>My Cart</h3>
      {getCartItemCount() == 0 ? (
        <div className={classes.emptyCart}>
          <h4>Your cart is empty.</h4>
        </div>
      ) : (
        cartItems?.map((product) => {
          return (
            <Product key={product.id} product={product} page={"cart"}></Product>
          );
        })
      )}
    </div>
  );
};
export default CartPage;
