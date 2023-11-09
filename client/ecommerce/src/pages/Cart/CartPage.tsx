import React from "react";
import Product from "../../components/Product/Product";
import classes from "./Cart.module.css";
import { useContext } from "react";
import { ShopContext } from "../../store/shop-store";
import { AuthContext } from "../../store/auth-store";
import { useNavigate } from "react-router";
import axios from "axios";
const CartPage = () => {
  const { cartItems, getCartItemCount, getTotalPrice, resetCart } =
    useContext(ShopContext);
  const { isLoggedIn, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const jwttoken = token();
  console.log(jwttoken);
  const handleOrder = async () => {
    let items: Array<{ itemId: string; amount: number }> = [];
    cartItems.map((item: any) =>
      items.push({
        itemId: item._id,
        amount: item.amount,
      })
    );
    try {
      const result = await axios.post(
        "http://localhost:3001/api/orders/new",
        { items: items },
        {
          headers: {
            Authorization: `Bearer ${jwttoken}`,
          },
        }
      );
      console.log(result.data);
      alert("Order created succesfully");
      resetCart();
      navigate("/profile/orders");
    } catch (err: any) {
      alert("ERROR!");
    }
  };

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
      {isLoggedIn && (
        <>
          {getCartItemCount() > 0 && (
            <div className={classes.checkout}>
              <div>
                <p>Total order : {totalPrice}€</p>
                <p>Shipping : {shippingPrice}€</p>
                <h3>Total price : {totalPrice + shippingPrice}€</h3>
              </div>
              <button className={classes.orderButton} onClick={handleOrder}>
                Order
              </button>
            </div>
          )}{" "}
        </>
      )}
    </div>
  );
};
export default CartPage;
