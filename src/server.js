const express = require("express");
const app = express();
const conn = require("./db/conn");
const path = require("path");
const hbs = require("hbs");
const PORT = process.env.PORT || 8000;
const router = require("./router/user");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// storing required paths
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//Registering all partials files
hbs.registerPartials(partialPath);

//seting view engine as hbs
app.set("view engine", "hbs");

//making template as a parent directory of views setting the changes
app.set("views", templatePath);

// static page showing
app.use(express.static(staticPath));

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is on PORT Number ${PORT} ....`);
});
