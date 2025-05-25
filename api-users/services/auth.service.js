const User = require('../../src/models/user.model');
const { generateToken } = require('../../src/utils/helpers');

// Register a new user
const registerUser = async (userData) => {
  const { name, email, password } = userData;
  
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists with this email');
  }
  
  // Create new user
  const user = new User({
    name,
    email,
    password
  });
  
  await user.save();
  
  return {
    message: 'User registered successfully'
  };
};

// Login a user
const loginUser = async (credentials) => {
  const { email, password } = credentials;
  
  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }
  
  // Check password
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }
  
  // Generate token
  const token = generateToken(user._id);
  
  return {
    token,
    id: user._id,
    name: user.name,
    email: user.email
  };
};

module.exports = {
  registerUser,
  loginUser
};
