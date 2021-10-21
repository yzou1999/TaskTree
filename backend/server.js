const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // helps connect to MONGODB

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; //port the server will be on

app.use(cors()); //middleware
app.use(express.json()); //allow us to parse json, server sending and receiving json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("established");
})

const loginRouter = require('./routes/users');
const registerRouter = require('./routes/users');

app.use('/loggin',loginRouter);
app.use('/register',registerRouter);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});