import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = express.Router();

import { IProduct, ProductModel } from "../models/product";
import { ProductErrors } from "../common/errors";

router.post("/", async (req, res) => {
  const {
    product_id,
    product_name,
    artist_name,
    release_year,
    format,
    price,
    description,
    stock_quantity,
    category,
    genre,
    image,
    release_region,
  } = req.body;
  try {
    const product = await ProductModel.findOne({ product_id });
    if (product) {
      return res
        .status(400)
        .json({ type: ProductErrors.PRODUCT_ALREADY_EXISTS });
    }

    const newProduct = new ProductModel({
      product_id,
      product_name,
      artist_name,
      release_year,
      format,
      price,
      description,
      stock_quantity,
      category,
      genre,
      image,
      release_region,
    });
    await newProduct.save();
    res.json({ message: "Product created successfully" });
  } catch (err) {
    res.status(500).json({ type: err });
  }
});

router.get("/", async (req, res) => {
  const products = await ProductModel.find();
  res.json(products);
});

router.get("/id/:productId", async (req, res) => {
  const product = await ProductModel.findOne({ _id: req.params.productId });
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

export { router as productRouter };
