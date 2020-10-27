import React, { Component } from "react";
import axios from "axios";

class Trustee extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("Report e value", e.target.value);
  };
  handleSubmit = async (e) => {
    console.log("pass" + this.state.name);
    console.log("email" + this.state.email);
    e.preventDefault();
    const trusteedata = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      phone: this.state.phone.trim(),
    };

    console.log("name afer seeing" + trusteedata.name);
    console.log("phone afer seeing" + trusteedata.phone);
    console.log("email afer seeing" + trusteedata.email);

    await axios
      .post("/api/trustee", trusteedata)
      .then((res) => {
        window.alert("Trustee Added Successfully");
      })
      .catch((err) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <div>
          <div className="container" id="gg">
            <h1 className="display-4 text-center" style={{ color: "black" }}>
              Trustee Form
            </h1>
            <form
              className="form-horizontal"
              method="post"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group" id="name">
                <label
                  for="name"
                  className="col-sm-2 control-label"
                  style={{ color: "black", font: "bold" }}
                >
                  Enter Trustee Name:
                </label>
                <div className="col-sm-10">
                  <div className="input-group">
                    <span
                      className="input-group-addon"
                      style={{ border: "1px solid #000000" }}
                    >
                      <i className="fa fa-user fa-lg" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control input-lg"
                      name="name"
                      id="name"
                      placeholder="Enter Trustee Name"
                      onChange={this.handleChange}
                      style={{ border: "1px solid #000000" }}
                    />
                  </div>
                  <div className="message" id="message_name"></div>
                </div>
              </div>

              <div className="form-group">
                <label
                  for="phone"
                  className="col-sm-2 control-label"
                  style={{ color: "black" }}
                >
                  Enter Contact Number:
                </label>
                <div className="col-sm-10">
                  <div className="input-group">
                    <span
                      className="input-group-addon"
                      style={{ border: "1px solid #000000" }}
                    >
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
                      placeholder="Enter Number"
                      onChange={this.handleChange}
                      style={{ border: "1px solid #000000" }}
                    />
                  </div>
                  <div className="message" id="message_phone"></div>
                </div>
              </div>
              <div className="form-group">
                <label
                  for="email"
                  className="col-sm-2 control-label"
                  style={{ color: "black" }}
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <div className="input-group">
                    <span
                      className="input-group-addon"
                      style={{ border: "1px solid #000000" }}
                    >
                      <i className="fa fa-envelope fa" aria-hidden="true"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control input-lg"
                      name="email"
                      id="email"
                      placeholder="Enter TrusteeEmail"
                      pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                      required
                      onChange={this.handleChange}
                      style={{ border: "1px solid #000000" }}
                    />
                  </div>
                  <div className="message" id="message_mail"></div>
                </div>
              </div>
              <div className="form-group input-lg">
                <button
                  type="button"
                  className="btn btn-primary btn-lg login-button"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Trustee;
