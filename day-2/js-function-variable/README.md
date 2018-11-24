# JavaScript Function & Variable Declaration

## JavaScript Functions

Function is a feature of JavaScript that allow us to **do something** whenever the function is **called**

---

## How to use

### with regular `function` keyword

Syntax:

`function name() {}`

```js
function calculateTax(totalPrice) {
    tax = totalPrice * 0.1;

    return tax;
}

console.log(calculateTax(50000))
```

### with variable function

Syntax:

`const x = function() {}`

```js
const calculateTax = function (totalPrice) {
    tax = totalPrice * 0.1;

    return tax;
}

console.log(calculateTax(50000))
```

### with arrow function

Syntax:

`const x = () => {}`

```js
const calculateTax = (totalPrice) => {
    tax = totalPrice * 0.1;

    return tax;
}

console.log(calculateTax(50000))
```

### Recursive function

Syntax:

`function name() { name() }`

```js
function factorial(n, accumulator) {
  if (n === 0) {
    return accumulator
  }
  return factorial(n — 1, n * accumulator)
}
factorial(5, 1)
```

---

## `var` vs `let` vs `const`

### **var**

* Variables can be re-declared and updated.

```js
var greeter = "Hello"; // declaration 
var greeter = "Hi!"; // re-declaration 
greeter = "Hola!"; // update variable 
```

* Not **block scoped**

Scope essentially means where these variables are available for use. A block is chunk of code bounded by {}

```js
var b = 2;
var condition = true;
if (condition) {
    var b = 3;
}
console.log(b); //=> 3
```

* Hoisted to the top, undefined by default,

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

`var` variables are hoisted to the top of its scope and initialized with a value of undefined.

example:

```js
console.log(x);  //=>undefined
var x = 10;
```

```js
var x //undefined
x = 10
console.log(x) //=> 10
```

same as :

```js
x = 10;
var x; // undefined and move to top
console.log(x); //=10
```



### **let**

Can be updated but not redeclared.

```js
let greeter = "Hello"; 
let greeter = "Hi!"; // error 
greeter = "Hola!";
```

Block scoped.

```js
let b = 2;
let condition = true;
if (condition) {
    let b = 3
}
console.log(b) //=> 2
```

Non **Hoisting variable**

```js
console.log(x);  //=>Error
let x = 10;
```

### **const**

`const`  cannot be updated or re-declared.

```js
const greeting = "Hello";
const greeting = "Hi"; //error : Identifier 'greeting' has already been declared
```

block scoped

```js
const b = 2;
let condition = true;
if (condition) {
    const b = 3
}
console.log(b) //=> 2
```

Non **Hoisting variable**

```js
console.log(x);  //=>Error
const x = 10;
```

---

## Summary

1. var declarations are globally scoped or function scoped while let and const are block scoped.

1. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

1. They are all hoisted to the top of their scope but while varvariables are initialized with undefined, let and const variables are not initialized.

1. While var and let can be declared without being initialized, const must be initialized during declaration.

![](./var-let-const.png)


