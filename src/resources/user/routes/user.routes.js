import express from "express";
import { payWithFlutterWave } from "../controllers/user.controller.js";
import { createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/webhook/flutterwave", payWithFlutterWave);
router.post("/order", createOrder);

export default router;
