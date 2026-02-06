import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    isOnSale: {
      type: Boolean,
      default: false,
    },
    uiConfig: {
      layout: {
        type: String,
        enum: ["default", "list"],
        default: "default",
      },
      backgroundColor: {
        type: String,
        default: "#ffffff",
      },
      buttonColor: {
        type: String,
        default: "#2563eb",
      },
      showPrice: {
        type: Boolean,
        default: true,
      },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
