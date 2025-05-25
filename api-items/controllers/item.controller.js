const itemService = require('../services/item.service');
const { asyncHandler } = require('../../src/utils/helpers');

// Get all items
exports.getAllItems = asyncHandler(async (req, res) => {
  try {
    const items = await itemService.getAllItems(req.user._id);
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// Get single item
exports.getItem = asyncHandler(async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.id, req.user._id);
    
    res.status(200).json({
      success: true,
      id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message
    });
  }
});

// Create new item
exports.createItem = asyncHandler(async (req, res) => {
  try {
    const result = await itemService.createItem(req.body, req.user._id);
    
    res.status(200).json({
      success: true,
      ...result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// Update item
exports.updateItem = asyncHandler(async (req, res) => {
  try {
    const result = await itemService.updateItem(
      req.params.id, 
      req.body, 
      req.user._id
    );
    
    res.status(200).json({
      success: true,
      ...result
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message
    });
  }
});

// Delete item
exports.deleteItem = asyncHandler(async (req, res) => {
  try {
    const result = await itemService.deleteItem(req.params.id, req.user._id);
    
    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message
    });
  }
});
