const express = require('express')

const path = require('path')

const  rootDirectory = require('../utils/path')

const adminData = require('./admin')

const router = express.Router()

router.get('/',(req, res, next ) => {
    // console.log("in middleware2");
    // res.status(202).send("<h1> Hello World </h1>");
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    console.log(" shop.js file ",adminData.products)
    // res.sendFile(path.join(rootDirectory,'views','shop.html'))

    const product = adminData.products;
    res.render('shop', {prods:product, pageTitle:"Home Page (PUG)", path:'/'})
    // res.redirect('/add-pro')

})
module.exports= router