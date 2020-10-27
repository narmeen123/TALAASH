import React, { Component } from "react";
import "tachyons";
import "./Signup.css";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class Signup extends Component {
  handleClick = () => {
    alert("bbnb");
  };
  render() {
    return (
      <div>
        <div className="cover ">
          <div>
            <Navbar />
            <div className="main">
              <div>
                <h1 class="display-4 text-warning text-center">
                  <b>Choose your Role</b>
                </h1>
                <Link to="/Example">
                  <button className="user"></button>
                </Link>
                <div className="text1 display-4 text-white">User</div>
                <Link to="/Example0">
                  <button className="hospital"></button>
                </Link>
                <div className="text2 display-4 text-white">Hospital</div>
                <Link to="/Example1">
                  <button className="police-station"></button>
                </Link>
                <div className="text3 display-4 text-white">Police-Station</div>
                <Link to="/Example2"> 
                  <button className="organiztation"></button>
                </Link>
                <div className="text4 display-4 text-white">Organization</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Signup;
