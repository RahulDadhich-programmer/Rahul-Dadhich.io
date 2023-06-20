// Add Navbar schema to mongoDb
const mongoose = require("mongoose")
const Detail=mongoose.Schema({
    brandName:String,
    links:[{
        label:String,
        url:String
    },
],

});

module.exports = mongoose.model("details",Detail)
