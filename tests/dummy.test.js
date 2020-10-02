
const dummy = require('../utils/list_helper').dummy

describe('dummy', () => {
    test('empty array returns 1', () => {
        expect(dummy([])).toBe(1)
    })

    test('blogs array returns 1', () => {
        expect(dummy(['1', '2'])).toBe(1)
    })
})


