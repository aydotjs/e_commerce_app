// importing essential packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoute");
const {notFound, errorHandler} = require("./middleware/errorMiddleware")
// connecting to  database
dbConnect();
// reading environment variables
dotenv.config({
  path: "./config.env",
});
// parsing json from request body
app.use(express.json())
const PORT = process.env.PORT || 7000;

app.use("/api/users", authRouter)
app.use(notFound);
app.use(errorHandler)
// starting up my server
app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED LISTENING ON PORT ${PORT}`);
});
