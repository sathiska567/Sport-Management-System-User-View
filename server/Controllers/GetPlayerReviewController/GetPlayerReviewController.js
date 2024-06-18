const CoachReviewModel = require("../../models/CoachReviewModel/CoachReviewModel")

const GetPlayerReviewController = async(req,res)=>{
  try {
    const {playerId} = req.body

    const reviewData = await CoachReviewModel.find({playerId:playerId})

    res.status(200).send({
        success:true,
        message:"Review Fetch Successfully",
        data:reviewData,
      }) 
        
  } catch (error) {
       res.status(400).send({
         success:false,
         message:error.message
       }) 
  }
}


module.exports = {GetPlayerReviewController}