const router = require("express").Router();
let User = require("../schemas/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerValidation = require("../validation/register.js");
const loginValidation = require("../validation/login.js");
const forgotValidation = require("../validation/forgot.js");
const nodemailer = require("nodemailer");
const keys = require("../config/keys.js");
const passport = require("passport");
const isEmpty = require("is-empty");
require("dotenv").config();

router.route("/").get((req, res) => {
  User.find().then((users) => res.json(users));
  //.catch((err) => res.status(400).json("error"));
});

router.route("/register").post((req, res) => {
  //return value of the registerValidation function on user register request
  const { errors, isValid } = registerValidation(req.body);

  //check if valid
  if (!isValid) {
    //return 400 status and the type of errors that occured in json format
    return res.status(400).json(errors);
  }
  if (req.body.password.length < 3) {
    return res.status(400).json({ password: "password is too short" });
  }
  //trying to find if the user already exist in the database, if exist, return error
  //elses make a new user in database and save the new user
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      User.findOne({ username: req.body.username }).then((user) => {
        if (user) {
          return res.status(400).json({
            email: "Email already exist",
            username: "username already exist",
          });
        } else {
          return res.status(400).json({ email: "Email already exist" });
        }
      });
    } else {
      User.findOne({ username: req.body.username }).then((user) => {
        if (user) {
          return res.status(400).json({ username: "username already exist" });
        } else {
          //create the new user
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
          });

          //saves the user in the database with hashed passwords for encryption
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                throw err;
              }
              newUser.password = hash;
              newUser
                .save()
                .then((user) => res.json(user))
                .catch((err) => console.log(err));
            });
          });
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = loginValidation(req.body);

  //check if it is valid
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  //find the user by username
  User.findOne({ username }).then((user) => {
    //check if user exists
    if (!user) {
      return res.status(404).json({ userNotFound: "username does not exist" });
    }

    //check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //user matched, then create JWT payload
        const payload = {
          id: user.id,
          username: user.username,
        };
        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 31556926 },
          (err, token) => {
            res.json({
              success: true,
              toke: "Bearer" + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordIncorrect: "Password incorrect" });
      }
    });
  });
});

router.post("/forgot", (req, res) => {
  const { errors, isValid } = forgotValidation(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    //the email exist in database
    if (user) {
      const userEmail = user.email;
      const GMAIL_INFO = {
        service: "Gmail",
        auth: {
          user: process.env.serverEmail,
          pass: process.env.serverPWD,
        },
      };
      const serverEmail = nodemailer.createTransport(GMAIL_INFO);
      const clientEmail = {
        from: GMAIL_INFO.auth.user,
        to: userEmail,
        subject: "reset password",
        html: '<p> Click on this <a href="http://localhost:3000/reset">link</a> to reset your password.</p> ',
      };
      if (serverEmail.sendMail(clientEmail)) {
        console.log("sent");
        console.log(clientEmail);
      } else {
        console.log("error");
      }
    } else {
      return res.status(400).json({ email: "Email not found" });
    }
    //email doesn't exist
  });
});
module.exports = router;
