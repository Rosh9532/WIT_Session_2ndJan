const express=require("express")
const mongoose=require("mongoose")
const env=require("dotenv")
const app=express()
env.config()
//path,callback function
// app.get('/',(req,res)=>{
//     res.send("Welcome to the session")
// })
app.use(express.json())

const userRoutes=require('./routes/user')
const postRoutes=require('./routes/post')
app.use('/api',userRoutes)
app.use('/api',postRoutes)

mongoose.set('strictQuery', false);
//MONGODB CONNECTION,parameter to avoid warnings
mongoose.connect(`${process.env.MONGO_URL}`,{
 useUnifiedTopology:true,
 useNewUrlParser:true
}).then(()=>{
    console.log("Connected to database successfully")
}).catch((err)=>{
    console.log(err)
})


//port number, function
app.listen(4000,console.log("Server is listening"))