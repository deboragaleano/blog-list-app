// Handling of environment variables
// The other parts of the application can access the environment variables by importing the configuration module:

require('dotenv').config()

const PORT = process.env.PORT 
let MONGODB_URI = process.env.MONGODB_URI

if(process.env.NODE_ENV === 'test') {
    MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
    MONGODB_URI, 
    PORT
}