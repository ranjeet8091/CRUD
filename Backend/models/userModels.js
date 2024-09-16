const mongoose=require("mongoose")


// schema is structure
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number,
        required:true
    },

},{timestamps:true});

// create Model 
// for use schema we have to convert blogschema into model
const User=mongoose.model("User",userSchema);
module.exports=User;