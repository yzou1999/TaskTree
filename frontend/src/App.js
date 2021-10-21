import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import register from './components/registerPage';
import login from './components/loginPage';
import forgot from './components/forgotPage';
import dashboard from './components/Dashboard.js';
import Dashboardform from './components/Dashboardform';
import DashboardList from './components/DashboardList';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <Router>
      <div className = "container">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <Link to="/register" className="nav-link">register Page</Link>
          </nav>
          <br/> */}
        <Route path="/" exact component = {login} />
        <Route path="/register" exact component = {register} />
        <Route path="/forgot" exact component = {forgot} />
        <Route path="/dashboard" exact component = {Dashboard} />
        <Route path="/dashboardform" exact component = {Dashboardform} />
        <Route path="/dashboardlist" exact component = {DashboardList} />
      </div>
    </Router>
  );
}


export default App;
