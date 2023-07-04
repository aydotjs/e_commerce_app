// importing essential packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoute")
// connecting to  database
dbConnect();
// reading environment variables
dotenv.config({
  path: "./config.env",
});
// parsing json from request body
app.use(express.json())
const PORT = process.env.PORT || 7000;

app.use("/api/user", authRouter)
app.use("/", (req, res) => {
  res.send("Hello from the server side");
});
// starting up my server
app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED LISTENING ON PORT ${PORT}`);
});
