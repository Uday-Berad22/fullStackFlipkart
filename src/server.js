const express = require("express");
const path = require("path");
const hbs = require("hbs");

//crearting app
const app = express();
// storing required paths
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const p2 = path.join(__dirname, "../public/index.html");
const partialPath = path.join(__dirname, "../templates/partials");

//Registering all partials files
hbs.registerPartials(partialPath);

//seting view engine as hbs
app.set("view engine", "hbs");

//making template as a parent directory of views setting the changes
app.set("views", templatePath);

// static page showing
app.use(express.static(staticPath));

//home page request response
app.get("/", (req, res) => {
  res.render("index");
});

//about page request response
app.get("/about", (req, res) => {
  res.render("about");
});

//contact page request response
app.get("/contact", (req, res) => {
  res.render("contact");
});

//for any invalid url
app.get("*", (req, res) => {
  res.render("errorPage");
});

//server on
app.listen(3000, () => {
  console.log("Listening on port number 3000");
});
