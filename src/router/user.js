const express = require("express");
const router = new express.Router();
const User = require("../modules/user");

router.get("/", (req, res) => {
  res.redirect("index");
});

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/registration", (req, res) => {
  res.render("registration");
});

router.post("/registration", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.redirect("login");
  } catch (err) {
    res.status(404).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const findUser = await User.find({
      $and: [{ username: username }, { password: password }],
    });
    if (!findUser.length) {
      console.log(username + " " + password);
      res.status(404).send("Incorrect Username or Password");
    }
    res.render("index", {
      status: username,
    });
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get("/cart", (req, res) => {
  res.render("emptyCart");
});

router.get("*", (req, res) => {
  res.render("errorPage");
});

module.exports = router;
