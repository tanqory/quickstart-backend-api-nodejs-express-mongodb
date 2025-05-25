const authService = require('../services/auth.service');
const { asyncHandler } = require('../../src/utils/helpers');

// Register new user
exports.register = asyncHandler(async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);
    
    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// Login user
exports.login = asyncHandler(async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);
    
    res.status(200).json({
      success: true,
      token: result.token,
      id: result.id,
      name: result.name,
      email: result.email
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message
    });
  }
});
