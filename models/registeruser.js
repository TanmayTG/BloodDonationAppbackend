const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  HName:{
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
  Street:{
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

const Register = new mongoose.model("userh",userSchema);

module.exports=Register;