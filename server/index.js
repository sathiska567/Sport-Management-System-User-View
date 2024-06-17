require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");

require("./db/mongoDb"); 

const GetPlayerProfileRoute = require("./router/GetPlayerProfileRoute/GetPlayerProfileRoute")
// const GetProfileImageRoute = require("./router/GetProfileImageRoute/GetProfileImageRoute")
const PointTableFullCode = require("./router/GetPlayerProfileRoute/PointTableCodeRoute/PointTableCodeRoute")

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS



// GET PLAYERS PROFILE
app.use("/api/v1/get-player",GetPlayerProfileRoute)

// GET PLAYERS PROFILE IMAGE
// app.use("/api/v1/profile",GetProfileImageRoute)

//Point table code
app.use("/api/v1/PointTableFullCode",PointTableFullCode);


const PORT = process.env.PORT || 3000; // Define a default port if PORT is not set in .env

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

