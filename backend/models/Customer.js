const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minlength: [2, 'First name must be at least 2 characters long'],
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minlength: [2, 'Last name must be at least 2 characters long'],
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Please use a valid 10-digit phone number']
  },
  address: {
    street: {
      type: String,
      required: [true, 'Street address is required']
    },
    city: {
      type: String,
      required: [true, 'City is required']
    },
    state: {
      type: String,
      required: [true, 'State is required']
    },
    zipCode: {
      type: String,
      required: [true, 'Zip code is required'],
      match: [/^\d{5}$/, 'Please use a valid 5-digit zip code']
    }
  },
  balance: {
    type: Number,
    required: [true, 'Balance is required'],
    min: [0, 'Balance cannot be negative']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { writeConcern: { w: 'majority', j: true } });

customerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;
