const express=require("express")
const { addPost, getPost, getSpecificPost, UpdatePost, likePost, DeletePost } = require("../controllers/post")
const { route } = require("./user")
const router=express.Router()

router.post('/posts',addPost)
router.get('/posts',getPost)
router.get('/posts/:id',getSpecificPost)
router.patch('/posts/:id',UpdatePost)
router.patch('/posts/:id/like',likePost)
router.delete('/posts/:id',DeletePost)

module.exports=router