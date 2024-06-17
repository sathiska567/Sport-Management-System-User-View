require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");

require("./db/mongoDb"); 

const GetPlayerProfileRoute = require("./router/GetPlayerProfileRoute/GetPlayerProfileRoute")

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS



// GET PLAYERS PROFILE
app.use("/api/v1/get-player",GetPlayerProfileRoute)


const PORT = process.env.PORT || 3000; // Define a default port if PORT is not set in .env

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

