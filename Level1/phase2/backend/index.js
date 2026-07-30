import express from 'express'
import env from 'dotenv'

env.config()

const app = express()
const port =   process.env.PORT ||8001

app.get("/",(req,res)=>{
    res.status(200).json({message:"Hello from phase 2"})
})

app.listen(port,()=>{
    console.log("server started at " + port)
})