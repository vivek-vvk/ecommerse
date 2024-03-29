const express= require('express');
const app = express();

const cors=require('cors');
const mongoose=require('mongoose');

const PORT=process.env.PORT||3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//DB Connection
mongoose
  .connect("mongodb+srv://vivek:vvk123@cluster0.lww1kjp.mongodb.net/medicine?retryWrites=true&w=majority" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });



const medicineRoutes = require("./routes/medicine");
const loginRoutes = require("./routes/login")





app.use('/detail' , medicineRoutes );
app.use('/login', loginRoutes)



app.listen( PORT , (req,res)=>{
    console.log(`Server Running on ${PORT}`)
 })