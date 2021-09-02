const app = require('express').Router()
const recordModel = require('../model/tableData')
const auth = require('./auth')


app.get('/home',async(req,res)=>{
    let records = await recordModel.find({})
    res.json({message:records},records)
})


module.exports = app
