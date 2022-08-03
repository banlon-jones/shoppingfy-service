const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    
		createdAt: {
			type: Date, default: Date.now,
		},
})

const category = new mongoose.model('Category', categorySchema);
module.exports = category;
