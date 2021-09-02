const express = require('express')
const app = express()
var cors = require('cors')
const mongoose = require('mongoose');
app.use(express.json())


app.use(cors())
app.use(require('./routes/register.routes'))
app.use(require('./routes/login.routes'))
app.use(require('./routes/addData.routes'))
app.use(require('./routes/home.routes'))


mongoose.connect('mongodb+srv://admin:admin@cluster0.srnvy.mongodb.net/itiDB').then(()=>{
    console.log('Db workinggg')
})
app.listen(process.env.PORT||3000,()=>{
    console.log('server is working');
})