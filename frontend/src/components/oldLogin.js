import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.loginUser(userData);
    console.log(userData);
  };
  render() {
    const { errors } = this.state;
    console.log(errors);
    console.log(this.state.errors);

    return (
      <div className="container">
        <h1 style={{ color: "#A6CEB6" }} align="middle">
          Login form
        </h1>
        <form align="middle" onSubmit={this.onSubmit}>
          <label>Username: </label>
          <input
            id="username"
            type="text"
            onChange={this.onChange}
            value={this.state.username}
            error={errors.username}
            className={classnames("", {
              invalid: errors.username || errors.userNotFound,
            })}
          ></input>
          <span className="red-text">
            {errors.username}
            {errors.userNotFound}
          </span>
          <br />
          <br />
          <label>Password: </label>
          <input
            id="password"
            type="password"
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            className={classnames("", {
              invalid: errors.password || errors.passwordIncorrect,
            })}
          ></input>
          <span className="red-text">
            {errors.password}
            {errors.passwordIncorrect}
          </span>
          <br />
          <br />
          <input type="submit" value="Log In"></input>
        </form>
        <Link to="" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> 
              Don't have an account? Sign Up
            </Link>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
