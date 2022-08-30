const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressHandlebars = require('express-handlebars')
const errorController= require('./controller/error')

const app = express()
app.engine('hbs', expressHandlebars
({ 
   layoutsDir: 'views/layouts',
   defaultLayout: 'main-layout',
   extname:'hbs' 
})
)
app.set('view engine', 'hbs')
app.set('views', 'views')

const adminRoute = require('./routes/admin')
const productRoute = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoute)
app.use(productRoute)

app.use(errorController.getError)

app.listen(3002);