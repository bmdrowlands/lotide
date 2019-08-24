// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😍😍😍', 'Assertion Passed:', `[${actual}] === [${expected}]`);
  } else {
    console.log('🤢🤢🤢', 'Assertion Failed:', `[${actual}] !== [${expected}]`); }

};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log('Passed');
  } else {
    console.log('Failed');
  }
};

const middle = function(array1) {
  if (array1.length === 1 || array1.length === 2){
    return [];
  }
  if (array1.length % 2 === 1) {
     const index = Math.floor(array1.length/2);
     return [array1[index]]
  } else {
    const rightIndex = array1.length/2
    const leftIndex = rightIndex - 1
    return [array1[leftIndex], array1[rightIndex]]
  }
};

//console.log(middle(1, 2))
//console.log(middle(1, 2, 3))
//console.log(middle([1, 2, 3, 4]))

const middle = function(array1) {
  if (array1.length === 1 || array1.length === 2){
    return [];
  }
  if (array1.length % 2 === 1) {
     const index = Math.floor(array1.length/2);
     return [array1[index]]
  } else {
    const rightIndex = array1.length/2
    const leftIndex = rightIndex - 1
    return [array1[leftIndex], array1[rightIndex]]
  }
};

