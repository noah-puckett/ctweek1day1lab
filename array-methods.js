//npm run test runs jest verbose


// const array = [2, 4, 8];

// function callback(item) {
//   return item * 4;
// }

function mapIt(array, callback) {
    const newArray = [];

    for(let i = 0; i < array.length; i++) { 
        newArray[i] = callback(array[i]);
    }
    return newArray;
}

// const array = ['thing', 'stuff', 'more items', 'thing'];

// function callback(filter) {
//     if(filter) {
//         return filter;
//     }
// }

function filterIt(array, callback) {
    const newArray = [];

    for(let i = 0; i < array.length; i++) {
        if(callback === array[i]) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

// function callback(item) {
//     if(item) {
//         return item;
//     }
// }

function findIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback === array[i]) {
            return i;
        }
    }
    return -1;
}

// function callback(item) {
//     if(item) {
//         return item;
//     }
// }

// function callback(item) {
//     if(item) {
//       return true;
//     }
//     else {
//       return false;
//     }
// }

// const array = [true,  true];

function callback(item) {
    if(item) {
        return true;
    }
    else {
        return false;
    }
}

function every(array, callback) {

    for(let i = 0; i < array.length; i++) {
        if(!callback(array[i])) {
            return false;
        }
    }
    return true;
}


// function callback(accumulator, item) {
//     return accumulator += item;
//   }
  
//   const array = [2, 4];
  
function reduceIt(array, callback) {
    let accumulator = 0;
    for(let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]); 
    }
    return accumulator;
}


//ALT reduce
// reduceIt(arr, callback, initialValue) {
//     let accumulator= initialValue;
//     let i = 0;

//     if(initialValue === undefined) {
//         accumulator = array[0];
//         i =1;
//     }
// }

module.exports = { mapIt, filterIt, findIndex, every, reduceIt };
