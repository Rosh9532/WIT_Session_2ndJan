const Post=require('../models/post')

exports.addPost=async(req,res)=>{
    const title=req.body.title
    const description=req.body.description
    const author=req.body.author

    const post=new Post({
        Title:title,
        Description:description,
        Author:author
    })
    post.save((err,data)=>{
        if(err){
            res.status(400).json({
                message:"There is an error while posting the article"
            })
        }
        if(data){
            res.status(200).json({
                message:"Article successfully posted",
                data:data
            })
        }
    })

}

exports.getPost=async(req,res)=>{
    Post.find({},(err,data)=>{
        if(err){
            res.status(400).json({
                message:"There is an error while fetching  the article"
            })
        }
        if(data){
            res.status(200).json({
                message:"Article successfully fetched from the database",
                data:data
            })
        }
    })
}


exports.getSpecificPost=async(req,res)=>{
    const id=req.params.id
    Post.findOne({_id:id},(err,data)=>{
        if(err){
            res.status(400).json({
                message:"There is an error while fetching  the  specific article"
            })
        }
        if(data){
            res.status(200).json({
                message:"Specified Article successfully fetched from the database",
                data:data
            })
        }
    })
}

exports.UpdatePost=async(req,res)=>{
    const id=req.params.id
  
    Post.findOneAndUpdate({_id:id},{$set:{Title:req.body.title}},{new:true},(err,data)=>{
        if(err){
            res.status(400).json({
                message:"There is an error while updating  the  specific article"
            })
        }
        if(data){
            res.status(200).json({
                message:"Specified Article successfully updated in the database",
                data:data
            })
        }
    })
}


exports.likePost=async(req,res)=>{
    const id=req.params.id
  
    Post.findOneAndUpdate({_id:id},{$inc:{Likes:1}},{new:true},(err,data)=>{
        if(err){
            res.status(400).json({
                message:"There is an error while liking the  specific article"
            })
        }
        if(data){
            res.status(200).json({
                message:"Specified Article successfully liked",
                data:data
            })
        }
    })
}


exports.DeletePost=async(req,res)=>{
    const id=req.params.id
    Post.findOneAndDelete({_id:id},(err,data)=>{
        if(err){
            res.status(400).json({
                message:"There is an error while deleting  the  specific article"
            })
        }
        if(data){
            res.status(200).json({
                message:"Specified Article successfully deleted from the database",
                data:data
            })
        }
    })
}




