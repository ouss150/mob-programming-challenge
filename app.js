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

// BASE ROUTES

app.get("/", (req, res) => {
  const templateData = { images: ["img1.jpg", "img2.jpg", "img3.jpg"] };
  res.render("home", {templateData, js: ["foo"]});
});

app.get("/bars", (req, res) => {
  res.render("bars", {
    pageTitle: "Bars",
    js: ["form-bar-handler", "api-handler"]
  });
});


// SPLIT ROUTERS

// first step : require the routers
const routerAPIUser = require("./routes/api.user");
const routerAPIBar = require("./routes/api.bar");
const routerParty = require("./routes/party");
const routerUser = require("./routes/user");

// second step : make the app aware of those routers
app.use("/api/bar", routerAPIBar);
app.use(`/api/user`, routerAPIUser);
app.use("/party", routerParty); 
// 2 lines above : all the routes are "prefixed" with /party 
app.use(routerUser);

// SERVER KICKSTART
/*  THIS SHOULD BE LAST */

app.listen(process.env.PORT, () => {
  console.log(`my webste is available at http://localhost:${process.env.PORT}`);
});
