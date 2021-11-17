const router = require("express").Router();
let User = require("../schemas/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerValidation = require("../validation/register.js");
const loginValidation = require("../validation/login.js");
const keys = require("../config/keys.js");
const passport = require("passport");

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

  //trying to find if the user already exist in the database, if exist, return error
  //elses make a new user in database and save the new user
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exist" });
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

module.exports = router;
