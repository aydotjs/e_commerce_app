const User = require("../model/userModel");

exports.createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne(email);
  if (!findUser) {
    // create a new user
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
    // user already exist
    res.json({
      msg: "User already exists",
      status: "fail",
    });
  }
};
