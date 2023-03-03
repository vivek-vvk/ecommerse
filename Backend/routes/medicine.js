const express = require('express');
const medicinedata=require("../models/medicineSchema");
const router = express.Router();
const cartdata=require("../models/cartSchema");



// Middleware Fuction to verify Token send from FrontEnd
function verifyToken(req,res,next){
  // console.log(req.headers)

  if(!req.headers.authorization){
     return res.status(401).send("Unauthorized Access")
  }
  var tokens = req.headers.authorization.split(' ')[2];
 
 console.log( `token${token}`)
 if(token== "null"){
     return res.status(401).send("Unauthorized Access")
 }

 var payload= jwt.verify(token , "hiddenkey")
 console.log(payload)
 if(!payload){
     return res.status(401).send("Unauthorized Access")
 }
 req.userId = payload.subject
      next()
 }





router.get("/medicine" , (req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
   
    medicinedata.find()
     .then((data)=>{
      res.send(data)
     });
  
   });



   router.get('/med/:id',  (req, res) => {
  
    const id = req.params.id;
      medicinedata.findOne({"_id":id})
      .then((data)=>{
          res.send(data);
        console.log(data)
      });
  })
 

   
   module.exports=router;
