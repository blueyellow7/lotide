const eqArrays = require("./eqArrays"); 

const eqObjects = function(object1, object2) {
  let output = "";
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    output = false;
  } else {
    output = true;
  }
  for (const keyValue in object1) {
    if (Array.isArray(object1[keyValue]) && Array.isArray(object2[keyValue])) {
      if (!eqArrays(object1[keyValue], object2[keyValue])) {
        output = false;
      } else {
        output = true;
      }
    } else if (object1[keyValue] !== object2[keyValue]) {
      output = false;
    }
  } return output;
};

module.exports = eqObjects;
