import express from "express";
import { createProduct , getProducts } from "../controllers/product.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", getProducts); // public
router.post("/", protect, isAdmin, createProduct);

export default router;
