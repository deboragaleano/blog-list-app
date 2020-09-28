require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')


// MODEL CONFIG 
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

// DATABASE CONFIG
const mongoUrl = process.env.MONGODB_URI

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

// APP MIDDLEWARE
app.use(cors())
app.use(express.json())

//ROUTES

/* Get request */
app.get('/', (req, res) => {
    res.send('hello')
})


// SERVER CONFIG 
const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})