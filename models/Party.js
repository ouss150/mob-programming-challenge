const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partySchema = new Schema({
  date: Date,
  theme: String,
  name: String,
  place: {
    address: String,
    host: String,
  },
});

const PartyModel = mongoose.model("Party", partySchema);

module.exports = PartyModel;
