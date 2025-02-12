import Transaction  from '../models/transactions.js';
// import { User } from '../models/user.js';
import { sendPaymentReceivedEmail } from '../../../utils/email/email-sender.js';
// import ejs from 'ejs';
import path from 'path';

export const payWithFlutterWave = async (req, res) => {
  try {
    console.log("Webhook triggered");

    const secretHash = process.env.FLW_SECRET_HASH_ACADEMY;
    const signature = req.headers["verif-hash"];

    if (!signature || signature !== secretHash) {
      console.log("Invalid signature: Signature doesn't match the secret hash.");
      return res.status(401).json({ message: "Unauthorized: Invalid signature" });
    }

    const event = req.body["event.type"];
    const { data } = req.body;

    if (!event) {
      console.log("Event is undefined");
      return res.status(400).json({ message: "Bad request: Event is undefined" });
    }

    if (event === "BANK_TRANSFER_TRANSACTION" || event === "CARD_TRANSACTION") {
      const email = data.customer?.email;
      const { tx_ref: txRef, amount, status } = data;
      const fullname = data.customer?.name || "Applicant";

      if (!email || !txRef || !amount) {
        console.log("Missing essential payment details.");
        return res.status(400).json({ message: "Bad request: Missing payment details" });
      }

      if (amount === 25000) {
        const existingTransaction = await Transaction.findOne({ payment_reference: txRef });
        if (existingTransaction) {
          console.log("Transaction already exists for reference:", txRef);
          return res.status(200).send("OK");
        }

        await Transaction.create({
          email,
          payment_reference: txRef,
          transaction_details: JSON.stringify(data),
          amount,
          status,
        });

        console.log(`25000 Naira payment processed successfully for email: ${email}`);

        const ebookLink = process.env.EBOOK_LINK;
        await sendPaymentReceivedEmail(email, fullname, ebookLink);

        return res.status(200).send("OK");
      } else {
        console.log("Unhandled amount:", amount);
        return res.status(400).json({ message: "Bad request: Unhandled amount" });
      }
    } else {
      console.log("Unhandled event type:", event);
      return res.status(401).json({ message: "Unauthorized: Unhandled event type" });
    }
  } catch (error) {
    console.error("Error handling webhook:", error);
    return res.status(500).send("Server Error");
  }
};
