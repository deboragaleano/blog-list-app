
//extract the function to be tested
const average = require('../utils/for_testing').average


//TEST SUITE

// Describe blocks can be used for grouping tests into logical collections. 
describe('average', () => {
    //Individual tests 
    test('of one value is the value itself', () => {
        expect(average([1])).toBe(1)
    })

    test('of many is calculated right', () => {
        expect(average([1,2,3,4,5,6])).toBe(3.5)
    })

    test('of empty array is zero', () => {
        expect(average([])).toBe(0)
    })
})




