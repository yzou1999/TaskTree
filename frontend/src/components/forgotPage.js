import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { forgotPWD } from "../actions/authActions";
import classnames from "classnames";
import axios from "axios";

class Forgot extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
    };
    this.props.forgotPWD(userData, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <h1 style={{ color: "#A6CEB6" }} align="middle">
          Forgot form
        </h1>
        <form align="middle" onSubmit={this.onSubmit}>
          <label>Email: </label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
            className={classnames("", {
              invalid: errors.email,
            })}
          ></input>
          <span className="red-text">{errors.email}</span>
          <br></br>
          <br></br>
          <input type="submit" value="enter"></input>
        </form>
      </div>
    );
  }
}

Forgot.propTypes = {
  forgotPWD: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { forgotPWD })(Forgot);
