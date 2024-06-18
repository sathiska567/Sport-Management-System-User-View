const express = require('express');
const { GetPlayerReviewController } = require('../../Controllers/GetPlayerReviewController/GetPlayerReviewController');
const router = express.Router();


// get profile review
router.post("/review",GetPlayerReviewController)

module.exports = router;