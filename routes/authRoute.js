const express = require("express");
const authRouter = express.Router();
const { createUser } = require("../controller/userControl");
authRouter.post("/", createUser);

module.exports = authRouter;
