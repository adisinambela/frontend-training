# JavaScript Promise

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

### Basic Example

Basic Example Using `new Promise`

```js
//try it yourself, and change the condition to true/false

let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
  const isClean = false;

  if (isClean) {
    resolve("Clean");
  } else {
    reject("not Celan");
  }
});

promiseToCleanTheRoom
  .then(fromResolve => {
    console.log("The room is " + fromResolve);
  })
  .catch(fromReject => console.log("The room is " + fromReject));
```

Basic Example Using `Promise.resolve()` / `Promise.reject()`

```js
function isNexSoftEmployee(name) {
  if (name === "budi") {
    return Promise.resolve(`${name} is NexSoft Employee`);
  } else {
    return Promise.reject(`${name} is NOT NexSoft Employee`);
  }
}

isNexSoftEmployee("budi")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));

isNexSoftEmployee("jono")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));
```

---

# Async Await (async/await)

* [dotJS 2017 - Wes Bos - Async + Await](https://www.youtube.com/watch?v=9YkUCxvaLEk)

## Async

Async is a modification of `Promise` syntax, you can write `Promise` with `async` syntax easier.

The return value of an async function is recognized as a promise `resolve()`.And the throw of an async function is recognized as a promise `reject()`

example:

```js
//this a promise
async function promiseToCleanTheRoom() {
  const isClean = false
  if(isClean){
    return "Clean";
  } else{
    throw "not Clean"
  } 
}

//so you can call it like this
promiseToCleanTheRoom()
  .then(fromResolve => {
    console.log("The room is " + fromResolve);
  })
  .catch(fromReject => console.log("The room is " + fromReject));
```


## Await

Await is only used with an async function. The await keyword is used in an async function to ensure that all promises returned in the async function are synchronized.

example without await :

```js
function isNexSoftEmployee(name) {
  if (name === "budi") {
    return Promise.resolve(`${name} is NexSoft Employee`);
  } else {
    return Promise.reject(`${name} is NOT NexSoft Employee`);
  }
}

console.log("before promise");
isNexSoftEmployee("budi")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));
console.log("after promise");
```

example with await :

```js
function isNexSoftEmployee(name) {
  if (name === "budi") {
    return Promise.resolve(`${name} is NexSoft Employee`);
  } else {
    return Promise.reject(`${name} is NOT NexSoft Employee`);
  }
}

async function isBudiNexSoftEmployee() {
  console.log("before promise");
  await isNexSoftEmployee("budi")
    .then(ans => console.log(ans))
    .catch(err => console.log(err));
  console.log("after promise");
}

isBudiNexSoftEmployee()
```

References :

https://scotch.io/tutorials/javascript-promises-for-dummies
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async#async-and-await

---



<!--
* Prevent regression
* Abstraction
* Decomposition
* Method chaining
* Data parsing and serialization
* Hoisting, Closures, Prototypes
* Function inside function, return object with function
## `apply`, `call`, `bind`
-->
