const express = require("express");
const cors = require('cors')
// require('dotenv/config')
const mongoose = require("mongoose");
const UserRoute = require('./Routes/UserRoute')


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1/HMS').then(()=> console.log('Connected to DB successfully')).catch(err=>console.log(err))

app.use('/api/user/', UserRoute)

app.listen(5000, ()=>{
    console.log('App is running on port 5000')
})