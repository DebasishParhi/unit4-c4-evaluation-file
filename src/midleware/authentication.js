require ("dotenv").config()

const res = require("express/lib/response")
const jwt= require("jsonwebtoken")

const bToken= (token)=>{
    return new Promise((resolve,reject)=>{
        var decoded=jwt.verify(token,process.env.SECRET_KEY,function(err),decoded){
            if(err){
                return reject(err)
            }
            return resolve(decoded)
        })
    })
}

const autenticate=async(req,res,next)=>{
    if(!req.headers.authorization){
        return res.status (400).send({message:"authontication tic not found"})
    }
}

if(!req.headers.authorization.startWith("Bearer")){
    return res.status(400).send({meaasage:"token not found"})

}
const token =req.headers.authorization.trim().split("")[1]
let decoded
try{
    decoded=await betterToken(token)
}
catch(err){
    console.log("err");
    return res.status(400).send({message:"token not found"})

}
console.log("decoded ;",decoded);

req.user=decoded.user
return next()


module.exports=autenticate