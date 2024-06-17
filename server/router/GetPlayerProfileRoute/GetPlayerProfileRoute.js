const express = require('express');
const { GetPlayerProfileController, GetProfileImageController } = require('../../Controllers/GetPlayerProfileController/GetPlayerProfileController');
const router = express.Router();


// get profile controller
router.get("/profile",GetPlayerProfileController)


// GET All PROFILE IMAGE
router.get("/get-all-profile-image",GetProfileImageController)

module.exports = router;