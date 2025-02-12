import Order from '../models/order.js';
import { errorResMsg, successResMsg } from '../../../utils/lib/response.js';

export const createOrder = async (req, res) => {
  try {
    const { fullName, email, phoneNumber } = req.body;

    if (!fullName || !email || !phoneNumber) {
      return errorResMsg(res, 400, "All fields are required");
    }

    const newOrder = new Order({
      fullName,
      email,
      phoneNumber
    });

    await newOrder.save();

    return successResMsg(res, 201, "Order created successfully", newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    return errorResMsg(res, 500, "Server Error");
  }
};
