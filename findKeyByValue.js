// FIND KEY FUNCTION 
const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value)
      return key;
    else {
      return undefined;
    }
  }
};

module.exports = findKeyByValue;