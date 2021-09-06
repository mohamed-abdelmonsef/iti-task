const app = require('express').Router()
const recordModel = require('../model/tableData')
const auth = require('./auth')


app.get('/home',async(req,res)=>{
    let records = await recordModel.find({})
    res.json(records)
})


app.delete('/delete',async(req,res)=>{

    await recordModel.findOneAndDelete({Id:req.body.id})
    res.json({message:"deleteddddddd"})
})

app.put('/edit',async(req,res)=>{
    const {name,salary,dep,address} = req.body
    await recordModel.findOneAndUpdate({Id:req.body.id},{name,salary,dep,address})
    res.json({message:"editedddddddddd"})
})

module.exports = app
