require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");

require("./db/mongoDb"); 

const GetPlayerProfileRoute = require("./router/GetPlayerProfileRoute/GetPlayerProfileRoute")
// const GetProfileImageRoute = require("./router/GetProfileImageRoute/GetProfileImageRoute")
const PointTableFullCode = require("./router/PointTableCodeRoute/PointTableCodeRoute")
const GetCoachProfileRoute = require("./router/GetCoachProfileRoute/GetCoachProfileRoute")
const GetEOProfileRoute = require("./router/GetEOProfileRoute/GetEOProfileRoute")
const GetPlayerReviewRoute = require("./router/GetPlayerReviewRoute/GetPlayerReviewRoute")
const GetRefereeReviewRoute = require("./router/GetRefereeProfileRoute/GetRefereeProfileRoute")

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS



// GET PLAYERS PROFILE
app.use("/api/v1/get-player",GetPlayerProfileRoute)

// GET PLAYERS PROFILE IMAGE
app.use("/api/v1/coach",GetCoachProfileRoute)

// GET PLAYERS PROFILE IMAGE
app.use("/api/v1/eventOrganizer",GetEOProfileRoute)

// GET PLAYERS REVIEW
app.use("/api/v1/player",GetPlayerReviewRoute)

// GET REFEREE PROFILE
app.use("/api/v1/referee",GetRefereeReviewRoute)

//Point table code
app.use("/api/v1/PointTableFullCode",PointTableFullCode);


const PORT = process.env.PORT || 3000; // Define a default port if PORT is not set in .env

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

