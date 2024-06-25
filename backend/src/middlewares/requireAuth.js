const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("./../models/usersModel");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send("You are not logged in");
  }

  const token = authorization.split(" ")[1];
  try {
    const decodedToken = await promisify(jwt.verify)(
      token,
      "MY_SUPER_SECRET_KEY"
    );

    const currentUser = await User.findById(decodedToken.userId);
    if (!currentUser) {
      return res
        .status(401)
        .send("The user belonging to this token no longer exists");
    }

    req.user = currentUser;
    next();
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
};
