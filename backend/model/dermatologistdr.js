const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let dermatologistSchema = new Schema(
  {
    //image:{type:Blob},
    id: { type: Number },
    Name: { type: String },
    Exprience: { type: Number },
    Success: { type: Number },
  },
  { collection: "dermatologist" }
);

module.exports = mongoose.model("dermatologistSchema", dermatologistSchema);
