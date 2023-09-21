//ASSERT EQUAL FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🎉🎉🎉 Assertion passed ${actual} === ${expected}`;
  } else {
    return `❌❌❌ Assertion failed ${actual} !== ${expected}`;
  }
};


// COUNT LETTERS FUNCTION

const countLetters = function(string) {
  let letterCount = {};
  for (let i = 0; i < string.length; i++) {
    if (!letterCount[string[i]] && string[i] !== " ") { 
      letterCount[string[i]] = 1;
    } else if (string[i] !== " ") {
    letterCount[string[i]]++;
    }
  } return letterCount;
}

console.log(countLetters("random string of letters"))


