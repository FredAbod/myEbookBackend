import { Schema, Types, model } from "mongoose";

const transactionSchema = new Schema(
  {
    email: { type: String, required: true, maxlength: 255 },
    payment_reference: { type: String, required: true, maxlength: 255 },
    transaction_details: { type: String }, // `text` in MySQL is equivalent to `String` in MongoDB
    amount: { type: Types.Decimal128, required: true }, // Decimal in MongoDB using `Decimal128`
    status: {
      type: String,
      enum: ["Pending", "successful", "Failed"],
      required: true,
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Transaction = model("Transaction", transactionSchema);

export default Transaction;
