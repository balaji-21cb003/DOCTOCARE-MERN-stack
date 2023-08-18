const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let doctorSchema = new Schema(
  {
    //image:{type:Blob},
    id:{type:Number},
    Name: {type: String},
    Exprience: {type: Number},
    Success:{type:Number},
      },
  {collection: "dental",},
);

module.exports = mongoose.model("doctorSchema", doctorSchema);