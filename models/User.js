const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  favoriteLanguage: String,
});

const UserModel = mongoose.model("User", userSchema); // User is the collection's name
// the UserModel is an object, containing methods (functions)
// those function are used in the app (through controllers) to interact with the database

module.exports = UserModel;
