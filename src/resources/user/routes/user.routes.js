import express from "express";
import { payWithFlutterWave } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/webhook/flutterwave", payWithFlutterWave);

export default router;
