const jwt = require("jsonwebtoken");
const User = require("./../models/usersModel");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      status: "failed",
      message: "You are not logged in",
    });
  }

  const token = authorization.split(" ")[1];
  jwt.verify(token, "MY_SUPER_SECRET_KEY", async (error, payload) => {
    if (error) {
      return res.status(401).json({
        status: "failed",
        message: "You are not logged in.",
      });
    }

    const { userId } = payload;

    const user = await User.findById(userId);

    req.user = user;

    next();
  });
};
