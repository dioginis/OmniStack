const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-th0vq.mongodb.net/omnistack?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(3333);
