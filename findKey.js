// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed ${actual} !== ${expected}`);
  }
};


// FIND KEY FUNCTION
const findKey = function(object, callback) {
  let result = "";
  for (let key in object) {
    if (callback(object[key])) {
      result = key;
      break;
    }
  } return result;
};


// TEST
const ages = {
  "Mike": 16,
  "Will": 15,
  "Nancy": 18,
  "Jonathan": 18
};

const tvShows = {
  "Breaking Bad": {episodes: 62, seasons: 5},
  "Stranger Things": {episodes: 34, seasons: 3},
  "Good Omens": {episodes: 12, seasons: 2},
  "Beef": {episodes: 10, seasons: 1},
};

assertEqual(findKey(ages, x => x === 18), "Nancy");
assertEqual(findKey(tvShows, x => x["episodes"] === 34), "Stranger Things");
assertEqual(findKey(tvShows, x => x.seasons === 2), "Good Omens");