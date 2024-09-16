const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
var PORT = process.env.PORT || 3000 ;

const userRouter=require("./routes/userRoutes")
const cors=require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.URI ,{useNewUrlParser: true, useUnifiedTopology: true})   
.then(()=>{
    console.log("Connected succesfully");
    app.listen( 3000, (err)=>{
        if(err)
            console.log(err);
        else
        console.log("Server is running on port number ",PORT);
    });
})
.catch((err)=>{
    console.log(err);
})

app.use(userRouter);

