const express=require("express")

const app=express()

const connect=require("./config/dbs")

// const usercontroller=require("./models/user-model")




app.listen(5000, async()=>{
    try{
        await connect()
        console.log("connecting to port 5000");
    }
    catch(err){
        console.log("Error");
    }
})
