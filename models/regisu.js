const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const usSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        match:/^([A-Za-z ]{3,})$/
    },
    MobileNo:{
        type:String,
        required:true,
        unique:true,
        match:/^([1-9]{10})$/
    },
    Username:{
        type:String,
        required:true,
        unique:true,
        match:/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i
    },
    BloodGroup:{
        type:String,
        required:true,
        match:/^([A-Z]{1,2})+([+-]{1})$/
    },
    HNo:{
        type:String,
        required:true,
        match:/^([0-9]{1,})$/
    },
    Street:{
        type:String,
        required:true,
        match:/^([A-Za-z ]{3,})$/
    },
    Landmark:{
        type:String,
        required:true,
        match:/^([A-Za-z ]{3,})$/
    },
    City:{
        type:String,
        required:true,
        match:/^([A-Za-z ]{3,})$/
    },
    Pincode:{
        type:String,
        required:true,
        match:/^([0-9]{6})$/
    },
    State:{
        type:String,
        required:true,
        match:/^([A-Za-z ]{3,})$/
    },
    Password:{
        type:String,
        required:true,
    },
    ConfirmPassword:{
        type:String,
        required:true,
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
}]
})

usSchema.methods.generateAuthTokenU = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()},"iamthebestintheworldandnooneisbetterthani");
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        // console.log(token)
        return token;
    } catch (error) {
        res.send("the error part"+error)
        console.log("the error part"+error)
    }
}

usSchema.pre("save",async function(next){
    if(this.isModified("Password")){
     this.Password=await bcrypt.hash(this.Password,10);
     this.ConfirmPassword=await bcrypt.hash(this.Password,10);
    }
next()
})

const Regist=new mongoose.model('u',usSchema);
module.exports=Regist