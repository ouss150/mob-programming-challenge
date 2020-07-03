require("dotenv").config(); // .env exposed
require("./config/mongodb"); // databse connected
require("./helpers/hbs");

// BASE DEPENDENCIES
const express = require("express");
const hbs = require("hbs");
const app = express();

// PUBLIC ASSETS
app.use(express.static(__dirname + "/public"));

// MANDATORY 2 LINES BELOW !!!!
// allow the app to parse the posted data
app.use(express.urlencoded({ extended: true })); // synchronous
app.use(express.json()); // async (ajax ready)

// TEMPLATE SETUP
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// var declared with app.locals are accessible in every template file
app.locals.cohort = "806";

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

//ROUTES
app.get("/", (req, res) => {
  const templateData = { images: images };
  res.render("home", templateData);
});

// INCLUDE ROUTERS

// first step : require the routers
const routerAPI = require("./routes/api");
const routerParty = require("./routes/party");
const routerUser = require("./routes/user");

// second step : make the app aware oif those routers
app.use(`/api`, routerAPI);
app.use("/party", routerParty); 
// line above : all the routes are "prefixed" with /party 
app.use(routerUser);

// SERVER KICKSTART
/*  THIS SHOULD BE LAST */

app.listen(process.env.PORT, () => {
  console.log(`my webste is available at http://localhost:${process.env.PORT}`);
});
