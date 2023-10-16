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

module.exports = countLetters;