 const Product = require('../models/product')
exports.getAddProduct = (req, res, next) => {
    res.render('admin',
        {
            pageTitle: "Admin Page (PUG)",
            path: '/admin/add-pro',
            productCss:true

        })

}
exports.postAddProduct =(req, res, next) => {
    // product.pop()
    // product.push({ title: req.body.title })
    const product = new Product(req.body.title)
    product.save()
    res.status(202).redirect('/')
}

exports.getProduct = (req, res, next) => {
    // console.log(" shop.js file ", product)
    Product.fetchAll(products =>{
        res.render('shop',
        {
            prods: products,
            pageTitle: "Home Page (PUG)",
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
        })
    })

}

