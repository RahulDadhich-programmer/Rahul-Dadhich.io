// Add Blog schema to mongodb
const mongoose = require("mongoose");
const Blog = mongoose.Schema({
    Intro:String,
    heading_first:String,
    paragraph_first:String,
    imageUrl:String,
   blog_posts:[
{
       blog_title:String,
       blog_date:String,
       blog_intro:String,
       blog_imageUrl:String
},
    ],
});

module.exports = mongoose.model("Blogs",Blog);