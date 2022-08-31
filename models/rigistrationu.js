const mongoose=require('mongoose')
const hosSchema=new mongoose.Schema({
    HName:{
        type:String,
        required:true
    },
    MobileNO:{
        type:Number,
        required:true,
        unique:true,
        match : /^([0-9]{10})$/
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
    }
})

const Register=new mongoose.model('userh',hosSchema)
module.exports=Register;