const express = require("express");
const path = require("path");
const hbs = require("hbs");
const port = process.env.port || 8000;
//crearting app
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
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

//login page request response
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log("Username: " + username);
  console.log("Password: " + password);
  if (username == "Uday" && password == "1234")
    res.render("index", {
      status: "Uday",
    });
  else res.render("login");
});
//for any invalid url
app.get("*", (req, res) => {
  res.render("errorPage");
});

//server on
app.listen(port, () => {
  console.log("Listening on port number 8000");
});
