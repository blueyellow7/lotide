const without = function(array, excludedItems) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < excludedItems.length; j++) {
      if (array[i] === excludedItems[j]) {
        array.splice(i, 1);
      }
    }
  } return array;
} 

module.exports = without;