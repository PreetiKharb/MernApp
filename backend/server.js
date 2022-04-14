const exp = require('constants')
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('../backend/middleware/errorMiddleware')
const port = process.env.PORT || 5000
const goalRouter = require('./routes/goalRoutes')
const app = express()

// middleware for request parsing
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api', goalRouter)

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})