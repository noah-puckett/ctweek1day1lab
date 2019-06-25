const { mapIt, filterIt, findIndex, every, reduceIt } = require('../array-methods');

describe('array methods', () => {

    it('mapIt will apply a callback to each item of an array, provided the callback returns a value', () => {

        const array = [2, 4, 8];

        function multiply(item) {
            return item * 2;
        }

        const result = mapIt(array, multiply);

        const expected = [4, 8, 16];

        expect(result).toEqual(expected);

    });

    it('filterIt filters things if they are true and returns a new array with filtered results', () => {
        const array = ['things', 'stuff', 1, 4];

        function callback(filter) {
            if(filter) {
                return filter;
            }
        }
        
        const result = filterIt(array, callback('stuff'));

        const expected = ['stuff'];

        expect(result).toEqual(expected);
    });

    it('findIndex loops through each array index for a matching value and if true, return the index of the value, if false return -1', () => {
        const array = ['things', 'stuff', 1, 4];

        function callback(item) {
            if(item) {
                return item;
            }
        }
        const result = findIndex(array, callback(4));

        const expected = 3;

        expect(result).toBe(expected);
    });


    it('every returns true if EVERY item in an array resolves to true, otherwise it returns false', () => {
        const array = [true, false, true];

        function callback(item) {
            if(item) {
                return true;
            }
            else {
                return false;
            }
        }

        const result = every(array, callback);

        const expected = false;

        expect(result).toEqual(expected);
    });

    it('reduceIt sequentially adds every value in an array and returns the accumulated value of all items', () => {
        const array = [2, 2, 4];

        function callback(accumulator, item) {
            return accumulator += item;
        }

        const result = reduceIt(array, callback);

        const expected = 8;

        expect(result).toEqual(expected);
    });

});
