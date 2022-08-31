const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const User = mongoose.model('use')
const {jwtkey} = require('../keys')


module.exports = (req,res,next)=>{
    const { authorization } = req.headers;
    //authorization === Bearer sfafaf
    if(!authorization){
      return res.status(401).send({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","");
    jwt.verify(token,jwtkey,async(err,payload)=>{
      console.log('token verified',token)
        if(err){
          if(err.name==='JsonWebTokenError'){
            return res.send({err})
          }
          else{
        return res.status(401).send({error:"go back"})
          }
        }
        const {_id} = payload;
        const user = await User.findById(_id)
        req.user=user
        next()
    })
}