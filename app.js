require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const hbs = require("hbs");
const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
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

app.get("/add-new-ironhacker", (req, res) => {
  res.render("formUser");
});

app.get("/api/ironhackers", (req, res) => {
  res.json(users);
});

/*  SHOULD BE LAST*/

app.listen(process.env.PORT, () => {
  console.log(`my webste is available at http://localhost:${process.env.PORT}`);
});
