import React, { Component } from "react";
import "tachyons";
import Footer from "../components/Footer.js";
import Data from "../components/Data.js";
import Avatar from "../components/Avatar.js";
import Stickyicon from "../components/Stickyicon.js";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="cover bg-white">

        <div className="cov bg-white" >
          <Data />
          <Stickyicon />

          <div class=" text-center bg-white">
            <h2 class="display-4 text-dark bg-white ">
              <b class="text-justify">Our Mission</b>
            </h2>
            
            <p class="lead text-dark">
              We save your effort and time for filing your Missing Person report online. Share with anyone Police, Hospital & Organizations who will help you finding your loved ones.
              Maintain profile of your loved ones until you can't find them. Connect with Police, Hospital & Organizations through us.
            </p>
          </div>

          <div class="abc bg-white">
          <Avatar />
          </div>
        </div>
        
        <div class="Full bg-white">
         <h2 class="display-4 text-dark bg-white ">
              <b class="text-justify">Missing Cases History</b>
            </h2>
        
        <div class="container1">
          <ul class="timeline">
            <li>
              <div class="timeline-image" style={{ top: "-100px" }}>
                <img
                  class="img-circle img-responsive"
                  src="https://naasongsmp3.info/wp-content/uploads/2019/11/2017.jpg"
                  alt=""
                  style={{ height: "100%" }}
                />
              </div>
              <div
                class="timeline-panel"
                style={{
                  width: "55%",
                  paddingTop: "-55px",
                  paddingLeft: "500px",
                }}
              >
                <div
                  class="timeline-heading text-center"
                  style={{ color: "black" }}
                >
                  <h3>
                    <b>Reported Missing Cases</b>
                  </h3>
                  <p style={{ fontSize: "150%" }}>1203</p>
                  <h3>
                    <b>Ressolved Missing Cases</b>
                  </h3>
                  <p style={{ fontSize: "150%" }}>208</p>
                </div>
              </div>
              <div class="line">
                
              </div>
            </li>

            <li>
              <div
                class="timeline-image"
                style={{ left: "810px", top: "-10px" }}
              >
                <img
                  class="img-circle img-responsive"
                  src="https://theprintnews.co.uk/wp-content/uploads/2019/03/2018-620x350.png"
                  alt=""
                  style={{ height: "100%" }}
                />
              </div>
              <div
                class="timeline-panel"
                style={{
                  width: "90%",
                  paddingTop: "20px",
                  position: "right",
                  paddingLeft: "650px",
                }}
              >
                <div
                  class="timeline-heading text-center"
                  style={{ color: "black" }}
                >
                  <h3>
                    <b>Reported Missing Cases</b>
                  </h3>
                  <p style={{ fontSize: "150%" }}>767</p>
                  <h3>
                    <b>Unressolved Missing Cases</b>
                  </h3>
                  <p style={{ fontSize: "150%" }}>46</p>
                </div>
              </div>
            </li>
            <li class="timeline">
              <div
                class="timeline-image"
                style={{ left: "1050px", top: "65px" }}
              >
                <img
                  class="img-circle img-responsive"
                  src="https://ingid.org/content/uploads/2019/01/2019.jpg"
                  alt=""
                  style={{ height: "100%" }}
                />
              </div>
              <div
                class="timeline-panel"
                style={{
                  width: "50%",
                  paddingTop: "100px",
                  paddingLeft: "550px",
                }}
              >
                <div
                  class="timeline-heading text-center"
                  style={{ color: "black" }}
                >
                  <h3>
                    <b>Reported Missing Cases</b>
                  </h3>
                  <p style={{ fontSize: "150%" }}>1134</p>
                  <h3>
                    <b>Unressolved Missing Cases</b>
                  </h3>
                  <p style={{ fontSize: "150%" }}>203</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
