// eslint-disable-next-line

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var cors = require('cors')
const User = require("../model/userSchema");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(require('./router/auth'));
app.use(express.json());
app.use(cors);
app.use(bodyParser.urlencoded({
  extended: true
}));

// mongoose.connect("mongodb://localhost:27017/users", {
//   useNewUrlParser: true
// });
//
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String
// });
//
// const User = mongoose.model("User", userSchema);


// app.route("/register")
//   .post(async (req, res) => {
//   console.log("server");
//   var newEmail = req.body.email;
//   var newPass = req.body.password;
//   console.log(newEmail);
//   console.log(newPass);
//   const newUser = new User({
//     email: newEmail,
//     password: newPass
//   });
//
//   newUser.save();
//   return res.status(200);
// });


app.listen(PORT, () => {
  console.log("Server started");
})
