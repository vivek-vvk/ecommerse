const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

  name:String,
  amount: Number,
  image:String

});

var cartdata = mongoose.model('cart', CourseSchema);
module.exports = cartdata;