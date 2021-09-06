const app = require('express').Router()
const recordModel = require('../model/tableData')
const auth = require('./auth')


app.get('/home',async(req,res)=>{
    let records = await recordModel.find({})
    res.json({Data:records})
})

app.delete('/handleDelete',async(req,res)=>{
    await recordModel.findOneAndDelete({_id:req.body.id})
    res.json()
})


module.exports = app