// Route handlers
// The event handlers of routes are commonly referred to as controllers
//  All of the routes related to blogs are now in the blogs.js module under the controllers directory.


const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

/* Get request */
blogsRouter.get('/', async (req, res) => {
    const blogs = await Blog.find({})
    res.json(blogs)
})

/* Post request */
blogsRouter.post('/', (req, res) => {
    const newBlog = new Blog(req.body)

    // CHECK if correct! - if property likes is not defined, default to 0 
    if(!req.body.likes) {
        newBlog.likes = 0
    }

    if(!req.body.title || !req.body.url) {
        res.status(400).json({message: 'title or url are missing'}) 
    } else {
        newBlog.save()
            .then(result => {
                res.status(201).json(result)
            })
    }
})

module.exports = blogsRouter