const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function resetValidation(user) {
  let errors = {};
  user.password = !isEmpty(user.password) ? user.password : "";
  user.password2 = !isEmpty(user.password2) ? user.password2 : "";

  //check password
  if (validator.isEmpty(user.password)) {
    errors.password = "password required";
  }

  if (validator.isEmpty(user.password2)) {
    errors.password2 = "password required";
  }

  if (user.password != user.password2) {
    errors.password2 = "passwords do not match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
