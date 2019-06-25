function mapIt(array, callback) {
    const newArray = [];

    for(let i = 0; i < array.length; i++) { 
        newArray[i] = callback(array[i]);
    }
    return newArray;
}

function filterIt(array, callback) {
    const newArray = [];

    for(let i = 0; i < array.length; i++) {
        if(callback === array[i]) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

function findIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback === array[i]) {
            return i;
        }
    }
    return -1;
}

function every(array, callback) {

    for(let i = 0; i < array.length; i++) {
        if(!callback(array[i])) {
            return false;
        }
    }
    return true;
}

function reduceIt(array, callback) {
    let accumulator = 0;
    for(let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]); 
    }
    return accumulator;
}

module.exports = { mapIt, filterIt, findIndex, every, reduceIt };
