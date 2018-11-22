# JavaScript 10

---

## Immediately Invoked Function Expression (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```js
(function () { 
        alert("I am an IIFE!");
})();

!function() {
    alert("Hello from IIFE!");
}();
```

---

### Callback Functions

In Javascript, we can pass a function as an argument to another function. Then, the argument function can do a action as a callback function.

```javascript
//callback function example
function logName(name) {
  console.log(`My Name is ${name}`);
}

function insertCustomName(callback) {
  var name = "Haidar";
  callback(name);
}

insertCustomName(logName);
```

---

## Promise

What is promise?

> Promise: Imagine you are a kid. Your mom promises you that she'll get you a new phone next week.
>
> -- <cite>Jecelyn Yeen</cite>

A promise has 3 states :

1.  pending: initial state, neither fulfilled nor rejected.
1.  fulfilled: meaning that the operation completed successfully.
1.  rejected: meaning that the operation failed.

### Creating promises

We can create new promise using `Promise` built in object.
If the promise is fulfilled, use `resolve()` to pass your success value. If the promise is rejected, use `reject()` to pass your fail value.

After a proise is fulfilled/rejected, the success/faill falue will be hadled by `.then`/`.catch`.

syntax:

```js
//creating promise
var newPromise = new Promise(function(resolve, reject) {
  // put your code here
  //
  //   resolve(someValue); // use resolve if promise is fulfilled
  // or
  //   reject("failure reason"); // use reject is promise is rejected
});

//using promise
newPromise
  .then(sucessValue => {
    //do something with sucessValue
  })
  .catch(error => {
    //do something with error
  });
```

### Basic Example

Don't forget to use `Error` built-in object because `.catch` will catch an error from reject.

```js
//try it yourself, and change the condition to true/false
const condition = false;

let myFirstPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("fulfilled!");
  } else {
    const reason = new Error("rejected!");
    reject(reason);
  }
});

myFirstPromise
  .then(successMessage => {
    console.log(".then >>> " + successMessage);
  })
  .catch(error => console.log(".catch >>> " + error.message));
//console output: .catch >>> rejected!
```

### Advanced Example

```js
//promise example from scotch.io (Jecelyn Yeen)
const isMomHappy = false;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  // fat arrow
  if (isMomHappy) {
    const phone = {
      brand: "Samsung",
      color: "black"
    };
    resolve(phone);
  } else {
    const reason = new Error("mom is not happy");
    reject(reason);
  }
});

const showOff = function(phone) {
  const message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";
  return Promise.resolve(message);
};

// call our promise
const askMom = function() {
  willIGetNewPhone
    .then(showOff)
    .then(fulfilled => console.log(fulfilled)) // fat arrow
    .catch(error => console.log(error.message)); // fat arrow
};

askMom();
```

---

# Async Await (async/await)

* [dotJS 2017 - Wes Bos - Async + Await](https://www.youtube.com/watch?v=9YkUCxvaLEk)

## Async

Async is a modification of `Promise` syntax, you can write `Promise` with `async` syntax easier.

The return value of an async function is recognized as a promise `resolve()`

example:

```js
//this async
async function myAsyncFunction() {
  return "theValue";
}

//is equal to
function myAsyncFunction() {
  return Promise.resolve("theValue");
}

//so you can call it like this
myAsyncFunction().then(returnedVal => console.log(returnedVal));
//console output: theValue
```

And the throw of an async function is recognized as a promise `reject()`

```js
//this
async function my2ndAsyncFunction() {
  throw "error";
}

//is equal to
function my2ndAsyncFunction() {
  return Promise.reject("error");
}

//so you can call it like this
my2ndAsyncFunction().catch(err => console.log(err));
//console output: error
```

## Await

Await is only used with an async function. The await keyword is used in an async function to ensure that all promises returned in the async function are synchronized.

```js
async function myDate() {
  try {
    let dateDetails = await date;
    let message = await orderUber(dateDetails);
    console.log(message);
  } catch (error) {
    console.log(error.message);
  }
}
```

References :

https://scotch.io/tutorials/javascript-promises-for-dummies
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async#async-and-await

---

## `apply`, `call`, `bind`

<!--
* Prevent regression
* Abstraction
* Decomposition
* Method chaining
* Data parsing and serialization
* Hoisting, Closures, Prototypes
* Function inside function, return object with function
-->
