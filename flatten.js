const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const value of array[i]) {
        flatArray.push(value);
      }
    } else {
      flatArray.push(array[i]);
    }
  } return flatArray;
};

module.exports = flatten;