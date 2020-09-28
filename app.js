// The actual Express application 

const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

// logger.info('connecting to', config.MONGODB_URI)

// DATABASE CONFIG
// The responsibility of establishing the connection to the database has been given to the app.js module
mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((err) => {
        logger.error('error connecting to MongoDB:', err.message)
    })

// APP MIDDLEWARE
app.use(cors())
// app.use(express.static('build'))
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app




