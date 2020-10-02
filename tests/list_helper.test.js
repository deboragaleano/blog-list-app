
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
    test('of a bigger list is calculated right', () => {
        const biggerList = [
            {
                _id: '44444',
                title: 'Test',
                author: 'test author',
                url: 'someurl',
                likes: 5, 
                __v: 0
            }, 
            {
                _id: '44434',
                title: 'Test',
                author: 'test author',
                url: 'someurl',
                likes: 5, 
                __v: 0
            }
        ]
        expect(totalLikes(biggerList)).toBe(10)
    })

})

