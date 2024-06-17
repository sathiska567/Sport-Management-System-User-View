const express = require('express');
const { GetCoachProfileController } = require('../../Controllers/GetCoachProfileController/GetCoachProfileController');
const router = express.Router();


// get profile controller
router.get("/profile",GetCoachProfileController)


module.exports = router;