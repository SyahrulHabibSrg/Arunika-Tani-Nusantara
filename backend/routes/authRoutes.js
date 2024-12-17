const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/authController");
const { loginUser } = require("../controllers/authController");
const { getUsers } = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);
router.get("/users", getUsers);

module.exports = router;
