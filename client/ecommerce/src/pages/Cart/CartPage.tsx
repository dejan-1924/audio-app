import React from "react";
import Product from "../../components/Product/Product";
import classes from "./Cart.module.css";
import { useContext } from "react";
import { ShopContext } from "../../store/shop-store";

const CartPage = () => {
  const { cartItems, getCartItemCount, getTotalPrice } =
    useContext(ShopContext);

  const totalPrice = getTotalPrice();
  const shippingPrice = 20;
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

      <div className={classes.checkout}>
        <div>
          <p>Total order : {totalPrice}€</p>
          <p>Shipping : {shippingPrice}€</p>
          <h3>Total price : {totalPrice + shippingPrice}€</h3>
        </div>
        <button className={classes.orderButton}>Order</button>
      </div>
    </div>
  );
};
export default CartPage;
