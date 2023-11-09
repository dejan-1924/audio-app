import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";
import { orderRouter } from "./routes/order";
const HttpError = require("./models/http-error");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

mongoose
  .connect(
    `mongodb+srv://barcaldejan:ecommerce123@ecommerce.grdsaq8.mongodb.net/ecommerce`
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3001, () => console.log("Server started"));
