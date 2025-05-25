const express = require('express');
const itemController = require('../controllers/item.controller');
const auth = require('../../src/middleware/auth');
const { itemValidation, handleValidationErrors } = require('../../src/middleware/validation');

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);

// @route   GET /api/items
// @desc    Get all items for authenticated user
// @access  Private
router.get('/', itemController.getAllItems);

// @route   GET /api/items/:id
// @desc    Get single item
// @access  Private
router.get('/:id', itemController.getItem);

// @route   POST /api/items
// @desc    Create new item
// @access  Private
router.post('/',
  itemValidation,
  handleValidationErrors,
  itemController.createItem
);

// @route   PUT /api/items/:id
// @desc    Update item
// @access  Private
router.put('/:id',
  itemValidation,
  handleValidationErrors,
  itemController.updateItem
);

// @route   DELETE /api/items/:id
// @desc    Delete item
// @access  Private
router.delete('/:id', itemController.deleteItem);

module.exports = router;
