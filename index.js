// Loads .en file contents info process.env by default.
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
require('./DB/connect')
// Create an Express application.
const pfServer=express()
// Use cors in express server
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
const PORT=3000 || process.env.PORT
pfServer.listen(PORT,()=>{
    console.log(`project Fair Server Start at PORT:${PORT}`);
})
// http://localhost:3000/
pfServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red">project Fair Server Started and waiting for client request!!</h1>`)

})
