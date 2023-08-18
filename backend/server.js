// const express=require('express');
// const cors=require('cors');
// const mongoose=require('mongoose');

// const app= express();
// const port = 3001;

// //middleware
// app.use(express.json());
// app.use(cors({
//     origin : "*"

// }));

// //connection url
// mongoose.connect("mongodb://127.0.0.1:27017/doctocare")
// //API

// app.get('/',(req,res) => res.status(200).json(
//     ["hii","hieh","eihie","eic","ehhco"]));
// app.listen(port, () => console.log('listing on the port',port));

// const mongoose = require("mongoose");
//  const express = require("express");
//  const cors = require("cors");
//  const bodyParser = require("body-parser");
//  const createError = require("http-errors");
// // Connecting MongoDB
// async function mongoDbConnection() {

//   await mongoose.connect(
//     "mongodb://127.0.0.1:27017/doctocare",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     6000
//   );
// }
// mongoDbConnection().then(() => {
//   console.log("MongoDB successfully connected.");
// }),
//   (error) => {
//     console.log("Could not connected to database : " + err);
//   };

//  const userRoute = require ("./route/doctorroute");
//  const appoinmentRoute = require ("./route/bookappoinment.route");
// const app = express();
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
//   bodyParser.json()
// );

// // CORS
// app.use(cors());
// // RESTful API root
// app.use("/userapi", userRoute);
// app.use("/appoinment",appoinmentRoute);
// // PORT
// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//   console.log("PORT Connected on: " + port);
// });
// // Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });
// // error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });

// ========

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const nodemailer = require("nodemailer");

// Connecting MongoDB
async function mongoDbConnection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/doctocare", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoDbConnection().then(() => {
  console.log("MongoDB successfully connected.");
}),
  (error) => {
    console.log("Could not connect to the database: " + error);
  };

const userRoute = require("./route/doctorroute");
const appoinmentRoute = require("./route/bookappoinment.route");
const doctorRoute = require("./route/cardiodrroute");
const dermatologistRoute = require("./route/dermatologistroute");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  bodyParser.json()
);

// CORS
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "doctocare7@gmail",
    pass: "dotocare@2023",
  },
});

// Function to send email using Nodemailer
function sendEmail(mailOptions) {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending failed:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

// RESTful API root
app.use("/userapi", userRoute);
app.use("/cardio", doctorRoute);
app.use("/dermatologist", dermatologistRoute);
app.use("/appoinment", appoinmentRoute);

// API for sending appointment email
app.post("/send-email", (req, res) => {
  const {
    id,
    Name,
    Email,
    blood_Group,
    gender,
    phone_number,
    address,
    Date,
    time,
  } = req.body;

  const mailOptions = {
    from: "doctocare7@gmail.com",
    to: Email,
    subject: "New Appointment Request",
    text: `Doctor ID: ${id}\nName: ${Name}\nEmail: ${Email}\nBlood Group: ${blood_Group}\nGender: ${gender}\nPhone Number: ${phone_number}\nAddress: ${address}\nDate: ${Date}\nTime: ${time}`,
  };

  sendEmail(mailOptions);

  res.status(200).send("Email sent successfully");
});

// PORT
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server listening on port: " + port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
