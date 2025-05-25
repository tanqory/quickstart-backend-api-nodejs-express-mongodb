const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Async error handler wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Response formatter
const formatResponse = (success, data, message = null) => {
  const response = { success };
  
  if (data) {
    if (Array.isArray(data)) {
      return data; // Return array directly
    } else {
      Object.assign(response, data);
    }
  }
  
  if (message) {
    response.message = message;
  }
  
  return response;
};

// Pagination helper
const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;
  
  return { limit, offset };
};

module.exports = {
  generateToken,
  asyncHandler,
  formatResponse,
  getPagination
};
