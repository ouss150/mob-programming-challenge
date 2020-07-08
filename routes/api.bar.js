const express = require("express");
const router = new express.Router();
const BarModel = require("./../models/Bar");

// rappel : ce router est prefixé avec /api/bar
router.get("/all", (req, res, next) => {
  BarModel.find()
    .then((bars) => res.json(bars))
    .catch(next);
});

// rappel : ce router est prefixé avec /api/bar
router.post("/", (req, res, next) => {
  BarModel.create(req.body)
    .then((dbRes) => res.json(dbRes))
    .catch((dbErr) => next(dbErr));
});

router.delete("/:id", (req, res, next) => {
  BarModel.findByIdAndDelete(req.params.id)
    .then((dbRes) => res.json(dbRes))
    .catch((dbErr) => next(dbErr));
});

module.exports = router;
