const express = require("express");
const router = new express.Router();

// MODELS
const UserModel = require("./../models/User");

router.get("/ironhackers", async (req, res) => {
  try {
    res.json(await UserModel.find());
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
