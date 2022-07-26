const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({id: mongoose.Types.ObjectId, name: String })
const categorySchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    items: {
      type: [itemSchema],
			required: false 
    },
		createdAt: {
			type: Date, default: Date.now,
		},
})

const category = new mongoose.model('Category', categorySchema);
module.exports = category;