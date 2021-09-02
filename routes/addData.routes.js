const app = require('express').Router()
const recordModel = require('../model/tableData')


app.post('/handleAddData',async(req,res)=>{
    const{Id,name,salary,dep,address} = req.body

    await recordModel.insertMany({Id,name,salary,dep,address})
    res.json({message:'done'})

})

module.exports = app 