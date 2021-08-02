const express = require('express')
const customerRouter = require('./routes/customer')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const methodOverride = require('method-override')
    //views
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
const connectFunc = async() => {
    try {
        await mongoose.connect("mongodb+srv://qlkh:Khanhha192@cluster0.1vu99.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log("Connected successfully")
    } catch (e) {
        console.log("connection failed")
    }
}
connectFunc()
app.use('/customer/', customerRouter)
app.use('/', indexRouter)
app.listen(process.env.PORT || 3000)