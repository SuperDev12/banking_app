import express from 'express';
import CustomerEmploymentDetails from '../models/customerEmploymentDetails.mjs';

const router = express.Router();

// Create customer employment details
router.post('/', async (req, res) => {
  try {
    const newEmploymentDetails = new CustomerEmploymentDetails(req.body);
    await newEmploymentDetails.save();
    res.status(201).json({ message: 'Customer employment details created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get customer employment details by customerId
router.get('/:customerId', async (req, res) => {
  try {
    const employmentDetails = await CustomerEmploymentDetails.find({ customerId: req.params.customerId });
    res.status(200).json(employmentDetails);
  } catch (err) {
    res.status(404).json({ error: 'Customer employment details not found' });
  }
});

export default router;
