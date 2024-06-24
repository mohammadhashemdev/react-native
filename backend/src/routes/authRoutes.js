const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./../models/usersModel");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const newUser = await User.create({ email, password });

    const token = jwt.sign({ userId: newUser._id }, "MY_SUPER_SECRET_KEY");

    res.status(201).send("User created successfully");
  } catch (error) {
    return res.send(error.message);
  }

  next();
});

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password, user.password))) {
      return res.status(422).send({ error: "Invalid email or password..." });
    }

    const token = jwt.sign({ userId: user._id }, "MY_SUPER_SECRET_KEY");

    res.send({ token });
  } catch (error) {
    return res.send(error.message);
  }
});
module.exports = router;
