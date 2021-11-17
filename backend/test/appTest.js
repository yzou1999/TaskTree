const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
const db = require("../test/db");

const app = express();

app.use(cors()); //middleware
app.use(express.json()); //allow us to parse json, server sending and receiving json

const loginAndRegisterRouter = require("../routes/users");

// Passport middleware
app.use(passport.initialize());
// Passport config
require("../config/passport")(passport);

const calendarRouter = require("../routes/CalendarRoute");
app.use("/", loginAndRegisterRouter);
app.use("/api/calendar", calendarRouter);

module.exports = app;
