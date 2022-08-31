const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const uSchema=new mongoose.Schema({
    HName:{
        type:String,
        required:true,
        match:/^([A-Za-z ]{3,})$/
    },
    MobileNo:{
        type:String,
        required:true,
        unique:true,
        match:/^([0-9]{10})$/
    },
    Username:{
        type:String,
        required:true,
        unique:true,
        match:/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i
    },
    Street:{
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

uSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()},"iamthebestintheworldandnooneisbetterthani");
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        return token;
    } catch (error) {
        res.send("the error part"+error)
        console.log("the error part"+error)
    }
}

uSchema.pre("save",async function(next){
    if(this.isModified("Password")){
        this.Password=await bcrypt.hash(this.Password,10);
        this.ConfirmPassword=await bcrypt.hash(this.Password,10);
    }
next()
})

const Registereu=new mongoose.model('use',uSchema);
module.exports=Registereu