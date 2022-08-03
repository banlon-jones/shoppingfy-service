const mongoose = require('mongoose');

const item = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  category: mongoose.Types.ObjectId,
  quantity: Number,
  status: {
    type: Boolean, default: false
  }
});
const shoppingListSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    items:{
      type: [item],
      require: true
    },
    createdAt: {
      type: Date, default: Date.now
    },
    status: {
      type: String, default: "Active"
    },
    belongTo:{
      type: mongoose.Types.ObjectId,
      require: true,
    }
  }
)

const shoppingList = new mongoose.model('ShoppingList', shoppingListSchema);
module.exports = shoppingList;
