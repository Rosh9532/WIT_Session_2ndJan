const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
    Title:{
      type:String
    },
    Description:{
     type:String
    },
    Author:{
   type:String
    },
    Likes:{
        type:Number,
        default:0
    }
},{timestamps:true})

module.exports=mongoose.model("Post",postSchema)