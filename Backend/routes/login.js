const express = require('express');
const logindata= require("../models/loginSchema");

const jwt = require ("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

const saltRounds = 10;



router.post("/signup" , (req,res)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
        var user = req.body.data;
  
        const salt = bcrypt.genSaltSync(saltRounds);
        const pssd = bcrypt.hashSync(user.password, salt);
  
        logindata.findOne({email:user.email.trim()})
        .then((data)=>{
        if(data===null){
  
          var adduser = {
              email:user.email,
              username:user.username,
              password:pssd,
              role:user.role,
              rej:"false",
           }
  
          var adduser = new logindata(adduser);
          adduser.save();
          res.send({ status: true, data: 'Success' })
        }
        else{
          console.log("Email already taken")
          res.send({ status: false, data: 'Email already taken' })
        }
       })
  
  });
  

  router.post("/login" , (req,res)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
    var user=req.body.data
  
    console.log(user.email ,user.password , user.role);
  
    logindata.findOne({email:user.email.trim() , role:user.role})
    .then((data)=>{
  
    
      if(data===null){
          res.send({ status: false, data: 'Account does not exist'})
      }else { 
      
          bcrypt.compare(user.password , data.password , function(err, result) {
            if (result) {
              console.log(result)
              let payload = {subject:data.email};
              let token = jwt.sign(payload , "secretkey")
              var email = data.email;
              var username = data.username;
              res.send({ status: true, data: 'Success', email , token , username})
           }
           else{
                res.send({ status: false, data: 'Incorrect  Password'})
            }
        });
         
      }
  
  
    });
  });



  module.exports=router;