const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.ATLAS_URI;

function connect() {
  return new Promise((resolve, reject) => {
    let Mockgoose = require("mockgoose").Mockgoose;
    let mockgoose = new Mockgoose(mongoose);
    mockgoose
      .prepareStorage()
      .then(() => {
        mongoose.connect(uri, (err, res) => {
          if (err) return reject(err);
          resolve();
        });
      })
      .catch(reject);
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
