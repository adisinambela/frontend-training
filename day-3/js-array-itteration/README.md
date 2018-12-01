## JavaScript Array Iteration

JavaScript language provie a various built-in method to do array iteration.

The array iteration method accept 3 arguments :

* The item value
* The item index
* The array itself


#### `forEach()`

`forEach()` is an Array iteration method that we can use to execute a function on each element in an array.

```js
const words = ["a", "b", "c", "d", "e"];

words.forEach(word => {
  console.log(word);
});
```

[Code Sample](https://codesandbox.io/s/nwnn6533km)

#### `map()`

A map applies a function over every element and then returns the new array.


```js
let newNumber = numbers.map(function(number) {
  return number * 2;
});
```

[Code Sample](https://codesandbox.io/s/n5x6zkrmrj)

#### `filter()`

`filter()` function is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument function


```js
let newNumber = numbers.filter(function(number) {
  return number > 3;
});
```

[Code Sample](https://codesandbox.io/s/3yjo7p5qp1)

References :

* [w3schools - JavaScript Array Iteration](https://www.w3schools.com/js/js_array_iteration.asp)

* [Geeksforgeeks - Ways Iterating Array JavaScript](https://www.geeksforgeeks.org/ways-iterating-array-javascript/)