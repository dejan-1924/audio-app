import { OrderModel, IOrder } from "../models/order";
import { UserModel } from "../models/user";
import { ProductModel } from "../models/product";
import { get } from "http";
import { error } from "console";

const getShippingPrice = () => {
  return 20;
};

const getItemPrice = async (itemId: string) => {
  const product = await ProductModel.findOne({ _id: itemId });
  return product.price;
};

const getItemById = async (itemId: string) => {
  const product = await ProductModel.findOne({ _id: itemId });
  return product;
};

const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const userId = req.userData.userId;
    let itemsForOrder = [];
    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const allProducts = await ProductModel.find();

    let totalPrice = 0;

    for (const item of items) {
      const product = allProducts.find(
        (dbProduct) => dbProduct._id.toString() === item.itemId
      );

      if (!product) {
        return res
          .status(404)
          .json({ error: `Product with ID ${item.itemId} not found` });
      }

      if (item.amount > product.stock_quantity) {
        return res.status(400).json({
          error: `Ordered amount exceeds stock quantity for product with ID ${item.itemId}`,
        });
      }
      itemsForOrder.push({
        ...item,
        price: product.price,
        image: product.image,
        artist_name: product.artist_name,
        product_name: product.product_name,
      });
      totalPrice += product.price * item.amount;
    }

    const newOrder = new OrderModel({
      userId,
      shipping_address: user.address,
      shipping_price: getShippingPrice(), // You may need to define or import the getShippingPrice function
      order_price: totalPrice,
      phone: user.phone,
      items: itemsForOrder,
      total_price: totalPrice + getShippingPrice(),
    });

    await newOrder.save();
    for (const item of items) {
      const product = await ProductModel.findOne({ _id: item.itemId });

      product.stock_quantity -= item.amount;
      await product.save();
    }

    res.json({ message: "Order created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUsersOrders = async (req, res) => {
  try {
    const userId = req.userData.userId;

    const usersOrders = await OrderModel.find({ userId: userId });

    const total = usersOrders.length;
    return res.status(200).json({ data: usersOrders, totalOrders: total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createOrder = createOrder;
exports.getUsersOrders = getUsersOrders;
