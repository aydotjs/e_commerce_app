const express = require("express");
const authRouter = express.Router();
const { createUser } = require("../controller/userControl");
authRouter.route("/").post("/register", createUser);
console.log(authRouter);
module.exports = authRouter;
