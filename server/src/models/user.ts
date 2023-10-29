import { Schema, model } from "mongoose";

export interface IUser {
  _id?: string;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  address: {
    country: string;
    city: string;
    street_name: string;
    street_number: string;
    postal_code: number;
  };
  phone: string;
  availableMoney: number;
  purchasedItems: string[];
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  availableMoney: { type: Number, default: 5000 },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    street_name: { type: String, required: true },
    street_number: { type: String, required: true },
    postal_code: { type: Number, required: true },
  },
  phone: { type: String, required: true },
  purchasedItems: [
    { type: Schema.Types.ObjectId, ref: "product", default: [] },
  ],
});

export const UserModel = model<IUser>("user", UserSchema);
