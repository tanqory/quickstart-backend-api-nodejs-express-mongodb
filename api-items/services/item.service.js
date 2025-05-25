const Item = require('../../src/models/item.model');

// Get all items for a user
const getAllItems = async (userId) => {
  const items = await Item.find({ createdBy: userId })
    .sort({ createdAt: -1 })
    .select('name description price createdAt updatedAt');
  
  return items;
};

// Get a single item by ID
const getItemById = async (itemId, userId) => {
  const item = await Item.findOne({ 
    _id: itemId, 
    createdBy: userId 
  });
  
  if (!item) {
    throw new Error('Item not found');
  }
  
  return item;
};

// Create a new item
const createItem = async (itemData, userId) => {
  const item = new Item({
    ...itemData,
    createdBy: userId
  });
  
  await item.save();
  
  return {
    id: item._id,
    name: item.name,
    description: item.description,
    price: item.price,
    createdAt: item.createdAt
  };
};

// Update an existing item
const updateItem = async (itemId, updateData, userId) => {
  const item = await Item.findOneAndUpdate(
    { _id: itemId, createdBy: userId },
    updateData,
    { new: true, runValidators: true }
  );
  
  if (!item) {
    throw new Error('Item not found');
  }
  
  return {
    id: item._id,
    name: item.name,
    description: item.description,
    price: item.price,
    updatedAt: item.updatedAt
  };
};

// Delete an item
const deleteItem = async (itemId, userId) => {
  const item = await Item.findOneAndDelete({ 
    _id: itemId, 
    createdBy: userId 
  });
  
  if (!item) {
    throw new Error('Item not found');
  }
  
  return { message: 'Item deleted successfully' };
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
