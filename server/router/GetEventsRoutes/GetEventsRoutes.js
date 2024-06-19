const express = require("express")
const { getEventsController } = require("../../Controllers/GetEventsController/GetEventsController")

const router = express.Router()




// CREATE EVENT ROUTE || POST
router.get("/get-all-events",getEventsController)






module.exports = router