import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ReactPlayer from "react-player";
class Demo extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <ReactPlayer
          className="react-player"
          url="https://youtu.be/mTuQO-W0nyI"
          width="100%"
          height="700px"
        />

        <Footer />
      </div>
    );
  }
}
export default Demo;