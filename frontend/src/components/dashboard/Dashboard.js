import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from 'react-router-dom';
import { Row, Col, Card, Table } from 'react-bootstrap';




class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "100%" }} className="container valign-wrapper">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.username}
              <p className="flow-text grey-text text-darken-1">
                Welcome to your dashboard!{" "}
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                color: '#A6CEB6'
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3" 
            >
              Logout
            </button>
            <React.Fragment>

<Row>

    <Col md={6} xl={4}>

        <Card>

            <Card.Body>

                <h6 className="mb-4">Number of Tasks completed</h6>

                <div className="row d-flex align-items-center">

                    <div className="col-9">

                        <h3 className="f-w-300 d-flex align-items-center m-b-0">

                            <i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> 0

                        </h3>

                    </div>

                </div>

            </Card.Body>

        </Card>

    </Col>

    <Col md={6} xl={4}>

        <Card>

            <Card.Body>

                <h6 className="mb-4">Number of trees planted</h6>

                <div className="row d-flex align-items-center">

                    <div className="col-9">

                        <h3 className="f-w-300 d-flex align-items-center m-b-0">

                            <i className="feather icon-arrow-down text-c-red f-30 m-r-5" /> 0

                        </h3>

                    </div>


                </div>

            </Card.Body>

        </Card>

    </Col>

    <Col xl={4}>

        <Card>

            <Card.Body>

                <h6 className="mb-4">Number of badges </h6>

                <div className="row d-flex align-items-center">

                    <div className="col-9">

                        <h3 className="f-w-300 d-flex align-items-center m-b-0">

                            <i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> 0

                        </h3>

                    </div>

                </div>


            </Card.Body>

        </Card>

    </Col>

    <Col md={6} xl={8}>

        <Card>

            <Card.Header>

                <Card.Title as="h5" style={{ color: '#A6CEB6' }}  >Calendar </Card.Title> 

            </Card.Header>

            <Card.Body>



            </Card.Body>

        </Card>

    </Col>

    <Col md={6} xl={4}>

        <Card className="bg-c-blue">

            <Card.Header className="borderless">

            <Card.Title as="h5" style={{ color: '#A6CEB6' }}  >Tasks </Card.Title> 


            </Card.Header>

        

        </Card>

        <Card>

            

        </Card>

    </Col>
</Row>

</React.Fragment>



            
          </div>


          
      
      </div>

      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
