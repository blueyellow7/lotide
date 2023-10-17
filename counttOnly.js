const assertEqual = require('./assertEqual')

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    } 
    console.log(item);
  } return results;
};

// TESTING FUNCTION 
const firstNames = [
  "Mike",
  "Will",
  "Jim",
  "Joyce",
  "Jonathan",
  "Nancy",
  "Lucas",
  "Max",
  "Nancy"
];

const result1 = countOnly(firstNames, { "Mike": true, "Robin": true, "Nancy": true });

assertEqual(result1["Mike"], 1);
assertEqual(result1["Robin"], undefined);
assertEqual(result1["Nancy"], 2);

module.exports = countOnly;