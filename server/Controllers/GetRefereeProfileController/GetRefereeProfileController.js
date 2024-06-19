const RefreeProfileDetailsModel = require("../../models/RefreeProfileDetailsModel/RefreeProfileDetailsModel")
const RefreeProfileImageModel = require("../../models/RefreeProfileImageModel/RefreeProfileImageModel")
const RefreeCoverImageModel = require("../../models/RefreeCoverImageModel/RefreeCoverImageModel")

const GetRefereeProfileController = async (req, res) => {
   try {
     const profileData = await RefreeProfileDetailsModel.find({});
     const imageResponse = await RefreeProfileImageModel.find({});
     const coverImageResponse = await RefreeCoverImageModel.find({});
 
     const profileDataWithImages = profileData.map(profile => {
       const image = imageResponse.find(img => img.RefreeId === profile.RefreeId);
       const coverImage = coverImageResponse.find(coverImg => coverImg.RefreeId === profile.RefreeId);
       return {
         ...profile._doc, // spreading the profile data
         image: image ? image.RefreeprofileImageSecureLink : null, // adding the image URL
         coverImage: coverImage ? coverImage.RefreeCoverImageSecureLink : null, // adding the cover image URL
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
 

module.exports = {GetRefereeProfileController};