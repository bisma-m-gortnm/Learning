const express = require("express")

const productsController= require('../controller/products')

const router = express.Router()

router.get('/add-pro', productsController.getAddProduct)

router.post('/add-pro',productsController.postAddProduct)

module.exports=router;


// exports.routes = router;
// exports.products = product;
