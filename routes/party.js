const express = require("express");
const router = new express.Router();
const PartyModel = require("./../models/Party");
// since the router's routes are prefixed with /party

// the actual path here is /party/all
router.get("/all", async (req, res) => {
  const parties = await PartyModel.find();
  //   console.log(parties);
  res.render("party/all.hbs", { parties });
});

// the actual path here is /party/create
router.get("/create", (req, res) => {
  res.render("party/create.hbs");
});

// the actual path here is /party/:id
router.get("/:id", (req, res) => {
  res.render("party/one.hbs");
});

router.post("/create", (req, res) => {
  const { date, theme, name, address, host } = req.body;
  // above : we extracted the key/values pairs out of req body
  const newParty = {
    date,
    theme,
    name,
    place: {
      address,
      host,
    },
  };
  // above : we created an object matching the Party's schema's spec
  PartyModel.create(newParty) // let's insert :)
    .then(() => res.redirect("/party/all"))
    .catch((dbErr) => res.send(JSON.stringify(dbErr)));
});

// the actual path here is /party/update/:id
router.get("/update/:id", (req, res) => {
  res.render("party/update.hbs");
});

// the actual path here is /party/delete/:id
router.get("/delete/:id", (req, res) => {
  res.send("todo delete");
});

module.exports = router;
