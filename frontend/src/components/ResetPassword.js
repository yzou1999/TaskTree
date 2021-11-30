import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { resetPWD } from "../actions/authActions";
import classnames from "classnames";
import axios from "axios";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      password2: "",
      errors: {},
    };
  }
  //shows errors
  componentWillReceiveProps(nextProps) {
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
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.resetPWD(
      userData,
      this.props.history,
      this.props.match.params.resetToken
    );
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="resetContainer">
        <h1 style={{ color: "#A6CEB6" }} align="middle">
          Reset
        </h1>
        <form align="middle" onSubmit={this.onSubmit}>
          <label>new password: </label>
          <input
            id="password"
            type="password"
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            className={classnames("", {
              invalid: errors.password,
            })}
          ></input>
          <span className="red-text">{errors.password}</span>
          <br />
          <br />
          <label>confirm password: </label>
          <input
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id="password2"
            type="password"
            className={classnames("", {
              invalid: errors.password2,
            })}
          ></input>
          <span className="red-text">{errors.password2}</span>
          <br />
          <br />
          <input type="submit" value="enter"></input>
        </form>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  resetPWD: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { resetPWD })(
  withRouter(ResetPassword)
);
