const mapIt = require('../array-methods');

describe('array methods', () => {

    it('will apply a callback to each item of an array, provided the callback returns a value', () => {

        const array = [2, 4, 8];

        function multiply(item) {
            return item * 2;
        }

        const result = mapIt(array, multiply);

        const expected = [4, 8, 16];

        expect(result).toEqual(expected);

    });

});
