const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {

    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({
      success: true,
      user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getUsers = async (req, res) => {
  try {

    const users = await User.find()
      .select("-password");

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.updateUser = async (req, res) => {
  try {

    const user =
      await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.deleteUser = async (req, res) => {
  try {

    const user =
      await User.findByIdAndDelete(
        req.params.id
      );

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User Deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.searchUsers = async (req, res) => {
  try {

    const keyword =
      req.query.keyword || "";

    const users =
      await User.find({
        $or: [
          {
            name: {
              $regex: keyword,
              $options: "i"
            }
          },
          {
            email: {
              $regex: keyword,
              $options: "i"
            }
          }
        ]
      }).select("-password");

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};