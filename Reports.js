import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import axios from "axios";
import $ from 'jquery';

class Reports extends Component {
   allReport= async()=> {
   
    await fetch(`api/getreport`).then((respone) => respone.json())
      .then((Result) => {
        var length;
        var count = Result.data.length;

        for (length in Result.data) {
          $("#tabledata").prepend(
            
          `
          <tr><th scope="row">`+count+`</th>
          <tr>`+'ttt'+`</tr>
            <td>`+"Name:"+Result.data[length].name+`</td>
            <td>`+"Age:"+Result.data[length].age+`</td>
            <td>`+"Phone:"+Result.data[length].phone+`</td>
            <td>`+"Gender:"+Result.data[length].gender+`</td>
            <td>`+"Age:"+Result.data[length].age+`</td>
            <td>`+"Time:"+Result.data[length].time+`</td>
            <td>`+"Address:"+Result.data[length].address+`</td>
            <td>`+"Wear:"+Result.data[length].wear+`</td>
            
            
          </tr>`
          
          );
      count--;
          }
      })
  }

 
  render() {
   // console.log("State", this.state)
    return (
      <div>
         <Navbar />
        <h1 style={{ color: "black" }}> Report </h1>
      <div id="table" onLoad={this.allReport()} style={{ color: "black" }}>
        
      <table border = "1"> 
        <tr id="tabledata"></tr>
      </table>
      </div>
      </div>
      );
  }}
export default Reports;