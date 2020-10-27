const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const { MONGOURI } = require("./keys");
mongoose.connect(MONGOURI);
mongoose.connection.on("connected", () => {
  console.log("connected");
});
mongoose.connection.on("errror", (err) => {
  console.log("not connected", err);
});
app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
