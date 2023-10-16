const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};

// export used by tailTest file
module.exports = tail;