import express from 'express';
import CustomerLoginDetails from '../models/customerLoginDetails.mjs';

const router = express.Router();

// Create customer login details
router.post('/', async (req, res) => {
  try {
    const newLoginDetails = new CustomerLoginDetails(req.body);
    await newLoginDetails.save();
    res.status(201).json({ message: 'Customer login details created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get customer login details by customerId
router.get('/:customerId', async (req, res) => {
  try {
    const loginDetails = await CustomerLoginDetails.findOne({ customerId: req.params.customerId });
    res.status(200).json(loginDetails);
  } catch (err) {
    res.status(404).json({ error: 'Customer login details not found' });
  }
});

export default router;
