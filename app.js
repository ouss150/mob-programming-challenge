require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const hbs = require("hbs");
const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/partials");

const users = [
  {
    name: "Doug Crockford",
    email: "doug@wwwrrrld.com",
    favoriteLangage: "JS",
  },
  {
    name: "Jill Fresh",
    email: "bill@bill.bill",
    favoriteLangage: "CSS",
  },
  {
    name: "Tina Hype",
    email: "tina@hipster.io",
    favoriteLangage: "Go",
  },
  {
    name: "Lou Fast",
    email: "gonna@getsome.org",
    favoriteLangage: "Rust",
  },
  {
    name: "Jim Struggles",
    email: "intern@corporate.biz",
    favoriteLangage: "Java",
  },
  {
    name: "Kim Brain",
    email: "functor@monad.dev",
    favoriteLangage: "Haskel",
  },
];

const images = ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];

app.get("/", (req, res) => {
  res.render("home", { images });
});

app.get("/my-dev-squad", (req, res) => {
  res.render("allUsers", { users });
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
