// creating a server
const express = require('express');
const app = express();
// hbs template Engine import to run html file
const hbs = require('hbs');
// mongoose connection 
const mongoose = require('mongoose');
// body parser
const bodyparser = require('body-parser')
// routes import
const routes = require('./routes/main')
// Schema Import
const Detail = require("./models/details")
const Blog = require('./models/Blog')

app.use(bodyparser.urlencoded({
  extended: true
}));
// static file use
app.use('/static', express.static("public"))
app.use('', routes)

// hbs (template engine)
app.set('view engine', 'hbs')
app.set("views", "views");
hbs.registerPartials("views/partials");
// db connection
mongoose.connect("mongodb://127.0.0.1:27017/Prototype_website")
  .then(() => {
    console.log("Connected to the database");
   

  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

  // dynamic_blog
//   Blog.create(
//     {
//       Intro:"In today's data-driven world, the role of a data analyst has transcended traditional boundaries and has become an indispensable asset across various domains. From web design to programming and computer vision, data analysts are instrumental in harnessing the potential of data to drive informed decision-making and deliver innovative solutions. In this blog, we will delve into the significance of data analysts in these fields and explore how their expertise can transform the way we approach these disciplines.",
//       heading_first:'The heaven for bloggers',
//       paragraph:"Are you passionate about technology? Do you crave in-depth insights into the latest trends, innovations, and breakthroughs in the tech field? Look no further! Our blog is your gateway to the captivating realm of all things tech. With a team of knowledgeable and experienced writers, we bring you carefully curated content that covers a wide spectrum of topics. From artificial intelligence and machine learning to cybersecurity, web development, data analysis, and much more, our blog is a treasure trove of valuable information that will keep you informed and inspired.",
//       imageUrl:'/static/images/blog_main.jpg',
//       blog_posts:[
//    {
//       blog_title:'How to be a Programmer',
//       blog_date:'17 FEB 2023',
//       blog_intro:'This is progming language',
//       blog_imageUrl:'/static/images/blog.jpg'
//       },
//       {
//         blog_title:'How to be a Programmer',
//         blog_date:'17 FEB 2023',
//         blog_intro:'This is progming language',
//         blog_imageUrl:'/static/images/blog.jpg'
//         },
//         {
//           blog_title:'How to be a Programmer',
//           blog_date:'17 FEB 2023',
//           blog_intro:'This is progming language',
//           blog_imageUrl:'/static/images/blog.jpg'
//           },
//           {
//             blog_title:'How to be a Programmer',
//             blog_date:'17 FEB 2023',
//             blog_intro:'This is progming language',
//             blog_imageUrl:'/static/images/blog.jpg'
//             },
//             {
//               blog_title:'How to be a Programmer',
//               blog_date:'17 FEB 2023',
//               blog_intro:'This is progming language',
//               blog_imageUrl:'/static/images/blog.jpg'
//               },
//               {
//                 blog_title:'How to be a Programmer',
//                 blog_date:'17 FEB 2023',
//                 blog_intro:'This is progming language',
//                 blog_imageUrl:'/static/images/blog.jpg'
//                 },
//                 {
//                   blog_title:'How to be a Programmer',
//                   blog_date:'17 FEB 2023',
//                   blog_intro:'This is progming language',
//                   blog_imageUrl:'/static/images/blog.jpg'
//                   },
//                   {
//                     blog_title:'How to be a Programmer',
//                     blog_date:'17 FEB 2023',
//                     blog_intro:'This is progming language',
//                     blog_imageUrl:'/static/images/blog.jpg'
//                     },
//     ],
//   }
// )


  
app.listen(process.env.PORT || 5566, () => {
  console.log("server started");
});