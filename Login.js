import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import "./Logo.jpg";

class Login extends Component {
  state = {
    // idhr save kr raha hai handle change
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    username: "",
    conf_password: "",
    navigate: false,// ya 1
    role: 0,
  };

  handleChange = (e) => {
    //name sae feild or dosrae value
    this.setState({ [e.target.name]: e.target.value }); //each entry function call e data utahe ga console pr show krae ga
    console.log("signup e value", e.target.value);
  };
  handleSubmit = async (e) => {
    console.log("pass" + this.state.password);
    console.log("email" + this.state.email);
    e.preventDefault();
    const userdata = {
      email: this.state.email.trim(), //trim extra spacing or blank data khtam kr dae ga
      name: this.state.name.trim(),
      username: this.state.username.trim(),
      password: this.state.password.trim(),
      address: this.state.address.trim(),
      phone: this.state.phone.trim(),
      conf_password: this.state.conf_password.trim(),
    };
    console.log("email afer seeing" + userdata.email);
    console.log("name afer seeing" + userdata.name);
    console.log("username afer seeing" + userdata.username);
    console.log("password afer seeing" + userdata.password);
    console.log("address afer seeing" + userdata.address);
    console.log(" conf_password afer seeing" + userdata.conf_password);
    console.log("phone after seeing" + userdata.phone);
    const form = await fetch(`/api/Login?email=${userdata.email}&password=${userdata.password}` //fetch from api through get
    ).then((respone) => respone.json())
      .then((res) => {
        if (res.role === "hospital") {
          setTimeout(() => this.setState({ navigate: true, role:1 }), 20);// 
          console.log("working and login");//Organization   hospital   Police
        } else if(res.role === "Organization"){
          setTimeout(() => this.setState({ navigate: true, role:2 }), 20);// 
        }
        else if(res.role === "Police"){
          setTimeout(() => this.setState({ navigate: true, role:3 }), 20);// 
        }
        else if(res.role === "User"){
          setTimeout(() => this.setState({ navigate: true, role:4 }), 20);// 
        }else{
          alert("Unauthorized User")
        }
      })
      .catch((err) => {
        console.log(e);
      });

  };





  render() {
    if (this.state.navigate) {//  3
      if(this.state.role ===1){
        return <Redirect to="/HospitalPortal" />;
        
      }else if(this.state.role ==2){
        return <Redirect to="/OrganizationPortal" />;

      }
      else if(this.state.role ==3){
        return <Redirect to="/PolicePortal" />;//police karo

      }else if(this.state.role ==4){
        return <Redirect to="/UserPortal" />;//user karo

      }
     // return <Redirect to="/UserPortal" />;
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
            <h1 class="display-4 text-warning text-left">
              <b>Log In</b>
            </h1>
            <div className="container">
              <form
                class="form-horizontal"
                method="post"
                onSubmit={this.handleSubmit}
              >
                <div class="form-group">
                  <label for="email" class="col-sm-2 control-label">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-envelope fa" aria-hidden="true"></i>
                      </span>
                      <input
                        type="email"
                        class="form-control input-lg"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="message" id="message_mail"></div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="password" class="col-sm-2 control-label">
                    Password
                  </label>
                  <div class="col-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-unlock fa-lg" aria-hidden="true"></i>
                      </span>
                      <input
                        type="password"
                        class="form-control input-lg"
                        name="password"
                        id="password"
                        placeholder="Enter your Password"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="message" id="message_password"></div>
                  </div>
                </div>
               
               
                <div class="form-group input-lg">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg login-button"
                      onClick={this.handleSubmit}
                    >
                      Sign In
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
export default Login;
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
