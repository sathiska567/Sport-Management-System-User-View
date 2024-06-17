const express = require('express');
const { GetPlayerProfileController } = require('../../Controllers/GetPlayerProfileController/GetPlayerProfileController');
const router = express.Router();


// get profile controller
router.post("/profile",GetPlayerProfileController)



module.exports = router;