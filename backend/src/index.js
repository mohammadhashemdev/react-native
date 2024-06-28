const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("./middlewares/requireAuth");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");

const app = express();

const dbURI = `mongodb+srv://hashimhanifi9:ZMSRV22aDENRgWsC@cluster0.goibszf.mongodb.net/maptrack?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log("database connected successfully...");
});

// body parser
app.use(express.json());

app.use("/", authRoutes);
app.use("/", requireAuth, trackRoutes);

mongoose.connection.on("error", (error) => {
  console.log("Error occured while connecting the DB", error);
});

app.listen(3000, () => {
  console.log(`app is listening on port ${3000}...`);
});
