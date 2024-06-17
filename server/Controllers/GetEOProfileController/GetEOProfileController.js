const EventOrganizerProfileModel = require("../../models/EventOrganizerProfileModel/EventOrganizerProfileModel")
const EventOrganizerImageModel = require("../../models/EventOrganizerImageModel/EventOrganizerImageModel")
const EventOrganizerCoverImageModel = require("../../models/EventOrganizerCoverImageModel/EventOrganizerCoverImageModel")

const GetEOProfileController = async (req, res) => {
   try {
     const profileData = await EventOrganizerProfileModel.find({});
     const imageResponse = await EventOrganizerImageModel.find({});
     const coverImageResponse = await EventOrganizerCoverImageModel.find({});
 
     const profileDataWithImages = profileData.map(profile => {
        const image = imageResponse.find(img => img.eventOrganizerId === profile.eventOrganizerId);
       const coverImage = coverImageResponse.find(coverImg => coverImg.eventOrganizerId === profile.eventOrganizerId);
       return {
         ...profile._doc, // spreading the profile data
         image: image ? image.eventOrganizerprofileImageSecureLink: null, // adding the image URL
         coverImage: coverImage ? coverImage.eventOrganizerCoverImageSecureLink : null, // adding the cover image URL
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
 

module.exports = {GetEOProfileController};