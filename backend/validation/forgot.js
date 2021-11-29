const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function forgotValidation(user) {
  let errors = {};
  user.email = !isEmpty(user.email) ? user.email : "";

  //checking if email input is filled and if it is valid
  if (validator.isEmpty(user.email)) {
    errors.email = "Email required";
  } else if (!validator.isEmail(user.email)) {
    errors.email = "invalid email";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
