const mongoose=require("mongoose");
require("dotenv").config()


const connection=mongoose.createConnection(process.env.DB_URL).on("open",()=>{
    console.log("mongodb connected successfully");
}).on("error",()=>{
    console.log("error occured in connection");

});

module.exports=connection;