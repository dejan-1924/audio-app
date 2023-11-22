import { Schema, model } from "mongoose";

export interface IProduct {
  _id?: string;
  product_id: string;
  product_name: string;
  artist_name: string;
  release_year: string;
  format: string;
  price: number;
  description: string;
  stock_quantity: number;
  category: string;
  genre: string;
  image: string;
  release_region: string;
}

const ProductSchema = new Schema<IProduct>({
  product_name: { type: String, required: true },
  artist_name: { type: String, required: true },
  product_id: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock_quantity: { type: Number, required: true },
  image: { type: String, required: true },
  genre: { type: String, required: true },
  category: { type: String, required: true },
  format: { type: String, required: true },
  release_year: { type: String, required: true },
  release_region: { type: String, required: true },
});

export const ProductModel = model<IProduct>("product", ProductSchema);
