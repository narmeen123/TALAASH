import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "./Example2.css";
import "./Logo.jpg";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class Example2 extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    conf_password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("signup e value", e.target.value);
  };
  handleSubmit = async (e) => {
    console.log("pass" + this.state.password);
    console.log("email" + this.state.email);
    e.preventDefault();
    const organizationdata = {
      email: this.state.email.trim(),
      name: this.state.name.trim(),
      password: this.state.password.trim(),
      address: this.state.address.trim(),
      phone: this.state.phone.trim(),
      conf_password: this.state.conf_password.trim(),
    };
    console.log("email afer seeing" + organizationdata.email);
    console.log("name afer seeing" + organizationdata.name);
    console.log("password afer seeing" + organizationdata.password);
    console.log("address afer seeing" + organizationdata.address);
    console.log(" conf_password afer seeing" + organizationdata.conf_password);
    console.log("phone after seeing" + organizationdata.phone);
    const form = await axios
      .post("/api/organization", organizationdata)
      .then((res) => {
        console.log("your data in stored in database");
        //yahan
        //const history = useHistory();
        //history.goBack("/Login");
        setTimeout(() => this.setState({ navigate: true }), 20);//  2

        // return <Redirect to={"/Login"} />;
      })
      .catch((err) => {
        console.log(e);
      });
  };
  render() {
    if (this.state.navigate) {//  3
      return <Redirect to="/Login" />;
    }
    return (
      <div>
     <div className="cover">
          <Navbar />
          <div>
            <img
              src={require("./Logo.jpg")}
              alt="Snow"
              style={{ width: "50%", height: "50%" }}
            />
          </div>
          <div className="centered">
            <h1 className="display-4 text-warning text-left">
              <b>SignUp Form</b>
            </h1>
            <div className="container">
              <form
                className="form-horizontal"
                method="post"
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <label for="name" className="col-sm-2 control-label">
                    Organization Name
                  </label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-user fa-lg" aria-hidden="true"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control input-lg"
                        name="name"
                        id="name"
                        placeholder="Enter your Name"
                        required="required"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="message" id="message_name"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="email" className="col-sm-2 control-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-envelope fa" aria-hidden="true"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control input-lg"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="message" id="message_mail"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="address" className="col-sm-2 control-label">
                    Address
                  </label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-map-marker fa-lg"></i>
                      </span>
                      <input
                        type="address"
                        className="form-control input-lg"
                        name="address"
                        id="address"
                        placeholder="Enter your Address"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="message" id="message_address"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="phone" className="col-sm-2 control-label">
                    Phone #
                  </label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i
                          className="fa fa-phone-square fa-lg"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <input
                        type="phone"
                        className="form-control input-lg"
                        name="phone"
                        id="phone"
                        placeholder="Enter your Phone Number"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="message" id="message_phone"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label for="password" className="col-sm-2 control-label">
                  Organization #
                  </label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i
                          className="fa fa-unlock fa-lg"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <input
                        type="password"
                        className="form-control input-lg"
                        name="password"
                        id="password"
                        placeholder="Enter your Password"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="message" id="message_password"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="confirm" className="col-sm-2 control-label">
                    Confirm Organization #
                  </label>
                  <div className="col-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control input-lg"
                        name="conf_password"
                        id="conf_password"
                        placeholder="Confirm your Password"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="message" id="message_conf_password"></div>
                  </div>
                </div>
                <div className="form-group input-lg">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg login-button"
                    onClick={this.handleSubmit}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Example2;
/*div className="cover text-white">
        
          <Navbar />
          <form>
            <div className="main">
              

              <div className="form-group text-white">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group text-white">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group text-white">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group text-white">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
              <p className="forgot-password text-right text-white">
                Already registered <a href="#">sign in?</a>
              </p>
            </div>
          </form>
        </div>
        <Footer />
      </div>*/
