const express = require('express');
const { GetEOProfileController } = require('../../Controllers/GetEOProfileController/GetEOProfileController');
const router = express.Router();


// get profile controller
router.get("/profile",GetEOProfileController)


module.exports = router;