import { OrderModel, IOrder } from "../models/order";
import { UserModel } from "../models/user";
import { ProductModel } from "../models/product";

const createOrder = async (req, res) => {
  const { items } = req.body;
  const userId = req.userData.userId;

  const user = await UserModel.findOne({ _id: userId });

  const newOrder = new OrderModel({
    userId,
    shipping_address: user.address,
    shipping_price: 20,
    order_price: 120,
    phone: user.phone,
    items: items,
    total_price: 150,
  });
  try {
    await newOrder.save();
    res.json({ message: "Order created successfully" });
  } catch (err) {
    res.status(500).json({ type: err });
  }
};

exports.createOrder = createOrder;
