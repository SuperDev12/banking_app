const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/accounts', authMiddleware, accountRoutes);
app.use('/api/customer-login-details', customerLoginDetailsRoutes);
app.use('/api/customer-employment-details', customerEmploymentDetailsRoutes);

app.post('/api/customers', async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json({ message: 'Customer created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app;
