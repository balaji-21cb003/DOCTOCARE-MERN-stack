const express = require("express");
const doctorExpressRoute = express.Router();
const cors = require("cors");
let DoctorSchema = require("../model/doctormodel");
// CORS OPTIONS
var whitelist =["https://localhost:8100", "https://localhost:4000","https://localhost:3000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    console.log(whitelist[0]);
    corsOptions = {
      origin: "*",
      methods: "GET",//HEAD,PUT,PATCH,POST,DELETE",
    };
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions);
};
// Get users
doctorExpressRoute
  .route("/", cors(corsOptionsDelegate))
  .get(async (req, res, next) => {
    await DoctorSchema.find()
      .then((result) => {
        console.log(result);
        res.json({
          data: result,
          // message: "Data successfully fetched!",
          // status: 200,
        });
      })
      .catch((err) => {
        return next(err);
      });
  });
  module.exports=doctorExpressRoute ;