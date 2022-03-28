const jwt=require("jsonwebtoken")

const User=require("../models/user-model")
require("dotenv").config()

// console.log(process.env.SECRET_KEY);
const newtoken=(user)=>{
    return jwt.sign({user},process.env.SECRET_KEY)
}

const register=async(req,res)=>{
    try{
        let user=await
        User.findOne({email:req.body.email})
        if(user){
            return
            res.status(400).send({message:"email alredy exist"})
        }
        user=await User.create(req.body)
        const token =newtoken(user)
        return res.status(200).send({user,token})
    }
    catch(err){
        res.status(500).send(err.message)
    }

}

const login =async(req,res)=>{
    try{
      const user=await
      User.findOne({email:req.body.email})
      if(!user){
          return
          res.status(400).send({message:"wrong email or pass"})
      }
      const equal=user.checkPassword(req.body.password)
      if(!equal){
          return
          res.status(400).send({message:"wrong email pass"})

      }
      const token =newtoken(user)
      return res.status(200).send({user,token})
    }
    catch(err){

    }
}

module.exports={register,login}