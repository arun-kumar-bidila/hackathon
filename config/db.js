const mongoose=require("mongoose");

const connection=mongoose.createConnection("mongodb+srv://arunkumarbidila:Arun5452@cluster0.ss1sn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").on("open",()=>{
    console.log("mongodb connected successfully");
}).on("error",()=>{
    console.log("error occured in connection");

});

module.exports=connection;