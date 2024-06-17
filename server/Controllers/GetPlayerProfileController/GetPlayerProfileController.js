
const GetPlayerProfileController = (req,res)=>{
   try {
      console.log("hello");  
   } catch (error) {
         res.status(400).send({
           success:false,
           message:error.message,
         })
   }
}

module.exports = {GetPlayerProfileController};