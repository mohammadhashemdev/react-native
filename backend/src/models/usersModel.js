const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

usersSchema.methods.comparePassword = async function (
  candidatePass,
  actualPass
) {
  return await bcrypt.compare(candidatePass, actualPass);
};

const User = mongoose.model("User", usersSchema);

module.exports = User;
