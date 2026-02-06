import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      imageUrl,
      isOnSale,
      uiConfig,
    } = req.body;

    if (!name || !price || !imageUrl) {
      return res.status(400).json({
        message: "Name, price, and imageUrl are required",
      });
    }

    const product = await Product.create({
      name,
      price,
      imageUrl,
      isOnSale: isOnSale ?? false,
      uiConfig: uiConfig || {},
      createdBy: req.user.id, // comes from JWT
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    return res.status(200).json({
      products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

