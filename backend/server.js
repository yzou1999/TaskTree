const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // helps connect to MONGODB
const passport = require("passport");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; //port the server will be on

app.use(cors()); //middleware
app.use(express.json()); //allow us to parse json, server sending and receiving json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("established");
});

const loginAndRegisterRouter = require("./routes/users");

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

const calendarRouter = require('./routes/CalendarRoute');
app.use("/", loginAndRegisterRouter);
app.use('/api/calendar', calendarRouter);


app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
