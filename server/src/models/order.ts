import { Schema, model } from "mongoose";
import { Stream } from "stream";
const mongoose = require("mongoose");

export interface IOrder {
  _id?: string;
  userId: string;
  shipping_address: {
    country: string;
    city: string;
    street_name: string;
    street_number: string;
    postal_code: number;
  };
  shipping_price: number;
  phone: string;
  items: [
    {
      itemId: string;
      amount: number;
      image: string;
      price: number;
      artist_name: string;
      product_name: string;
    }
  ];
  order_price: number;
  total_price: number;
}

const OrderSchema = new Schema<IOrder>(
  {
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "user" },
    shipping_address: {
      country: { type: String, required: true },
      city: { type: String, required: true },
      street_name: { type: String, required: true },
      street_number: { type: String, required: true },
      postal_code: { type: Number, required: true },
    },
    order_price: { type: Number, required: true },
    shipping_price: { type: Number, required: true },
    total_price: { type: Number, required: true },
    phone: { type: String, required: true },
    items: [
      {
        itemId: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "product",
        },
        amount: { type: Number, required: true },
        price: { type: Number, required: true },
        image: { type: String },
        artist_name: { type: String, required: true },
        product_name: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const OrderModel = model<IOrder>("order", OrderSchema);
