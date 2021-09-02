const mongoose = require('mongoose')

const empSchema = mongoose.Schema({
    Id:String,
    name:String,
    salary:String,
    dep:String,
    address:String
})

module.exports = mongoose.model('record',empSchema)