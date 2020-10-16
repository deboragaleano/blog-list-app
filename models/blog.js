// Model Config 

const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

// CRUCIAL!
// One way to format the objects returned by Mongoose is to modify the toJSON method of the schema, 
// which is used on all instances of the models produced with that schema. 
// Even though the _id property of Mongoose objects looks like a string, it is in fact an object. 
// The toJSON method we defined transforms it into a string just to be safe. 
// Modifying the method works like this:

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blog', blogSchema)