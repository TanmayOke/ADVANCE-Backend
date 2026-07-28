import express from 'express'
import env from 'dotenv'

env.config()
const port = process.env.PORT || 5555
const app =express()

app.get("/",(req,res)=>{
    res.status(200).json({message:"hello from docker"})
})

app.listen(port,()=>{
    console.log("Hello serve started at " + port + " wapas se server start hogya")
})