// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
   if (actual === expected){
     console.log('😍😍😍', 'Assertion Passed:', `[${actual}] === [${expected}]`)
   } else {
     console.log('🤢🤢🤢', 'Assertion Failed:', `[${actual}] !== [${expected}]`)
   }

};

const eqArrays = function(array1, array2){

  for ( i = 0; i < array1.length; i++){
    for (a = 0; a < array2.length; a++){
      if (array1[i] === array2[a]) {
        return true
      }
    }
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);