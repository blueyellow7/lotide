const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } return true;
};

const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🎉🎉🎉 Assertion passed ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed ${arr1} !== ${arr2}`);
  }
}

///////////////////////////////////////////////////////////////

const without = function(array, excludedItems) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < excludedItems.length; j++) {
      if (array[i] === excludedItems[j]) {
        array.splice(i, 1);
      }
    }
  } return array;
} 

console.log(without([1, 2, 3], [1])) 
console.log(without(["1", "2", "3"], [1, 2, "3"]))
console.log(without(["1", "2", "3", "5"], [2, 3, "3", "5"]))
console.log(without(["hello", "2", "3", "5"], [2, 3, "5"]))



/* const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); 

// Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/
