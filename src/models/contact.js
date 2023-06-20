// Add contact schema on mondodb
const mongoose = require("mongoose");

const contact = mongoose.Schema({
    name:String,
    email:String,
    phone_number:String,
    query:String
})

module.exports=mongoose.model("quaries",contact)