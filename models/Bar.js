const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  name: String,
  // address: {
  //     streetName: String,
  //     streetNumber: Number,
  //     city: String,
  //     country: String,
  //     zipCode: Number,
  // },
  description : String
});

const BarModel = mongoose.model("Bar", barSchema);
// User is the collection's name
// the UserModel is an object, containing methods (functions)
// those function are used in the app (through controllers) to interact with the database

module.exports = BarModel;

