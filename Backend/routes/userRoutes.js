
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("../models/userModels");
const router=express.Router();

router.post("/",async (req,res)=>{
    const {name,email,age}=req.body;

    try{
        const userAdded= await User.create({
            name:name,
            email:email,
            age:age
        });
        console.log("added")
        res.status(201).json(userAdded);
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message});

    }
})

// shoe all users
router.get("/", async(req,res)=>{
    const showAll= await User.find();
    try{
        res.status(200).json(showAll);
    }
    catch(error){
        console.log(error)
        res.send(500).json({error:error.message});

    }
})

// get one user 
router.get("/:id", async(req,res)=>{
    const {id}=req.params;
    const singleUser= await User.findById(id);
    try{
        res.status(200).json(singleUser);
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:error.message});

    }
})

router.delete("/:id", async (req,res)=>{
    const {id}=req.params;
    const singlDelete=await User.findByIdAndDelete({_id:id});
    try{
        res.status(200).json(singlDelete);
    }
    catch(error){
        console.log(err);
        res.status(500).json({error:error.message})

    }
})

// Patch or update
router.patch("/:id", async (req,res)=>{
    const {id}=req.params;
    const {name,email,age}=req.body;
    const singlUpadte=await User.findByIdAndUpdate(id,req.body,{new:true});
    try{
        res.status(200).json(singlUpadte);
    }
    catch(error){
        console.log(err);
        res.status(500).json({error:error.message})
    }
})

module.exports=router