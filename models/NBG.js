const mongoose=require('mongoose')
const NSchema=new mongoose.Schema({
    PName:{
        type:String,
        required:true,
        match:/^([A-Za-z ]{3,})$/
    },
    PMobileNo:{
        type:String,
        required:true,
        match:/^([0-9]{10})$/
    },
    PEmail:{
        type:String,
        required:true,
        match:/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i
    },
    PBGroup:{
        type:String,
        required:true,
        match:/^([A-Z]{1,2})+([+-]{1})$/
    }
})

const Nregist=new mongoose.model('PBlood',NSchema)
module.exports=Nregist