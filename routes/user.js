const express = require("express");
const router = new express.Router();

// MODELS
const UserModel = require("./../models/User");

// HARDCODED VALUES


router.get("/my-dev-squad", (req, res) => {
  // find all the users stored in users database collection
  UserModel.find() // this is an asynchronous process...
    // ... so you MUST wait for the answer ;)
    .then((dbRes) => res.render("user/all", { users: dbRes }))
    .catch((err) => console.error(err)); // and catch eventual
});

// below an alternative with async/await !!!!

// router.get("/my-dev-squad", async (req, res) => {
//   try {
//     res.render("allUsers", { users: await UserModel.find() });
//   } catch (err) {
//     console.error(err);
//   }
// });

// get will serve the page (with the form)
router.get("/add-new-ironhacker", (req, res) => {
  res.render("user/create");
});

// post will receive the informtion from the form
router.post("/add-new-ironhacker", (req, res) => {
  console.log(req.body); // will ALLWAYS hold the posted data
  // use the posted data to insert a new document in users database collection
  UserModel.create(req.body)
    .then((dbRes) => res.redirect("/add-new-ironhacker"))
    .catch((dbErr) => res.send("OH NO AN ERROR OCCURED"));
});

router.post("/update-ironhacker/:id", (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body)
    .then((dbRes) => res.redirect(`/my-dev-squad/ironhacker/${req.params.id}`))
    .catch((dbErr) => console.error(dbErr));
});

router.get("/delete-ironhacker/:id", (req, res) => {
  //console.log(req.params.id);
  // represent the variable part of the route (here the last segment (:id))
  // we are using this information just below to remove a user by its ID
  UserModel.findByIdAndRemove(req.params.id)
    .then((dbRes) => res.redirect("/my-dev-squad"))
    .catch((dbError) => res.send("OH NOOOO : ERROR while user removal"));
});

router.get("/my-dev-squad/ironhacker/:id", async (req, res, next) => {
  try {
    const ironhacker = await UserModel.findById(req.params.id);
    res.render("user/one", ironhacker);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
