const playerProfileModel = require("../../models/PlayerProfileModel/PlayerProfileModel")
const PlayerImageModel = require("../../models/PlayerImageModel/PlayerImageModel")
const PlayerCoverImageModel = require("../../models/PlayerCoverImageModel/PlayerCoverImageModel")

const GetPlayerProfileController = async (req, res) => {
   try {
     const profileData = await playerProfileModel.find({});
     const imageResponse = await PlayerImageModel.find({});
     const coverImageResponse = await PlayerCoverImageModel.find({});
 
     const profileDataWithImages = profileData.map(profile => {
       const image = imageResponse.find(img => img.playerId === profile.playerId);
       const coverImage = coverImageResponse.find(coverImg => coverImg.playerId === profile.playerId);
       return {
         ...profile._doc, // spreading the profile data
         image: image ? image.PlayerprofileImageSecureLink : null, // adding the image URL
         coverImage: coverImage ? coverImage.PlayerCoverImageSecureLink : null, // adding the cover image URL
       };
     });
 
     res.status(200).send({
       success: true,
       message: "Profile Data Fetch Successfully",
       profileData: profileDataWithImages, // Sending the merged data
     });
   } catch (error) {
     res.status(400).send({
       success: false,
       message: error.message,
     });
   }
 }
 


const GetProfileImageController = async(req,res)=>{
  try {
   const imageResponse = await PlayerImageModel.find({})

   res.status(200).send({
      success:true,
      message:"Image Fetch Successfully",
      imageResponse
    })
   
  } catch (error) {
     res.status(400).send({
       success:false,
       message:error.message,
     })
  }
}

module.exports = {GetPlayerProfileController , GetProfileImageController};