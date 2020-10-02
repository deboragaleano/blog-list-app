
// First define a dummy function that receives an array of blog posts as a parameter and always returns the value 1.
const dummy = (blogs) => {
    return 1; 
}

// Define a new totalLikes function that receives a list of blog posts as a parameter. The function returns the total sum of likes in all of the blog posts.
const totalLikes = (blogs) => {
    //{post: text, likes: 7}
    let total = []
    blogs.map(b => {
        total.push(b.likes)
    })
    return blogs.length === 0 
           ? 0 : total.reduce((a, b) => a + b)
}

module.exports = {
    dummy,
    totalLikes
}