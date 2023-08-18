const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let cardioSchema = new Schema(
  {
    //image:{type:Blob},
    id: { type: Number },
    Name: { type: String },
    Exprience: { type: Number },
    Success: { type: Number },
  },
  { collection: "cardio" }
);

module.exports = mongoose.model("cardioSchema", cardioSchema);
