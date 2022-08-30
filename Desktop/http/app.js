const express = require('express')
const path = require ('path')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.set('views','views')

const adminData = require('./routes/admin')
const productRoute = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

 app.use('/admin',adminData.routes)
 app.use(productRoute)

 app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'))

   //  res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'))
      res.status(404).render('pageNotFound',{ pageTitle:"Page Error PUG "})
 })


//  ------code---for the try---
//  app.use('/add/:num1/:num2',(req,res,next)=>{
//     sumOb = num1+num2;
//    if(req.query.operator='minus'){
//       sumOb= num1-num2;
//    }
//     res.send(sumOb);
//  })


 
app.listen(3002);