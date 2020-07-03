const express = require("express");
const router = new express.Router();
const PartyModel = require("./../models/Party");
// since the router's routes are prefixed with /party

function formatPartyInfos(infos) {
  const { date, theme, name, address, host } = infos;
  // above : we extracted the key/values pairs out of req body
  return {
    date,
    theme,
    name,
    place: {
      address,
      host,
    },
  };
}

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
router.get("/:id", async (req, res) => {
  const party = await PartyModel.findById(req.params.id);
  res.render("party/one.hbs", party);
});

router.post("/create", (req, res) => {
  const newParty = formatPartyInfos(req.body);
  // above : we created an object matching the Party's schema's spec
  PartyModel.create(newParty) // let's insert :)
    .then(() => res.redirect("/party/all"))
    .catch((dbErr) => res.send(JSON.stringify(dbErr)));
});

// the actual path here is /party/update/:id
router.get("/update/:id", async (req, res) => {
  const party = await PartyModel.findById(req.params.id);
  res.render("party/update.hbs", party);
});

router.post("/update/:id", async (req, res) => {
  try {
    await PartyModel.findByIdAndUpdate(
      req.params.id,
      formatPartyInfos(req.body)
    );

    res.redirect("/party/all");
  } catch (err) {
    res.json(err);
  }
});

// the actual path here is /party/delete/:id
router.get("/delete/:id", (req, res) => {
  res.send("todo delete");
});

module.exports = router;
