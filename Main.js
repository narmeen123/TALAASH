import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Main.css";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Support from "./pages/Support.js";
import Demo from "./pages/Demo.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Example from "./pages/Example.js";
import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";
import Example0 from "./pages/Example0";
import UserPortal from "./pages/UserPortal";
import HospitalPortal from "./pages/HospitalPortal";
import PolicePortal from "./pages/PolicePortal";
import OrganizationPortal from "./pages/OrganizationPortal";
import Report from "./pages/Report";
import Trustee from "./pages/Trustee";
import Image from "./pages/Image";
import Reports from "./pages/Reports";
import Missinghall from "./pages/Missinghall";
class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Support" component={Support} />
          <Route exact path="/Demo" component={Demo} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Example" component={Example} />
          <Route exact path="/Example1" component={Example1} />
          <Route exact path="/Example2" component={Example2} />
          <Route exact path="/Example0" component={Example0} />
          <Route exact path="/Reports" component={Reports} />
          <Route exact path="/UserPortal" component={UserPortal} />
          <Route exact path="/HospitalPortal" component={HospitalPortal} />
          <Route exact path="/PolicePortal" component={PolicePortal} />
          <Route exact path="/Missinghall" component={Missinghall} />

          <Route
            exact
            path="/OrganizationPortal"
            component={OrganizationPortal}
          />
          <Route exact path="/Report" component={Report} />
          <Route exact path="/Trustee" component={Trustee} />
          <Route exact path="/Image" component={Image} />
        
        </div>
      </Router>
    );
  }
}

export default Main;
