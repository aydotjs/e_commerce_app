const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
dbConnect();
dotenv.config({
  path: "./config.env",
});
const PORT = process.env.PORT || 7000;

app.use("/", (req, res) => {
  res.send("Hello from the server side");
});
app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED LISTENING ON PORT ${PORT}`);
});
