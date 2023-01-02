const User=require('../models/user')
const bcrypt=require('bcrypt')

exports.Signup=async(req,res)=>{
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    const phone=req.body.phone
    const hash_password=await bcrypt.hash(password,10) 

    const user=new User({
        Name:name,
        Email:email,
        Password:hash_password,
        Phone:phone

    })

    user.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:"There is an error while registering the user"
            })
        }
        if(data){
            res.status(200).json({
                message:"User successfully registered",
                data:data
            })
        }
    })



}

exports.login=async(req,res)=>{
    User.findOne({Email:req.body.email},async(err,data)=>{
        if(err){
            res.status(400).json({
                message:"There is an error"
            }) 
        }
        if(data){
            const isPassword=await data.authenticate(req.body.password)
            if(isPassword){
                res.status(200).json({
                    message:"User successfully logged in",
                    data:data
                })  
            }else{
                res.status(400).json({
                    message:"Password is Incorrect",
                
                })
            }
        }else{
            res.status(400).json({
                message:"User not found",
                data:data
            })
        }
    })
}