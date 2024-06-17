const CoachProfileModel = require("../../models/CoachProfileModel/CoachProfileModel")
const CoachImageModel = require("../../models/CoachImageModel/CoachImageModel")
const CoachCoverImageModel = require("../../models/CoachCoverImageModel/CoachCoverImageModel")

const GetCoachProfileController = async (req, res) => {
   try {
     const profileData = await CoachProfileModel.find({});
     const imageResponse = await CoachImageModel.find({});
     const coverImageResponse = await CoachCoverImageModel.find({});
 
     const profileDataWithImages = profileData.map(profile => {
       const image = imageResponse.find(img => img.coachId === profile.coachId);
       const coverImage = coverImageResponse.find(coverImg => coverImg.coachId === profile.coachId);
       return {
         ...profile._doc, // spreading the profile data
         image: image ? image.coachprofileImageSecureLink : null, // adding the image URL
         coverImage: coverImage ? coverImage.coachCoverImageSecureLink : null, // adding the cover image URL
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
 

module.exports = {GetCoachProfileController};