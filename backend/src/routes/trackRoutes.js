const express = require("express");
const Tracks = require("./../models/trackModel");

const router = express.Router();

router.get("/tracks", async (req, res) => {
  const tracks = await Tracks.find({ userId: req.user });
  res.send(tracks);
});

router.post("/tracks", async (req, res) => {
  const { name, locations } = req.body;

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: "Please provide a name and locations" });
  }

  try {
    const newTrack = await Tracks.create({
      name,
      locations,
      userId: req.user._id,
    });
    res.send(newTrack);
  } catch (error) {
    res.status(422).send({ err: error.message });
  }
});

module.exports = router;
