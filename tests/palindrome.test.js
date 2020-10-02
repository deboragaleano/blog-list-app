
// In the first row, the test file imports the function to be tested and assigns it to a variable called palindrome:
const palindrome = require('../utils/for_testing').palindrome


// Individual test cases are defined with the test function. 
// The first parameter of the function is the test description as a string. 
// The second parameter is a function, that defines the functionality for the test case. 

test('palindrome of a', () => {
    const result = palindrome('a')

    // Next we verify the results with the expect function. 
    // Expect wraps the resulting value into an object that offers a collection of matcher functions, that can be used for verifying the correctness of the result.
    // Since in this test case we are comparing two strings, we can use the toBe matcher.

    expect(result).toBe('a')
})

test('palindrome of react', () => {
    //if we give the function "react", we expecto to receive the reverse version 
    const result = palindrome('react')

    // or expect(palindrome('react)).toBe('tcaer)
    expect(result).toBe('tcaer')
})

test('palindrome of madam', () => {
    const result = palindrome('madam')

    expect(result).toBe('madam')
})