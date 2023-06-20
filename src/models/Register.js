// Add Register schema to MongoDb
const mongoose = require("mongoose");
const Register = mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    password:String
})

module.exports=mongoose.model("Register_user",Register)


