const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const checkAuth = require('../middleware/check-auth');
router.post("/login",UserController.LogInUser);
router.post("/signup",UserController.SignUpUser);
router.get("/u",checkAuth,UserController.getSingleUser);
router.put("/u",checkAuth, UserController.updateUser);
router.delete("/u",checkAuth, UserController.deleteUser);

module.exports = router;