const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    email: String,
    username: String,
    password: String,
    role: String,
    rej: Boolean,
  

});

var logindata = mongoose.model('login', CourseSchema);
module.exports = logindata;