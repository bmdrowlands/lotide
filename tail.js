// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😍😍😍', 'Assertion Passed:', `[${actual}] === [${expected}]`);
  } else {
    console.log('🤢🤢🤢', 'Assertion Failed:', `[${actual}] !== [${expected}]`);
  }

};

// function to implement tail
function tail(array) {
  const result = array;
  return result.slice(1);
}


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!