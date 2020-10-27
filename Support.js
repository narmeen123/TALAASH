import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
class Support extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Support Page</h2>
          <p>Support paragraph</p>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Support;
