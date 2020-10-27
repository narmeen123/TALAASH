import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "./Logo.jpg";
import "./services.css";
class Services extends Component {
  render() {
    return (
      <div>
        <div className="cover">
          <Navbar />
          <div>
            <img
              src={require("./Logo.jpg")}
              alt="Snow"
              style={{ width: "50%", height: "350px", opacity: "0.5" }}
            />
          </div>
          <div className="centered1">
            <h1 className="display-4 text-white text-right">
              <b>Services</b>
            </h1>
          </div>
          <div className="centered2">
            <h3 className=" text-white text-right">
              Our aim is to faciltate people who are finding their missing loved
              ones by providing them facilities
            </h3>
          </div>
        </div>
        <h1 className="decorate">Why Choose Us</h1>
        <h4 className="paragraph">
          We provide services and facilities that helped you in finding your
          loved ones and reduces your physical effort
        </h4>
        <div class="container-lg bg-white">
          <div class=" text-center ">
            <div class="card-deck  ">
              <div class="card grow ">
                <img
                  class="card-img-top"
                  src="https://cdn4.iconfinder.com/data/icons/meeting-10/64/Report-Profile-Meeting-Communication-Sharing-512.png"
                  alt="Snow"
                />
                <div class="card-body">
                  <h1 class="card-title" style={{ color: "black" }}>
                    <b>1.Quick Report Share</b>
                  </h1>
                  <p class="card-text" style={{ color: "black" }}>
                    Missing person report share to hospital, police and
                    organization just by one button click
                  </p>
                </div>
              </div>
              <div class="card grow">
                <img
                  class="card-img-top"
                  src="https://previews.123rf.com/images/vectorv/vectorv1906/vectorv190624103/125336001-black-face-recognition-icon-isolated-on-white-background-face-identification-scanner-icon-facial-id-.jpg"
                  alt="Snow"
                />
                <div class="card-body">
                  <h1 class="card-title" style={{ color: "black" }}>
                    <b>2.Search By Image</b>
                  </h1>
                  <p class="card-text" style={{ color: "black" }}>
                    If anyone found a lost person he just upload his image and
                    find if any report related to this person uploaded or not
                  </p>
                </div>
              </div>

              <div class="card grow">
                <img
                  class="card-img-top"
                  src="https://3.imimg.com/data3/UM/AO/IMFCP-8047410/-oxpaidubkhm-uiwlpldh9oi-aaaaaaaaawq-zf-semy97l4-s1600-missing-person-poster-thumb16343674-500x500.jpg"
                  alt="Snow"
                  style={{ height: "44%" }}
                />
                <div class="card-body">
                  <h1 class="card-title" style={{ color: "black" }}>
                    <b>3.Poster Creation</b>
                  </h1>
                  <p class="card-text" style={{ color: "black" }}>
                    Create a poster and ad and provide you sharing of this
                    poster automatically
                  </p>
                </div>
              </div>
              <div class="card grow">
                <img
                  class="card-img-top"
                  src="https://image.shutterstock.com/image-vector/lock-symbol-on-white-background-260nw-236893996.jpg"
                  alt="Snow"
                  style={{ height: "44%" }}
                />
                <div class="card-body">
                  <h1 class="card-title" style={{ color: "black" }}>
                    <b>4.Provide Security</b>
                  </h1>
                  <p class="card-text" style={{ color: "black" }}>
                    We provide security of user data. Its user choice whom
                    he/she want to share report.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;