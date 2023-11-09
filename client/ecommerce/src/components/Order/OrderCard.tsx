import React from "react";
import classes from "./Order.module.css";
import dayjs from "dayjs";

const OrderCard = (props: any) => {
  return (
    <div className={classes.order}>
      <div className={classes.orderTitle}>
        <div
          className={classes.orderNumber}
        >{`Order : ${props.order._id}`}</div>
      </div>
      <div className={classes.orderContainer}>
        <div className={classes.orderDetails}>
          <div className={classes.orderDetail}>
            <p className={classes.orderDetailName}>Status:</p>
            <p>Created</p>
          </div>
          <div className={classes.orderDetail}>
            <p className={classes.orderDetailName}>Date:</p>
            <p>{dayjs(props.order.createdAt).format("DD.MM.YYYY.")}</p>
          </div>

          <div className={classes.orderDetail}>
            <p className={classes.orderDetailName}>Address:</p>
            <p>{`${props.order.shipping_address.street_name} ${props.order.shipping_address.street_number}, ${props.order.shipping_address.postal_code}, ${props.order.shipping_address.city}, ${props.order.shipping_address.country}`}</p>
          </div>
          <div className={classes.orderDetail}>
            <p className={classes.orderDetailName}>Total price:</p>
            <p>{props.order.total_price} €</p>
          </div>
        </div>
        <div className={classes.orderItems}>
          {props.order.items.map((item: any) => {
            return (
              <div className={classes.orderItem}>
                <img src={item.image} className={classes.orderItemImage}></img>
                <div>
                  <p>{item.artist_name}</p>
                  <p>{item.product_name}</p>
                  <p>{`${item.amount} x ${item.price} €`}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
