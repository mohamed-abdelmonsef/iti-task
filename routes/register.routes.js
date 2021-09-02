const app = require('express').Router()
const userModel = require('../model/emps.model')

app.post('/handleRegister',async(req,res)=>{
    const{name,email,password} = req.body

    await userModel.insertMany({name,email,password})
    res.json({message:'done'})

})

module.exports = app 