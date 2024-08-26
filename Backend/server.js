const express = require("express");
const { NODE_ENV, PORT } = require("./src/config/env.js");
const connectDB = require("./src/config/ConnectDB.js");
const authRoutes = require("./src/routes/authRoutes.js");
const cors = require("cors");

// Initialize the Express app
const app = express();

// Enable CORS

const corsOptions = {
  origin: "*", // change this to your frontend URL
  credentials: true,
};

app.use(cors(corsOptions));

// Connect to the database
connectDB();

app.use(express.json());

app.use(authRoutes);

const port = PORT || 8081;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
