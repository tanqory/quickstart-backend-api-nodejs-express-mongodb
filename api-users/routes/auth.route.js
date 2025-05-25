const express = require('express');
const authController = require('../controllers/auth.controller');
const { 
  registerValidation, 
  loginValidation, 
  handleValidationErrors 
} = require('../../src/middleware/validation');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', 
  registerValidation,
  handleValidationErrors,
  authController.register
);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login',
  loginValidation,
  handleValidationErrors,
  authController.login
);

module.exports = router;
