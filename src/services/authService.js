const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../config/jwt');
const bcrypt = require('bcrypt');

// Service functions for user authentication
module.exports = {
  register: async (userData) => {
    const { name, email, password } = userData;

    try {
      // Check if user with email already exists
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      return { message: 'User registered successfully' };
    } catch (error) {
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      // Check if user with email exists
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Invalid email or password');
      }

      // Generate JWT token
      const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn });

      return { token };
    } catch (error) {
      throw error;
    }
  },
};
