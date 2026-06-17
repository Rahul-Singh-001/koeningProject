const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// Create User (optional: keep public or protect)
router.post("/", createUser);

// Protected Routes
router.get("/", authMiddleware, getUsers);

router.put("/:id", authMiddleware, updateUser);

router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;