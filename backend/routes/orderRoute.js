import { placeOrder, userOrders } from "../controllers/orderController.js";
import express from "express";
import middleware from "../middleware/auth.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
export default orderRouter;
