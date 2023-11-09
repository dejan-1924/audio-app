import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = express.Router();
const orderController = require("../controllers/order");
const authCheck = require("../middleware/check-auth");

router.use(authCheck.authCheck);

router.post("/new", orderController.createOrder);

router.get("/my-orders", orderController.getUsersOrders);

export { router as orderRouter };
