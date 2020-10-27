const express = require("express");
const connectDB = require("./DB/Connection");
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use("/api", require("./Api/User"));
app.use("/api", require("./Api/Report"));
app.use("/api", require("./Api/Hospital"));
app.use("/api", require("./Api/Police"));
app.use("/api", require("./Api/Organization"));
app.use("/api", require("./Api/Trustee"));
//app.use("/api", require("./Api/search"));
//app.use("/api/login", require("./Api/User"))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.",
  });
});

const Port = process.env.Port || 3001;

app.listen(Port, () => console.log("Server started"));
