const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://beradug22:udaydb1234@cluster0.kdi0gs9.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    "connection Successful................";
  })
  .catch((err) => {
    console.log("connection failed ...");
  });
