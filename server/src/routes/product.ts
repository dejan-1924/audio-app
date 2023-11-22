import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = express.Router();
const productController = require("../controllers/product");
const authCheck = require("../middleware/check-auth");

import { IProduct, ProductModel } from "../models/product";
import { ProductErrors } from "../common/errors";

router.post("/query/page/:page", productController.getProductBySearch);

router.get("/id/:productId", productController.getProductById);

router.use(authCheck.adminCheck);

router.post("/new", productController.createProduct);

export { router as productRouter };
