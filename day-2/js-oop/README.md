# OOP with JavaScript

---

## This keyword in JavaScript

In a function definition, this refers to the "owner" of the function.


If we run this code inside browser, this refer to window Object.

```js
function myFunction() {
    return this;
}
```

## `bind` in JavaScript

The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```js
var coordinate = {
    x: 1,
    y: 2,
    getX: function () {
        return this.x;
    }
}

coordinate.getX() // 1

function getY() {
    return this.y;
}
getY() // undefined

var bindGetY = getY.bind(coordinate)
bindGetY() // 2
```

## Object-Oriented Programming (OOP)

 The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.

## `Class` Declaration 

Class is a bluepirnt of object. To declare a class, you use the class keyword with the name of the class. Use a constructor for creating and initializing an object created with a class.

```js
// Class declaration
class Human {
  constructor(name, yearBorn) {
    this.name = name;
    this.yearBorn = yearBorn;
  }
}

// Class instatiation
let budi = new Human("Budi", 1990);
```

---

## Methods in `Class`

The constructor is a special method to initialize the object with JavaScript class. We can define our own method in function body.

```js
class Human {
    constructor(name, yearBorn) {
        this.name = name;
        this.yearBorn = yearBorn;
    }

    //Method
    calculateAge() {
        return 2018 - this.yearBorn
    }
}

// Class instatiation
let budi = new Human("Budi", 1990);
// Call method
budi.calculateAge()
```

## Static Method

Static methods are declared using static keyword, and are mostly used to create utility functions. They are called without creating the instance of the class. See an example below.

```js
class Human {
    constructor(name, yearBorn) {
        this.name = name;
        this.yearBorn = yearBorn;
    }

    // Method
    calculateAge() {
        return 2018 - this.yearBorn
    }
    // Static
    static getYearBorn(h){
        return h.yearBorn
    }
}

// Class instatiation
let budi = new Human("Budi", 1990);
// Call method
Human.getYearBorn(budi)
```

## `getter`/`setter`

Class can also have getter/setters to get the property value and or to set the property values. Something like below.

```js
class Human {
    constructor(name, yearBorn) {
        this.name = name;
        this.yearBorn = yearBorn;
    }

    // Method
    calculateAge() {
        return 2018 - this.yearBorn
    }
    // Static
    static getYearBorn(h){
        return h.yearBorn
    }
    // getter
    get info(){
        return `name: ${this.name}, age: ${2018 - this.yearBorn}`
    }
    // setter 
    set setName (name){
        this.name = name
    }
}

// Class instatiation
let budi = new Human("Budi", 1990);
// Call method
budi.info
budi.setName = "budi doremi"
budi.info
```

---

## Subclassing

The extends keyword is used in class declarations or class expressions to create a class as a child of another class.The super keyword is used to access and call functions on an object's parent.

```js
class Human {
    constructor(name, yearBorn) {
        this.name = name;
        this.yearBorn = yearBorn;
    }

    // Method
    calculateAge() {
        return 2018 - this.yearBorn
    }
    // Static
    static getYearBorn(h){
        return h.yearBorn
    }
    // getter
    get info(){
        return `name: ${this.name}, age: ${2018 - this.yearBorn}`
    }
    // setter 
    set setName (name){
        this.name = name
    }
}

class Employee extends Human {
    constructor(name, age, job, salary) {
        super(name, age);
        this.job = job;
        this.salary = salary;
    }

    updateSalary(salary) {
        this.salary = salary
    }
}

const untung = new Employee("Untung", 1988, "Senior Developer", 20000)

// call method
untung.updateSalary(30000)
untung.salary

// call method from parent Class
untung.info
untung.calculateAge()
```

