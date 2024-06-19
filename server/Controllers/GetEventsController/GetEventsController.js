const  createEventModel = require("../../models/GetEventModel/GetEventModel");


const getEventsController = async (req, res) => {
    try {
       const data = await createEventModel.find({});
 
       if (!data) {
          return res.status(404).send({
             success: false,
             message: "No Event Found"
          })
       }
 
       res.status(200).send({
          success: true,
          message: "All Events Fetch successfull",
          data
       })
 
    } catch (error) {
       res.status(400).send({
          success: false,
          message: "All Events Fetch Unsuccessfull",
          data
       })
    }
 }

module.exports = { getEventsController };