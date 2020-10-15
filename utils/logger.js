// Separating all printing to the console
// The logger has two functions, info for printing normal log messages, 
// and error for all error messages.

const info = (...params) => {
    if(process.env.NODE_ENV !== 'test') {
        console.log(...params)
    }
}

const error = (...params) => {
    console.log(...params)
}

module.exports = {
    info, error
}