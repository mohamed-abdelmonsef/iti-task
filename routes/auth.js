
var jwt = require('jsonwebtoken');


module.exports = (req,res,next)=>{
    const token = req.header('token')

    if(token && token!=undefined && token!=null){
        jwt.verify(token ,'hamada' ,(err,decoded)=>{
            if (err) {
                res.json({message:'invalid token'})
            } else {
                console.log(decoded.isLogged);
            if(decoded.isLogged){
                    next()
            }else{
                    res.json({message:'login first'})
            }
            }
        })
    }
}