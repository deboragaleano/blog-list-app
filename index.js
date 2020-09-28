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
app.get('/api/blogs', (req, res) => {
    Blog.find({})
        .then(blogs => {
            res.json(blogs)
        })
})

/* Post request */
app.post('/api/blogs', (req, res) => {
    const newBlog = new Blog(req.body)

    newBlog.save()
        .then(result => {
            res.status(201).json(result) // created success status code 
    })
})


// SERVER CONFIG 
const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})