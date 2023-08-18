const express = require("express");
const bookappoinmnetExpressRoute = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const {EMAIL,PASSWORD} = require('../env')
let bookappoinmentSchema = require("../model/bookappoinment.model");

// CORS OPTIONS
var whitelist = ["https://localhost:8100", "https://localhost:4000", "https://localhost:3000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    console.log(whitelist[0]);
    corsOptions = {
      origin: "*",
      //HEAD,PUT,PATCH,POST,DELETE",
    };
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions);
};

// Create user/create-student
bookappoinmnetExpressRoute.route("/").post(async (req, res, next) => {
  await bookappoinmentSchema
    .create(req.body)
    .then((result) => {
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: EMAIL,
          pass: PASSWORD,
        },
      });

      // Email message options
      const mailOptions = {
        from: EMAIL,
        to: req.body.Email,
        subject: `Confirmation: Your Upcoming Appointment with Doctor ID: ${req.body.id}`,
        text: `Your appointment have been booked on Date: ${req.body.Date}  at Time: ${req.body.time}\n   Patient Details\nName: ${req.body.Name}\nEmail: ${req.body.Email}\nBlood Group: ${req.body.blood_Group}\nGender: ${req.body.gender}\nPhone Number: ${req.body.phone_number}\nAddress: ${req.body.address}\nthankyou for choosing our website!`,
      };

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Email sending failed:", error);
          res.status(500).send("Email sending failed");
        } else {
          console.log("Email sent:", info.response);
          res.status(200).json({
            data: result,
            message: "Appointment confirmed. Email sent successfully.",
            status: 200,
          });
        }
      });
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = bookappoinmnetExpressRoute;
