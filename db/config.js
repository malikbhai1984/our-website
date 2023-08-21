

const mongoose = require("mongoose");


//const DB = "mongodb+srv://gidsnext:gidsnext@cluster0.azl5n5y.mongodb.net/gidsnext?retryWrites=true&w=majority"
const DB = "mongodb://127.0.0.1:27017/nextgids"

mongoose.connect(DB).then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log(err)
})