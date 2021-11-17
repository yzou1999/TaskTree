import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

import Register from "./components/oldRegister";
import Login from "./components/oldLogin";
import Forgot from "./components/forgotPage";
import dashboard from "./components/Dashboard.js";
import Dashboardform from "./components/Dashboardform";
import DashboardList from "./components/DashboardList";
import Modal from "react-modal";
import "react-datetime/css/react-datetime.css";
import Calendar from "./components/Calendar";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div 
        className="container">
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <Link to="/register" className="nav-link">register Page</Link>
          </nav>
          <br/> */}
          <Route path="/" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgot" exact component={Forgot} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboardform" exact component={Dashboardform} />
          <Route path="/dashboardlist" exact component={DashboardList} />
          <Route path="/calendar" exact component={Calendar} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
