import { ProductModel, IProduct } from "../models/product";
import { ProductErrors } from "../common/errors";

const getProductBySearch = async (req, res) => {
  const query = req.body.searchQuery;
  const page = req.params.page;

  try {
    const LIMIT = 5;
    const startIndex = (Number(page) - 1) * LIMIT;

    const product_name = new RegExp(query, "i");
    const product_artist = new RegExp(query, "i");
    let products = [];

    let total = 0;
    if (query === "-1") {
      products = await ProductModel.find({})
        .sort({ _id: -1 })
        .limit(LIMIT)
        .skip(startIndex);
      total = await ProductModel.find({}).countDocuments();
    } else {
      products = await ProductModel.find({
        $or: [
          { product_name: { $regex: product_name } },
          { artist_name: { $regex: product_artist } },
        ],
      })
        .sort({ _id: -1 })
        .limit(LIMIT)
        .skip(startIndex);

      total = await ProductModel.find({
        $or: [
          { product_name: { $regex: product_name } },
          { artist_name: { $regex: product_artist } },
        ],
      }).countDocuments();
    }

    res.status(200).json({ data: products, totalProducts: total });
  } catch {
    res.status(404).json({ message: "Products Not Found" });
  }
};

const getProductById = async (req, res) => {
  const product = await ProductModel.findOne({ _id: req.params.productId });
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
};

const createProduct = async (req, res) => {
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
};

exports.getProductById = getProductById;
exports.getProductBySearch = getProductBySearch;
exports.createProduct = createProduct;
