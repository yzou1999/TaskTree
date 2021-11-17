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

                <Card.Title as="h5" className="text-white">

                    Earnings

                </Card.Title>

            </Card.Header>

            <Card.Body style={{ padding: '0 25px' }}>

                <div className="earning-text mb-0">

                    <h3 className="mb-2 text-white f-w-300">

                        {' '}

                        $4295.36 <i className="feather icon-arrow-up teal accent-3" />

                    </h3>

                    <span className="text-uppercase text-white d-block">Total Earnings</span>

                </div>



            </Card.Body>

        </Card>

        <Card>

            <Card.Body className="border-bottom">

                <div className="row d-flex align-items-center">

                    <div className="col-auto">

                        <i className="feather icon-zap f-30 text-c-green" />

                    </div>

                    <div className="col">

                        <h3 className="f-w-300">235</h3>

                        <span className="d-block text-uppercase">total ideas</span>

                    </div>

                </div>

            </Card.Body>

            <Card.Body>

                <div className="row d-flex align-items-center">

                    <div className="col-auto">

                        <i className="feather icon-map-pin f-30 text-c-blue" />

                    </div>

                    <div className="col">

                        <h3 className="f-w-300">26</h3>

                        <span className="d-block text-uppercase">total locations</span>

                    </div>

                </div>

            </Card.Body>

        </Card>

    </Col>

    <Col md={6} xl={4}>

        <Card className="card-social">

            <Card.Body className="border-bottom">

                <div className="row align-items-center justify-content-center">

                    <div className="col-auto">

                        <i className="fab fa-facebook-f text-primary f-36" />

                    </div>

                    <div className="col text-right">

                        <h3>12,281</h3>

                        <h5 className="text-c-green mb-0">

                            +7.2% <span className="text-muted">Total Likes</span>

                        </h5>

                    </div>

                </div>

            </Card.Body>

            <Card.Body>

                <div className="row align-items-center justify-content-center card-active">

                    <div className="col-6">

                        <h6 className="text-center m-b-10">

                            <span className="text-muted m-r-5">Target:</span>35,098

                        </h6>

                        <div className="progress">

                            <div

                                className="progress-bar progress-c-theme"

                                role="progressbar"

                                style={{ width: '60%', height: '6px' }}

                                aria-valuenow="60"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>

                    <div className="col-6">

                        <h6 className="text-center  m-b-10">

                            <span className="text-muted m-r-5">Duration:</span>350

                        </h6>

                        <div className="progress">

                            <div

                                className="progress-bar progress-c-theme2"

                                role="progressbar"

                                style={{ width: '45%', height: '6px' }}

                                aria-valuenow="45"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>

                </div>

            </Card.Body>

        </Card>

    </Col>

    <Col md={6} xl={4}>

        <Card className="card-social">

            <Card.Body className="border-bottom">

                <div className="row align-items-center justify-content-center">

                    <div className="col-auto">

                        <i className="fab fa-twitter text-c-blue f-36" />

                    </div>

                    <div className="col text-right">

                        <h3>11,200</h3>

                        <h5 className="text-c-purple mb-0">

                            +6.2% <span className="text-muted">Total Likes</span>

                        </h5>

                    </div>

                </div>

            </Card.Body>

            <Card.Body>

                <div className="row align-items-center justify-content-center card-active">

                    <div className="col-6">

                        <h6 className="text-center m-b-10">

                            <span className="text-muted m-r-5">Target:</span>34,185

                        </h6>

                        <div className="progress">

                            <div

                                className="progress-bar progress-c-green"

                                role="progressbar"

                                style={{ width: '40%', height: '6px' }}

                                aria-valuenow="40"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>

                    <div className="col-6">

                        <h6 className="text-center  m-b-10">

                            <span className="text-muted m-r-5">Duration:</span>800

                        </h6>

                        <div className="progress">

                            <div

                                className="progress-bar progress-c-blue"

                                role="progressbar"

                                style={{ width: '70%', height: '6px' }}

                                aria-valuenow="70"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>

                </div>

            </Card.Body>

        </Card>

    </Col>

    <Col xl={4}>

        <Card className="card-social">

            <Card.Body className="border-bottom">

                <div className="row align-items-center justify-content-center">

                    <div className="col-auto">

                        <i className="fab fa-google-plus-g text-c-red f-36" />

                    </div>

                    <div className="col text-right">

                        <h3>10,500</h3>

                        <h5 className="text-c-blue mb-0">

                            +5.9% <span className="text-muted">Total Likes</span>

                        </h5>

                    </div>

                </div>

            </Card.Body>

            <Card.Body>

                <div className="row align-items-center justify-content-center card-active">

                    <div className="col-6">

                        <h6 className="text-center m-b-10">

                            <span className="text-muted m-r-5">Target:</span>25,998

                        </h6>

                        <div className="progress">

                            <div

                                className="progress-bar progress-c-theme"

                                role="progressbar"

                                style={{ width: '80%', height: '6px' }}

                                aria-valuenow="80"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>

                    <div className="col-6">

                        <h6 className="text-center  m-b-10">

                            <span className="text-muted m-r-5">Duration:</span>900

                        </h6>

                        <div className="progress">

                            <div

                                className="progress-bar progress-c-theme2"

                                role="progressbar"

                                style={{ width: '50%', height: '6px' }}

                                aria-valuenow="50"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>

                </div>

            </Card.Body>

        </Card>

    </Col>

    <Col md={6} xl={4}>

        <Card>

            <Card.Header>

                <Card.Title as="h5">Rating</Card.Title>

            </Card.Header>

            <Card.Body>

                <div className="row align-items-center justify-content-center m-b-20">

                    <div className="col-6">

                        <h2 className="f-w-300 d-flex align-items-center float-left m-0">

                            4.7 <i className="fa fa-star f-10 m-l-10 text-c-yellow" />

                        </h2>

                    </div>

                    <div className="col-6">

                        <h6 className="d-flex  align-items-center float-right m-0">

                            0.4 <i className="fa fa-caret-up text-c-green f-22 m-l-10" />

                        </h6>

                    </div>

                </div>




                <div className="row">

                    <div className="col-xl-12">

                        <h6 className="align-items-center float-left">

                            <i className="fa fa-star f-10 m-r-10 text-c-yellow" />5

                        </h6>

                        <h6 className="align-items-center float-right">384</h6>

                        <div className="progress m-t-30 m-b-20" style={{ height: '6px' }}>

                            <div

                                className="progress-bar progress-c-theme"

                                role="progressbar"

                                style={{ width: '70%' }}

                                aria-valuenow="70"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>




                    <div className="col-xl-12">

                        <h6 className="align-items-center float-left">

                            <i className="fa fa-star f-10 m-r-10 text-c-yellow" />4

                        </h6>

                        <h6 className="align-items-center float-right">145</h6>

                        <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>

                            <div

                                className="progress-bar progress-c-theme"

                                role="progressbar"

                                style={{ width: '35%' }}

                                aria-valuenow="35"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>




                    <div className="col-xl-12">

                        <h6 className="align-items-center float-left">

                            <i className="fa fa-star f-10 m-r-10 text-c-yellow" />3

                        </h6>

                        <h6 className="align-items-center float-right">24</h6>

                        <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>

                            <div

                                className="progress-bar progress-c-theme"

                                role="progressbar"

                                style={{ width: '25%' }}

                                aria-valuenow="25"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>




                    <div className="col-xl-12">

                        <h6 className="align-items-center float-left">

                            <i className="fa fa-star f-10 m-r-10 text-c-yellow" />2

                        </h6>

                        <h6 className="align-items-center float-right">1</h6>

                        <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>

                            <div

                                className="progress-bar progress-c-theme"

                                role="progressbar"

                                style={{ width: '10%' }}

                                aria-valuenow="10"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>

                    <div className="col-xl-12">

                        <h6 className="align-items-center float-left">

                            <i className="fa fa-star f-10 m-r-10 text-c-yellow" />1

                        </h6>

                        <h6 className="align-items-center float-right">0</h6>

                        <div className="progress m-t-30  m-b-5" style={{ height: '6px' }}>

                            <div

                                className="progress-bar"

                                role="progressbar"

                                style={{ width: '0%' }}

                                aria-valuenow="0"

                                aria-valuemin="0"

                                aria-valuemax="100"

                            />

                        </div>

                    </div>

                </div>

            </Card.Body>

        </Card>

    </Col>

    <Col md={6} xl={8}>

        <Card className="Recent-Users">

            <Card.Header>

                <Card.Title as="h5">Recent Users</Card.Title>

            </Card.Header>

            <Card.Body className="px-0 py-2">

                <Table responsive hover>

                    <tbody>

                        <tr className="unread">

                            <td>



                            </td>

                            <td>

                                <h6 className="mb-1">Isabella Christensen</h6>

                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>

                            </td>

                            <td>

                                <h6 className="text-muted">

                                    <i className="fa fa-circle text-c-green f-10 m-r-15" />

                                    11 MAY 12:56

                                </h6>

                            </td>

                            <td>

                                <Link to="#" className="label theme-bg2 text-white f-12">

                                    Reject

                                </Link>

                                <Link to="#" className="label theme-bg text-white f-12">

                                    Approve

                                </Link>

                            </td>

                        </tr>

                        <tr className="unread">

                            <td>



                            </td>

                            <td>

                                <h6 className="mb-1">Mathilde Andersen</h6>

                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>

                            </td>

                            <td>

                                <h6 className="text-muted">

                                    <i className="fa fa-circle text-c-red f-10 m-r-15" />

                                    11 MAY 10:35

                                </h6>

                            </td>

                            <td>

                                <Link to="#" className="label theme-bg2 text-white f-12">

                                    Reject

                                </Link>

                                <Link to="#" className="label theme-bg text-white f-12">

                                    Approve

                                </Link>

                            </td>

                        </tr>

                        <tr className="unread">

                            <td>



                            </td>

                            <td>

                                <h6 className="mb-1">Karla Sorensen</h6>

                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>

                            </td>

                            <td>

                                <h6 className="text-muted">

                                    <i className="fa fa-circle text-c-green f-10 m-r-15" />9 MAY 17:38

                                </h6>

                            </td>

                            <td>

                                <Link to="#" className="label theme-bg2 text-white f-12">

                                    Reject

                                </Link>

                                <Link to="#" className="label theme-bg text-white f-12">

                                    Approve

                                </Link>

                            </td>

                        </tr>

                        <tr className="unread">

                            <td>



                            </td>

                            <td>

                                <h6 className="mb-1">Ida Jorgensen</h6>

                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>

                            </td>

                            <td>

                                <h6 className="text-muted f-w-300">

                                    <i className="fa fa-circle text-c-red f-10 m-r-15" />

                                    19 MAY 12:56

                                </h6>

                            </td>

                            <td>

                                <Link to="#" className="label theme-bg2 text-white f-12">

                                    Reject

                                </Link>

                                <Link to="#" className="label theme-bg text-white f-12">

                                    Approve

                                </Link>

                            </td>

                        </tr>

                        <tr className="unread">

                            <td>



                            </td>

                            <td>

                                <h6 className="mb-1">Albert Andersen</h6>

                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>

                            </td>

                            <td>

                                <h6 className="text-muted">

                                    <i className="fa fa-circle text-c-green f-10 m-r-15" />

                                    21 July 12:56

                                </h6>

                            </td>

                            <td>

                                <Link to="#" className="label theme-bg2 text-white f-12">

                                    Reject

                                </Link>

                                <Link to="#" className="label theme-bg text-white f-12">

                                    Approve

                                </Link>

                            </td>

                        </tr>

                    </tbody>

                </Table>

            </Card.Body>

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
