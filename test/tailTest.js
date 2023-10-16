const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test cases

let array1 = tail([5, 6, 7, 10]);
assertEqual(array1.length, 3);

let array2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(array2.length, 2);

let array3 = tail([10]);
assertEqual(array3.length, 0);

let array4 = tail([]);
assertEqual(array4.length, 0);
