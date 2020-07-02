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
    name: "Bill",
    email: "bill@bill.bill",
    favoriteLangage: "JS",
  },
];

const images = ["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"];

app.listen(process.env.PORT, () => {
  console.log(`my webste is available at http://localhost:${process.env.PORT}`);
});
