## What is React

React is a JavaScript library for building user interfaces.

```jsx
import React from "react";
```

## JSX

It looks like HTML in your JS file. 

```jsx
const element = <h1>Hello, JSX!</h1>
```

[Sample Code](https://codesandbox.io/s/v35p9kp725)

There's many difference between jsx and html sytanx, for example :

* `class` becomes `className`
* `for` becomes `htmlFor`
* Always wrap all components into one div
* You can write javascript expression inside `{}`
* Using camel case for attribut naming (`onChange`, `onClick`,`className`, etc ...)
* Close all tags (`<hr />`)

```jsx
const text = "jsx";
const element = (
  <div>
    <h1 className="title">Hello, {text}!</h1>
    <hr />
  </div>
);
```

[Sample Code](https://codesandbox.io/s/0ykzy8721w)


## CSS in JSX

To use CSS inside JSX you must insert an Object inside `style` attribute. 

The CSS values you write in JSX is slightly different than plain CSS:

1. the keys property names are camelCased
1. values are just strings
1. you separate each tuple with a comma

```jsx
const objStyle = {
  backgroundColor: "blue",
  color: "white"
};

const element = (
  <div>
    <h1 style={objStyle}>Hello, JSX</h1>
    <hr />
  </div>
);
```

[Code Sample](https://codesandbox.io/s/l4ov65n4rq)

or you can just import CSS file inside your JSX file.

```jsx
import "./styles.css";

const element = (
  <div>
    <h1 className="title">Hello, JSX</h1>
    <hr />
  </div>
);
```
[Code Sample](https://codesandbox.io/s/0y3lx0xxy0)



## React Component

A React component is one isolated piece of interface.

There are 2 ways to define a component in react :

* Function component

```jsx
const Element = () => {
  return (
    <div>
      <h1>Hello, Component !</h1>
      <hr />
    </div>
  );
};
```
[Code Sample](https://codesandbox.io/s/zwk4rq1zo4)

* Class component

```jsx
import React, { Component } from "react";

class Element extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Class Component !</h1>
        <hr />
      </div>
    );
  }
}
```

Classes have some additional features that we will discuss in the next sections.

[Sample Code](https://codesandbox.io/s/23589nlkqr)

## React Props

Props is how Components get their properties. It get passed from parent to child component. Starting from the top component, every child component gets its props from the parent. 

* props inside Function Component

```jsx
const Employee = props => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <hr />
    </div>
  );
};

ReactDOM.render(<Employee name="Joni" age={29} />, rootElement);
```
[Sample Code](https://codesandbox.io/s/k0zjv21nj7)

* props inside Class Component

```jsx
import React, { Component } from "react";

class Employee extends Component {
  render() {
    return (
      <div>
        <h1>Name : {this.props.name}</h1>
        <h2>Age : {this.props.age}</h2>
        <hr />
      </div>
    );
  }
}
ReactDOM.render(<Employee name="Joni" age={29} />, rootElement);
```

[Sample Code](https://codesandbox.io/s/l43zx7wx67)


## React State

State is an object that determines how that component renders & behaves. 

We need a Class component in order to use react state. To initialize component's state you need to put `this.state` with object as a default value inside class `constructor()`. After that, you can display component state inside `render()` function.

```jsx
import React, { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <div>
        <h1>Name : {this.props.name}</h1>
        <h2>Age : {this.props.age}</h2>
        <h2>Active: {JSON.stringify(this.state.active)}</h2>        <hr />
      </div>
    );
  }
}
```

[Code Sample](https://codesandbox.io/s/qxxx7697q4)

## Mutating State & Manage Events

You **should** always use `setState()` to mutating the state.  In React, you use camelCase for everything, so `onclick` becomes `onClick`, `onsubmit` becomes `onSubmit`.

```jsx
class Employee extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  changeStatus = () => {
    this.setState({
      active: true
    });
  };

  render() {
    return (
      <div>
        <h1>Name : {this.props.name}</h1>
        <h2>Age : {this.props.age}</h2>
        <h2>Active: {JSON.stringify(this.state.active)} </h2>
        <button onClick={this.changeStatus}> Activate Employee</button>
        <hr />
      </div>
    );
  }
}
```

[Code Sample](https://codesandbox.io/s/71y0v289wj)

## Reusing React Component

```jsx
import React, { Component } from "react";

const Employee = props => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <hr />
    </div>
  );
};

const EmployeeList = props => {
  return (
    <div>
      <Employee name="Joni" age={30} />
      <Employee name="Budi" age={25} />
      <Employee name="Jonathan" age={44} />
    </div>
  );
};
```

[Code Sample](https://codesandbox.io/s/xlm64rnnw)

or with component from another file

[Code Sample](https://codesandbox.io/s/qvl96p3xvw)

## Conditional Rendering with React

### Ternary

```jsx
 render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Display Input</button>
        <br />
        Company :
        {this.state.displayInput ? <input type="text" name="company" /> : null}
      </div>
    );
  }
```

### Short Circuit

```jsx
render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Display Input</button>
        <br />
        Company :
        {this.state.displayInput && <input type="text" name="company" />}
      </div>
    );
  }
```

### If / Else

```jsx
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div>
          <button onClick={this.handleOnClick}>Login</button>
        </div>
      );
    } else {
      return <div>Welcome to Dashboard !!!</div>;
    }
  }
}
```

## Handle form with react

```jsx
class App extends Component {
  constructor() {
    super();
    this.state = {
      company: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        Company : <br />
        <input
          type="text"
          name="company"
          value={this.state.company}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
```

## React Component Lifecycle

Each React component comes with several methods that allows developers to update the application state and reflect the change to UI. 

```jsx
class Employee extends Component {
  constructor() {
    super();
    console.log("constructor()");
  }

  componentWillMount() {
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  render() {
    console.log("render()");
    return (
      <div>
        <h1>Name : {this.props.name}</h1>
      </div>
    );
  }
}
```

[Code Sample](https://codesandbox.io/s/wo6on6z277)

* `componentWillMount()` is executed before rendering, on both the server and the client side.

* `componentDidMount()` is executed after the first `render()` only on the client side. 

* `componentWillReceiveProps()` is invoked as soon as the props are updated before another `render()` is called. 

* `shouldComponentUpdate()` should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.

* `componentWillUpdate()` is called just before rendering.

* `componentDidUpdate()` is called just after `render()`.

* `componentWillUnmount()` is called after the component is unmounted from the dom. We are unmounting our component in main.js.

## Fetching data from API

#### Installation

```sh
npm install axios
```

### Using axios

Axios is promise-based and thus we can take advantage of async and await for more readable asynchronous code. You can start an HTTP request from the axios object with all http verb we want, such as: 

* `axios.get()`
* `axios.post()`
* `axios.put()`
* `axios.delete()`

simple HTTP request with axios :

```js
// syntax
axios
  .<HTTP_VERB>(<API_URL>)
  .then(<FULFILLED_CALLBACK_FUNCTION>)
  .then(<REJECTED_CALLBACK_FUNCTION>);
```

```js
// Get All
axios
  .get("https://haekal-todo-list-api.herokuapp.com/todos")
  .then(res => console.log(res.data))
  .then(err => console.log(err));
```

[Code Sample](https://codesandbox.io/s/xr68ovr5jq)

HTTP Request with request body :

```js
// syntax
axios
  .<HTTP_VERB>(<API_URL>,<REQUEST_BODY>)
  .then(<FULFILLED_CALLBACK_FUNCTION>)
  .then(<REJECTED_CALLBACK_FUNCTION>);
```

```jsx
// Create 
const body = {
    description: "Learn ExpressJs",
    done: true
}

axios
  .post("https://haekal-todo-list-api.herokuapp.com/todos", body )
  .then(res => console.log(res))
  .then(err => console.log(err));
```

HTTP Request with headers : 

```js
// syntax
axios
  .<HTTP_VERB>(<API_URL>,<REQUEST_BODY>,<REQUEST_HEADERS>)
  .then(<FULFILLED_CALLBACK_FUNCTION>)
  .then(<REJECTED_CALLBACK_FUNCTION>);
```

```jsx
// Create 
const body = {
    description: "Learn ExpressJs",
    done: true
}

const headers = {
  'Authorization': `Bearer a2bO2xvc34rf23`
}

axios
  .post("https://haekal-todo-list-api.herokuapp.com/todos", body , headers )
  .then(res => console.log(res))
  .then(err => console.log(err));
```

[Code Sample](https://codesandbox.io/s/00zqvoo01v)

[Complete - Code Sample](https://codesandbox.io/s/q9jpwk1176)

### Using axios with react

We can put axios inside component's method/component's lifecycle mothod to perform HTTP request. 

After that we can perform a `setState()` inside fullfiled callback function.

```jsx
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todo_list: []
    };
  }
  componentDidMount() {
    // Read All
    axios
      .get("https://haekal-todo-list-api.herokuapp.com/todos")
      .then(res => {
        this.setState({
          todo_list: res.data
        });
      })
      .then(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Hello React - axios</h1>
        {this.state.todo_list.map(todo => (
          <div>
            <div>{todo.description}</div>
          </div>
        ))}
      </div>
    );
  }
}
```
[Code Sample](https://codesandbox.io/s/jnypy02k89)




















References : 

* [ReactJs.org - React Js Official Documentation](https://reactjs.org/docs/getting-started.html)
* [React for Dummies - Kelly Harrop](https://medium.com/@kellyharrop/react-for-dummies-c56a94063bfe)
* [React Tutorial - Flaviocopes](https://flaviocopes.com/tags/react/)
* [React Conditional Rendering - LogRoclet](https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e)

* [React Component Lifecycle - Tutorialspoint](https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm)

* [Component Lifecycle - likeagirl](https://code.likeagirl.io/understanding-react-component-life-cycle-49bf4b8674de)

* [Using Axios with React - alligator.io](https://alligator.io/react/axios-react/)