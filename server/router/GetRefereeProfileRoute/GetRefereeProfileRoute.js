const express = require('express');
const { GetRefereeProfileController } = require('../../Controllers/GetRefereeProfileController/GetRefereeProfileController');
const router = express.Router();


// get profile controller
router.get("/profile",GetRefereeProfileController)


module.exports = router;