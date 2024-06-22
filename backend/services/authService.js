const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (username, password) => {
  // Find the user by username
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Compare the provided password with the stored hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
    expiresIn: '1h',
  });

  return token;
};
