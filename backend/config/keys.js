require("dotenv").config();

module.exports = {
  mongoURI: process.env.ATLAS_URI,
  secretOrKey: "secret",
};
