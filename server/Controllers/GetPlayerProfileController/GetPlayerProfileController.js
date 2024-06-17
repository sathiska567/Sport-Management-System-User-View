const playerProfileModel = require("../../models/PlayerProfileModel/PlayerProfileModel")

const GetPlayerProfileController = async(req,res)=>{
   try {
      console.log("hello");  
      const profileData = await playerProfileModel.find({})

      res.status(200).send({
         success:true,
         message:"Profile Data Fetch Successfully",
         profileData,
       })

   } catch (error) {
         res.status(400).send({
           success:false,
           message:error.message,
         })
   }
}

module.exports = {GetPlayerProfileController};