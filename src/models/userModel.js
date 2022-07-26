const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date, default: Date.now
  }
})

const user = new mongoose.model('user', userSchema);
module.exports = user;