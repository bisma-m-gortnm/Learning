const express = require("express")

const path = require("path")

const rootDirectory = require('../utils/path')

const router = express.Router()

const product =[
    // {title: "books"},
    // {title: "pen"}
];

router.get('/add-pro',(req, res, next ) => {
    // console.log("in middleware1");
    //  res.status(202).send('<form action="/admin/add-pro" method="POST">  <input type="text" name="title"> <button type="submit"> Add Product </button></form>');

    // res.sendFile(path.join(__dirname,'../','views','admin.html'))

    // res.sendFile(path.join(rootDirectory,'views','admin.html'))
    
    res.render('admin', {pageTitle:"Admin Page (PUG)", path:'/admin/add-pro'})

})


router.post('/add-pro',(req,res,next)=>{
   
    // console.log(req.body)
    product.pop()
    product.push({title:req.body.title})
    res.status(202).redirect('/')
})

// module.exports=router;
exports.routes=router;
exports.products=product;
// module.exports={router,product}
