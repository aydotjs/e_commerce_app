const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");
exports.createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });

  if (!findUser) {
    // create a new user
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
    // user already exist
    throw new Error("User already Exists")
  }
});
