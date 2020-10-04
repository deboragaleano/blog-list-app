const { some, result, isArguments } = require('lodash');
const _ = require('lodash'); 


// First define a dummy function that receives an array of blog posts as a parameter and always returns the value 1.
const dummy = (blogs) => {
    return 1; 
}

// Define a new totalLikes function that receives a list of blog posts as a parameter. The function returns the total sum of likes in all of the blog posts.
const totalLikes = (blogs) => {
    let total = []
    blogs.map(b => {
        total.push(b.likes)
    })
    return blogs.length === 0 
           ? 0 : total.reduce((a, b) => a + b)
}

//Define a new favoriteBlog function that receives a list of blogs as a parameter. The function finds out which blog has most likes. If there are many top favorites, it is enough to return one of them.
const favoriteBlog = (blogs) => {
   const maxNum = Math.max(...blogs.map(b => b.likes))
   return blogs.find(b => b.likes === maxNum)
}

/* CHECK IF THIS IS OK - CHECK LODASH METHODS */
// Define a function called mostBlogs that receives an array of blogs as a parameter. 
// The function returns the author who has the largest amount of blogs. 
const mostBlogs = (blogs) => {
    const getAuthors = blogs.map(b => b.author)

    // found function here: https://gist.github.com/ralphcrisostomo/3141412 
    const result = getAuthors.reduce((b,c)=>((b[b.findIndex(d=>d.author===c)]||b[b.push({author:c,blogs:0})-1]).blogs++,b),[]);
    
    const mostBlogs = _.maxBy(result, 'blogs');

    return mostBlogs; 
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}