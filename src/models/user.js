const mongoose=require("mongoose")
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
    Name:{
     type:String
    },
    Email:{
    type:String,
    required:true
    },
    Password:{
  type:String
    },
    Phone:{
  type:Number
    }
},{timestamps:true})

//instance methods
//true or false
userSchema.methods={
    authenticate:async function(password){
        return await bcrypt.compareSync(password,this.Password)
    }
}

module.exports=mongoose.model("User",userSchema)