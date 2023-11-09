import React from "react";
import { useGetUserOrders } from "../../../hooks/orderHooks";
import { useContext } from "react";
import { AuthContext } from "../../../store/auth-store";
import OrderCard from "../../../components/Order/OrderCard";
import classes from "./Orders.module.css";

const MyOrdersPage = () => {
  const authCtx = useContext(AuthContext);
  const { data: orders, isLoading, error } = useGetUserOrders(authCtx?.token());

  return (
    <div className={classes.orders}>
      <div className={classes.title}>
        <h3>My orders</h3>
      </div>
      {orders.data.length > 0 ? (
        <div className={classes.orderList}>
          {orders?.data.map((order: any) => {
            return <OrderCard order={order}></OrderCard>;
          })}
        </div>
      ) : (
        <div className={classes.emptyOrders}>
          <h4>You have no previous orders.</h4>
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
