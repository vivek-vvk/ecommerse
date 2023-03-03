const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

  name:String,
  amount: Number,
  image:String,
  information:String
});

var medicinedata = mongoose.model('medicine', CourseSchema);
module.exports = medicinedata;