// jest.useFakeTimers();
const users = require("../routes/users");
const request = require("supertest");
const express = require("express");
const expect = require("chai").expect;
const app = express();
const series = require("async/series");
const mongoose = require("mongoose"); // helps connect to MONGODB
require("dotenv").config();
//import { cleanup } from '@testing-library/react-native';

// var server = app.listen("http://localhost:5000/");

const loginRouter = require("../routes/users");
app.use(express.urlencoded({ extended: false }));
app.use("/loggin", loginRouter);

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri);
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("established");
// });

describe("Testing Basic API", () => {
  it("home route works", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", "text/html; charset=utf-8")
      .end(done);
  });

  it("testing login endpoints", async () => {
    const resp = await request(app)
      .post("/loggin/add")
      .send({ username: "hey", password: "123123" });
    //console.log(resp);
    expect(resp.body).to.equal({});
  });
});

// connection.close();
// server.close();

// describe("testing route works", (done) => {
//   var agent = request(app);
//   agent
//     .post("/loggin/add")
//     .send({ username: "hey", password: "123123" })
//     .end(() => {
//       agent
//         .get("/loggin")
//         .expect({ username: "hey", password: "123123" })
//         .end(done);
//     });
// });

// describe("testing route works", (done) => {
//   var agent = request(app);
//   series(
//     [
//       function (cb) {
//         agent.post("/loggin/add").send({ username: "hey", password: "123123" });
//       },
//       function (cb) {
//         agent
//           .get("/loggin")
//           .expect({ username: "hey", password: "123123" }, cb);
//       },
//     ],
//     done
//   );
// });
