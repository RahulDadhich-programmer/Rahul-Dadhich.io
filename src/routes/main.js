const express = require('express');
const routes = express.Router()
const { model } = require('mongoose');
const { route } = require('express/lib/application');
// Navbar Schema Import
const Detail = require("../models/details");
// Contact schema Import
const contact = require('../models/contact');
// Register Schema Import
const Register_user= require('../models/Register');
// Blog Schema Import
const Blog= require('../models/Blog');


// Route create for navbars 
// for Home
routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ _id: "64803e92b5be0cac06858088" })
    res.render("index", {
        details: details,
    });
});
// for Blog
routes.get('/Blog', async (req, res) => {
    const details = await Detail.findOne({ _id: "64803e92b5be0cac06858088" })
    // Add blog posts on Blog Section
    const blogPosts = await Blog.findOne({_id: "648ac8300973675564abbee7"})
    
    res.render("Blog", {
        details: details,
        Blog:blogPosts,     
    });
});
// for Project
routes.get('/Project', async (req, res) => {
    const details = await Detail.findOne({ _id: "64803e92b5be0cac06858088" })
    
    res.render("Project", {
        details: details,
    });
});
// for Login
routes.get('/login', async (req, res) => {
    const details = await Detail.findOne({_id:"64803e92b5be0cac06858088"})

    res.render("login",{
        details:details,
    });
});
// For Register
routes.get('/SignUp', async (req, res) => {
    const details = await Detail.findOne({_id:"64803e92b5be0cac06858088"})

    res.render("signUp",{
        details:details,
    });
});
// route for contact form
routes.post("/process-contact-form", async (request, response) => {
    console.log(request.body);
    // save the data to db
    try {
        const data = await contact.create(request.body)
        console.log(data)
        response.redirect("/")
    } catch (e) {
        console.log(e)
        response.redirect("/")
    }
});
// Route for Resiteration 
routes.post("/process-Register-form", async (request, response) => {
    console.log(request.body);
    // save the data to db
    try {
        const data = await Register_user.create(request.body)
        console.log(data)
        response.redirect("/");
    } catch (e) {
        console.log(e)
        response.redirect("/")
    }
});
// Routes for login form
routes.post("/process-Login-form", async (request, response) => {
    console.log(request.body);
    try{
        const email = request.body.email;
        const password = request.body.password;

      const useremail = await  Register_user.findOne({email:email});

        if(useremail.password === password){
            response.status(201).render("Home");
        }else{
            response.send("Incorrect Password");
        }

    }
    catch (error){
        response.status(404).send(" Email Not Registered")
    }
});

module.exports = routes;











