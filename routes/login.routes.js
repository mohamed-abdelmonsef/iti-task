const app = require('express').Router()
const userModel = require('../model/emps.model')
var jwt = require('jsonwebtoken');

app.post('/handleLogin',async(req,res)=>{
    const{email,password} = req.body

    let user = await userModel.findOne({email})

    if(user){
        if (user.password==password) {
            const token = jwt.sign({userId:user._id,isLogged:true},'hamada')
            res.header({token}).json({message:'logged'})
        } else {
            console.log('wrong pass');
        }
    }else{
        console.log('user not exist');
    }

})

module.exports = app 