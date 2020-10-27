const express = require("express");
const { spawn } = require("child_process");

const route = express.Router();



route.get("/search", async (req, res) => 
{
    /*//const python = await spawn("cd", ["api"]);
    const python = await spawn("python", ["search.py"]); //uploads1\00000.mnc
    // collect data from script
    python.stdout.on("data", function (data) {
      console.log("Pipe data from python script ...");
      dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    await python.on("close", (code) => {
      console.log(`child process close all stdio with code ${code}`)
    // console.log("Found data");
  });*/
  res.json({
    message: "working"
  })
});
  
  module.exports = route;
  