import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    maxlength: 255
  },
  phoneNumber: {
    type: String,
    required: true,
    maxlength: 20
  },
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
