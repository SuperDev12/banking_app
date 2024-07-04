import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const customerLoginDetailsSchema = new Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
}, { writeConcern: { w: 'majority', j: true } });

const CustomerLoginDetails = model('CustomerLoginDetails', customerLoginDetailsSchema);

export default CustomerLoginDetails;
