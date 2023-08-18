const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let bookappoinmentSchema = new Schema(
  {
  
    id:{type:String},
    Name: {type: String},
    Email:{type:String},
    blood_Group : {type:String},
    gender:{type:String},
    phone_number:{type:Number},
    address:{type:String},
    Date:{type:Date},
    time:{type:String}
      },
  {collection: "bookAppoinments",},
);

module.exports = mongoose.model("BookAppoinmentSchema",bookappoinmentSchema);