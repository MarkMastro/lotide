# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @MarkMastro/lotide`

**Require it:**

`const _ = require('@MarkMastro/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

assertArraysEqual(array1,array2): function that asserts if 2 arrays are equal
assertEqual(value1, value2): function that asserts if 2 values are equal
assertObjectsEqual(obj1, obj2): function that asserts if 2 objects are equal
countLetters(String): function that returns a count for each letter of a string
countOnly(array, dictionary): function that takes items and returns counts for a subset of those items
eqArrays(array1, array2): function that compares two arrays
eqObjects(obj1, obj2): function that compares two objects
findKey(object, callback): function that goes through an object and returns the first key that the callback returns a truthy value
findKeyByValue(object, string): function that searches for a key where its value matches a certain value
flatten(array): function that flattens an array of arrays into a 1 dimensional array
head(array): function that returns the first element from the array
index(): list of all the functions in an object
letterPositions(string): function that returns all the positions in astring where each character is found
map(array,callback): function that creates a new array with the return values of callback function being called on an array
middle(array): function that returns the middle element of an array if odd, returns middle 2 if evn, returns [] if less than 2 length array
tail(array): function that returns every element except the first element of the array
takeUntil(array, callback): function that returns a slice of the array with elements taken from the beginning
without(array, array): function that removes elements from an array