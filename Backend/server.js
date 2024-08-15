const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

//load the environment variables from .env
dotenv.config();

const router = require("./modules/router");

//set up the Express app
const app = express();
const port = process.env.PORT || "8888";

const origin = process.env.ORIGIN;

// Use CORS middleware
app.use(
   cors({
      origin: ORIGIN, // Allow requests from this origin
      methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
      credentials: true, // Allow credentials (e.g., cookies)
   }),
);

app.use("/api", router);

app.use((err, req, res, next) => {
   console.error("Error Stack==>", err.stack);
   res.status(500).send("Internal Server Error");
});

//set up server listening
app.listen(port, () => {
   console.log(`Listening on http://localhost:${port}`);
});
