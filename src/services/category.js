const category = require("../models/category.model")

// create category
exports.create = (payload) => {
  return {
    message: 'Category created',
    category: payload
  }
}

exports.getAllCategories = () => {
  return {
    message: 'categories'
  }
}

