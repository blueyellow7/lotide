# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @neeharikab/lotide`

**Require it:**

`const _ = require('@neeharikab/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts if two arrays are equal
* `assertEqual`: asserts if two values are equal
* `assertObjectsEqual`: asserts if two objects are equal
* `countLetters`: returns a count of how many letters there are in a string
* `countOnly`: returns a count of how many of a specified item there are in an array
* `eqArrays`: compares two arrays to see if they are equal
* `eqObjects`: compares two objects to see if they are equal
* `findKey`: in an object, finds the key that returns a truthy value for a callback function 
* `findKeyByValue`: in an object, finds the key for a given value
* `flatten`: makes an array of arrays into a single array
* `head`: returns the first element from the array
* `index`: list of all the functions from lotide in a single object
* `letterPositions`: returns array of all positions in a string where specified letter is found
* `map`: implements a callback function on each element in a given array and return a new array with the transformed elements
* `middle`: returns the middle, or two middle, element(s) of an array
* `tail`: returns a new array with the first element of the given array removed 
* `takeUntil`: returns a new array where all elements that fit criteria of a callback function have been removed
* `without`: removes specified element from an array