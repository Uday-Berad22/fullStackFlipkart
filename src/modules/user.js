const validator = require("validator");
const mongoose = require("mongoose");

// schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    unique: [true, "Username already exists"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

//model or collection
const User = mongoose.model("User", userSchema);

module.exports = User;
