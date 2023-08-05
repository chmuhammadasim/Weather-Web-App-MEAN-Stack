const weatherController = require('../controllers/weather.controller.js');
const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth.js');

router.post("/",checkAuth,weatherController.getWeatherByCityName);
router.put("/fav",checkAuth,weatherController.updateUserCity);
router.get("/fav",checkAuth,weatherController.getUserCity);
router.delete("/fav",checkAuth,weatherController.deleteUserCity);
module.exports = router;