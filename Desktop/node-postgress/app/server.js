const express = require('express')

const bodyParser = require('body-parser')

const cors = require('cors')

const db = require('../app/models')

db.sequelize.sync()
    .then(()=>{
        console.log("synced database")
    })
    .catch((err)=>{
        console.log("failed to sync db " + err.message)
    })

const app = express()

var corsOptions = {
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res,next)=>{
    res.json({message:" hello world"})
    console.log("helo")
})

require('../app/routes/student_routes')(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT,() =>{
    console.log(`server is running on ${PORT}`)
})