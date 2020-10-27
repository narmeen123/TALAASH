import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ImgToBase64 from "image-to-base64";

class Report extends Component {
  state = {
    name: "",
    age: "",
    address: "",
    phone: "",
    gender: "",
    file: "",
    time: "",
    wear: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("Report e value", e.target.value);
  };
  handleSubmit = async (e) => {
    console.log("pass" + this.state.name);
    console.log("email" + this.state.age);
    document.getElementById("myfile").readOnly = true;
    document.getElementById("name").readOnly = true;
    document.getElementById("age").readOnly = true;
    document.getElementById("address").readOnly = true;
    document.getElementById("phone").readOnly = true;
    document.getElementById("time").readOnly = true;
    document.getElementById("gender").readOnly = true;
    document.getElementById("wear").readOnly = true;
    e.preventDefault();
    const reportdata = {
      age: this.state.age.trim(),
      name: this.state.name.trim(),
      file: this.state.file.trim(),
      time: this.state.time.trim(),
      address: this.state.address.trim(),
      phone: this.state.phone.trim(),
      gender: this.state.gender.trim(),
      wear: this.state.wear.trim(),
    };
    console.log("email afer seeing" + reportdata.file);
    console.log("name afer seeing" + reportdata.name);
    console.log("username afer seeing" + reportdata.gender);
    console.log("password afer seeing" + reportdata.time);
    console.log("address afer seeing" + reportdata.address);
    console.log(" conf_password afer seeing" + reportdata.age);
    console.log("phone after seeing" + reportdata.phone);
    console.log("phone after seeing" + reportdata.wear);

    const report = await axios
      .post("/api/report", reportdata)
      .then((res) => {
        window.alert("Report Added Successfully");
        //yahan
        //const history = useHistory();
        //history.goBack("/Login");
        // return <Redirect to={"/Login"} />;
      })
      .catch((err) => {
        console.log(e);
      });
  };
  loadFile = (e) => {
    var image = document.getElementById("output");
    const imageToBase64 = ImgToBase64;
    image.src = URL.createObjectURL(e.target.files[0]);
    imageToBase64(image.src);
  };
  printDocument() {
    const input = document.getElementById("gg");
    html2canvas(input).then((canvas) => {
      var imgWidth = 200;
      var pageHeight = 290;
      var pageWidth = 300;
      var imgHeight = 150;
      var heightLeft = imgHeight;
      const imgData = document.getElementById("output");
      //const data = this.handleChange;
      const pdf = new jsPDF("p", "mm", "a4");
      var position = -80;
      var heightLeft = imgHeight;
      //pdf.text(data, 20, 20);
      // pdf.addPage("/Report");
      //pdf.addHTML(document.body, function () {
      //  pdf.save("web.pdf");
      //  });
      pdf.addImage(imgData, "JPEG", 15, 40, 180, 160);
      pdf.setFontSize(15);

      // pdf.text(75, 25, data);
      pdf.text(55, 210, "Name: Zardari");
      pdf.text(55, 220, "Age: 32");
      pdf.text(55, 230, "Time 02/30");
      pdf.text(55, 240, "Address: HouseNoM66 Rawalpindi");
      pdf.text(55, 250, "Phone: 03315046985");
      pdf.text(55, 260, "Gender: Male");
      pdf.text(55, 270, "Wearing: Blueshirt");
      pdf.save("download.pdf");
    });
  }
  share() {
    document.getElementById("name").readOnly = true;
    document.getElementById("age").readOnly = true;
    document.getElementById("address").readOnly = true;
    document.getElementById("phone").readOnly = true;
    document.getElementById("time").readOnly = true;
    document.getElementById("gender").readOnly = true;
    document.getElementById("wear").readOnly = true;
  }

  render() {
    return (
      <div>
        <div>
          <div className="container" id="gg">
            <h1 className="display-4 text-center" style={{ color: "black" }}>
              Missing Person Report
            </h1>
            <form
              className="form-horizontal"
              action="/Report"
              method="post"
              encType='multipart/form-data'
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <label
                  for="file"
                  className="col-sm-2 control-label"
                  style={{ color: "black" }}
                >
                  Upload Image Of Missing Person
                </label>
                <img id="output" width="500" height="300" />
                <div className="col-sm-10">
                  <div className="input-group">
                    <input
                      type="file"
                      id="myfile"
                      name="file"
                      accept="image/*"
                      onChange={this.loadFile}
                    />
                    <br />
                    <br />
                  </div>
                  <div className="message" id="message"></div>
                </div>
              </div>
              <div className="form-group">
                <label
                  for="name"
                  className="col-sm-2 control-label"
                  style={{ color: "black", font: "bold" }}
                >
                  Enter Missing Person Name:
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
                      placeholder="Enter Missing Person Name"
                      onChange={this.handleChange}
                      style={{ border: "1px solid #000000" }}
                    />
                  </div>
                  <div className="message" id="message_name"></div>
                </div>
              </div>
              <div className="form-group">
                <label
                  for="age"
                  className="col-sm-2 control-label"
                  style={{ color: "black" }}
                >
                  Age:
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
                      type="age"
                      className="form-control input-lg"
                      name="age"
                      id="age"
                      placeholder="Enter age"
                      onChange={this.handleChange}
                      style={{ border: "1px solid #000000" }}
                    />
                  </div>
                  <div className="message" id="message_mail"></div>
                </div>
              </div>
              <div className="form-group">
                <label
                  for="address"
                  className="col-sm-2 control-label"
                  style={{ color: "black" }}
                >
                  Enter Address:
                </label>
                <div className="col-sm-10">
                  <div className="input-group">
                    <span
                      className="input-group-addon"
                      style={{ border: "1px solid #000000" }}
                    >
                      <i className="fa fa-map-marker fa-lg"></i>
                    </span>
                    <input
                      type="address"
                      className="form-control input-lg"
                      name="address"
                      id="address"
                      placeholder="Enter Address"
                      onChange={this.handleChange}
                      style={{ border: "1px solid #000000" }}
                    />
                  </div>
                  <div className="message" id="message_address"></div>
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
                  for="time"
                  className="col-sm-2 control-label"
                  style={{ color: "black" }}
                >
                  Time:
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
                      type="time"
                      className="form-control input-lg"
                      name="time"
                      id="time"
                      placeholder="Enter Time"
                      onChange={this.handleChange}
                      style={{ border: "1px solid #000000" }}
                    />
                  </div>
                  <div className="message" id="message_mail"></div>
                </div>
              </div>

              <div className="form-group">
                <label
                  for="gender"
                  className="col-sm-2 control-label"
                  style={{ color: "black" }}
                >
                  Gender:
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
                      type="gender"
                      className="form-control input-lg"
                      name="gender"
                      id="gender"
                      placeholder="Enter gender"
                      onChange={this.handleChange}
                      style={{ border: "1px solid #000000" }}
                    />
                  </div>
                  <div className="message" id="message_mail"></div>
                </div>
              </div>

              <label
                for="subject"
                className="col-sm-2 control-label"
                style={{ color: "black" }}
              >
                Wearing & Appearance
              </label>
              <textarea
                id="subject"
                name="wear"
                placeholder="Write something.."
                type="wear"
                className="form-control input-lg"
                name="wear"
                id="wear"
                placeholder="Enter wearing"
                onChange={this.handleChange}
                style={{ height: "200px", width: "600px" }}
              ></textarea>

              <div className="form-group input-lg">
                <button
                  type="button"
                  className="btn btn-primary btn-lg login-button"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg "
                  onClick={this.printDocument}
                  style={{ marginLeft: "100px", marginTop: "-70px" }}
                >
                  Print pdf
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg "
                 
                  style={{ marginLeft: "200px", marginTop: "-70px" }}
                >
                  Share
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Report;
