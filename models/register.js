const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const usersSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    MobileNo:{
        type:Number,
        required:true,
        unique:true
    },
    Username:{
        type:String,
        required:true,
        unique:true
    },
    BloodGroup:{
        type:String,
        required:true
    },
    HNo:{
        type:Number,
        required:true
    },
    Street:{
        type:String,
        required:true
    },
    Landmark:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Pincode:{
        type:Number,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    },
})



const Registered = new mongoose.model("user",usersSchema);

module.exports=Registered;