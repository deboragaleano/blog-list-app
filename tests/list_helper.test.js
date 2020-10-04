
const dummy = require('../utils/list_helper').dummy

describe('dummy', () => {
    test('empty array returns 1', () => {
        expect(dummy([])).toBe(1)
    })

    test('blogs array returns 1', () => {
        expect(dummy(['1', '2'])).toBe(1)
    })
})

// Write appropriate tests for the function. It's recommended to put the tests inside of a describe block, so that the test report output gets grouped nicely:

const totalLikes = require('../utils/list_helper').totalLikes

const blogsList = [
    { _id: "5a422a851b54a676234d17f7", 
        title: "React patterns", 
        author: "Michael Chan", 
        url: "https://reactpatterns.com/", 
        likes: 7, 
        __v: 0 }, 
    { _id: "5a422aa71b54a676234d17f8", 
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra", 
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", 
        likes: 5, 
        __v: 0 }, 
    { _id: "5a422b3a1b54a676234d17f9", 
        title: "Canonical string reduction", 
        author: "Edsger W. Dijkstra", 
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", 
        likes: 12, 
        __v: 0 }, 
    { _id: "5a422b891b54a676234d17fa", 
        title: "First class tests", 
        author: "Robert C. Martin", 
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", 
        likes: 10, 
        __v: 0 }, 
    { _id: "5a422ba71b54a676234d17fb", 
        title: "TDD harms architecture", 
        author: "Robert C. Martin", 
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", 
        likes: 0, 
        __v: 0 }, 
    { _id: "5a422bc61b54a676234d17fc", 
        title: "Type wars", 
        author: "Robert C. Martin", 
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", 
        likes: 2, 
        __v: 0 }
]

describe('total likes', () => {
    test('of empty list is zero', () => {
        expect(totalLikes([])).toBe(0)
    })

    test('when list has only one blog equals the likes of that', () => {
            //Dummy blogs array with one post 
        const listWithOneBlog = [
            {
                _id: '44444',
                title: 'Test',
                author: 'test author',
                url: 'someurl',
                likes: 5, 
                __v: 0
            }
        ]

        expect(totalLikes(listWithOneBlog)).toBe(5)
    })

    //to test only this test, then add test.only('blablabla')
    // Another way of running a single test (or describe block) is to specify the name of the test to be run with the -t flag:
    // npm test -- -t 'when list has only one blog, equals the likes of that'

    /* CHECK THIS ONE IF IT'S CORRECT */
    test('of a bigger list is calculated right', () => {
        // const sumLikes = // add a function that calculates this ones (? - check if this is what we do)
        expect(totalLikes(blogsList)).toBe(36)
    })

})

const favoriteBlog = require('../utils/list_helper').favoriteBlog

/* CHECK THIS ONE IF IT'S CORRECT */
describe('favorite blog', () => {
    const higherLikes = 
            { _id: "5a422b3a1b54a676234d17f9", 
            title: "Canonical string reduction", 
            author: "Edsger W. Dijkstra", 
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", 
            likes: 12, 
            __v: 0 }

    test('returns favorite blog', () => {
        //NB when you are comparing objects, the toEqual method is probably what you want to use, since the toBe tries to verify that the two values are the same value, and not just that they contain the same properties.
        expect(favoriteBlog(blogsList)).toEqual(higherLikes)
    })

})

const mostBlogs = require('../utils/list_helper').mostBlogs

describe('most blogs', () => {
    /* CHECK THIS ONE IF IT'S CORRECT - how to not hardcode the this object below */
    const authorWithMostBlogs = {
        author: "Robert C. Martin",
        blogs: 3
      }

    test('returns author that has most blogs', () => {
        expect(mostBlogs(blogsList)).toEqual(authorWithMostBlogs)
    })

})
