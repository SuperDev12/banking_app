import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const customerEmploymentDetailsSchema = new Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  employerName: {
    type: String,
    required: [true, 'Employer name is required']
  },
  jobTitle: {
    type: String,
    required: [true, 'Job title is required']
  },
  salary: {
    type: Number,
    required: [true, 'Salary is required'],
    min: [0, 'Salary cannot be negative']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date
  }
}, { writeConcern: { w: 'majority', j: true } });

const CustomerEmploymentDetails = model('CustomerEmploymentDetails', customerEmploymentDetailsSchema);

export default CustomerEmploymentDetails;
