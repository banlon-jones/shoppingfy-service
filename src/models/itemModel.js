const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  category:{
    type: mongoose.Types.ObjectId,
    require: true
  },
  note:{
    type: String,
    require: false
  },
  image:{
    type: String,
    require: false
  }
})

const item = new mongoose.model('Item', itemSchema);
module.exports = item;
