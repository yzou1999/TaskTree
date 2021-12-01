
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Navbar extends Component {

    
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
          <Router>
              <nav className="navbar navbar-expand-lg navbar-light " >
                <a class="navbar-brand" href="/" target="_blank"> </a>
                <a className="nav-link" href="/dashboard" >TaskTree </a> 

                <div className="collpase navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                
                  </ul>
                </div>

                    <li class="d-flex flex-row">
                    <a className="nav-link" href="#" onClick={this.onLogoutClick}>Logout </a> 
                    </li>
              </nav>
              <br/>
              
            
          </Router>
        );
      }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);