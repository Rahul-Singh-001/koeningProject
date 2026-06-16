const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {

    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      user
    });

  } catch (err) {

    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

exports.getUsers = async (req, res) => {

  const users = await User.find();

  res.status(200).json(users);
};

exports.updateUser = async (req, res) => {

  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {

  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: "User Deleted"
  });
};