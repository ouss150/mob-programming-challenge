require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const hbs = require("hbs");
const app = express();

// define public folder
app.use(express.static(__dirname + "/public"));

// allow the app to parse the posted data
app.use(express.urlencoded({ extended: true })); // synchronous
app.use(express.json()); // async (ajax ready)


app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

const images = ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];

const UserModel = require("./models/User");

app.get("/", (req, res) => {
  res.render("home", { images });
});

app.get("/my-dev-squad", (req, res) => {
  UserModel.find()
    .then((dbRes) => {
      res.render("allUsers", { users: dbRes });
    })
    .catch((err) => {
      console.error(err);
    });
});

// get will serve the page (with the form)
app.get("/add-new-ironhacker", (req, res) => {
  res.render("formUser");
});

// post will receive the informtion from the form
app.post("/add-new-ironhacker", (req, res) => {
  console.log(req.body); // will ALLWAYS hold the posted data
  
  UserModel.create(req.body)
  .then(dbRes => {
    res.send("YAY DATA INSERTED");
  })
  .catch(dbErr => {
    res.send("OH NO AN ERROR OCCURED");
  })
  
});


app.get("/delete-ironhacker/:id", (req, res) => {
  console.log(req.params.id);
  
  UserModel.findByIdAndRemove(req.params.id)
  .then(dbRes => {
    res.redirect("/my-dev-squad");
  })
  .catch(dberror => {
    res.send("OH NOOOO : ERROR while user removal");
  })
})


app.get("/api/ironhackers", (req, res) => {
  res.json(users);
});

/*  SHOULD BE LAST*/

app.listen(process.env.PORT, () => {
  console.log(`my webste is available at http://localhost:${process.env.PORT}`);
});
