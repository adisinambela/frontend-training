# Part 26

---

* ▢ Website Structure
  * Think in component
* ▢ React
  * Who uses React?
  * The main reasons and philosophy
  * vs jQuery, Vue, Angular, Preact, Web Components, Elm, etc
  * Creating components and writing HTML with `class` in JSX (JavaScript Extension)
  * JSX is a DSL (Domain Specific Language) over JavaScript
  * React lifecycle (`componentWillMount`, `render`, `componentDidMount`)
* ▢ React Installation
  * `npm install -g create-react-app`
  * `create-react-app` project structure
* ▢ React Component `class` vs stateless component
  * Building blocks of React, `react`, `react-dom`
  * Import modules or another components
  * JSX `className` vs HTML `class`
  * `state`, `setState`, `getState`
    * initial state vs changed state
  * `props`, `propTypes`, and `defaultProps`
* ▢ React State
  * Passing state to child component
* ▢ React Props
  * Get props from parent component
* ▢ React Render
  * Display `state`/`props`/`variable` inside `render` function
  * Handle `undefined` or unstructured variable with condtional `if`/`||`
  * Conditional rendering
  * Looped rendering using `map`/`filter`
* ▢ React Method
  * `.bind(this)` in constructor
* ▢ React Toolkit
  * Component and virtual DOM
  * Editor Packages: `react`, `jsx`
  * Browser Extensions: React DevTools
* ▢ React Trivia
  * Complete lifecycle of a component
  * Element naming
  * Class-based components
  * Stateless functional components
  * Component-based development
  * Parent and child relationship between components
  * Build system with Webpack
  * Transpilation with Babel

---

# React.js UI Library

React is described as a JavaScript library for building user interfaces (taken from the [official documentation](https://reactjs.org)).

With 3 main features:

* Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
* Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* Learn Once, Write Anywhere: We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native).

---

## Website Structure

Let's think in component-based design and development.

---

## React Basics

Who uses React? A lot. Especially Facebook, Instagram, Airbnb, etc.

The main reasons and philosophy of React is to improve both developer and designer productivity, by using a component-based approach when building a complex web application.

The important thing about React is that it uses: Component and virtual DOM.

What if we compare React vs jQuery, Vue, Angular, Preact, Backbone, Web Components, Elm, etc?

By convention, creating components and writing HTML in React is using JSX (JavaScript Extension) syntax.

The main component can be either written using `class` or plain `function`.

JSX is a DSL (Domain Specific Language) over JavaScript. So it's not plain programming language.

Should we always React? Depends. If our application has some complexity, it's recommended. But if it's just a simple website, just use plain HTML, CSS, JavaScript & jQuery like usual.

---

## React Installation

To quickly learn React, we can use `create-react-app` installer.

```sh
npm install -g create-react-app
```

```sh
create-react-app example
cd example
npm start
```

`create-react-app` project structure:

```sh
.
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── registerServiceWorker.js
└── yarn.lock
```

Take a look in the `package.json`.

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
```

The `react-scripts` in the installer here actually contains:

* webpack module bundler
* Babel JavaScript transpiler

So in the beginning, we don't have to worry to config those, in order to just learn React essentials.

### References

* [`create-react-app`](https://npm.im/create-react-app) installer
* [webpack](https://webpack.js.org)
* [`babel` plugin: `transform-react-jsx`](https://babeljs.io/docs/plugins/transform-react-jsx)

---

## React Components

Building blocks of React:

`react` and `react-dom` are separated modules that we usually use for the web version of React app.

Therefore, if there's other UI library that want to be used with React outside of web browser and DOM, we can use other modules such as `react-native`, `react-native-web`, or `react-vr`.

### References

* [`react`](https://npm.im/react)
* [`react-dom`](https://npm.im/react-dom)
* [`react-native`](https://npm.im/react-native)
* [`react-native-web`](https://npm.im/react-native-web)
* [`react-vr`](https://npm.im/react-vr)

---

## React Lifecycle

React has some important lifecycles that determine the condition when the app is running:

* `componentWillMount`
* `render`
* `componentDidMount`

---

## React Data

Import modules or another components

JSX `className` vs HTML `class`

`state`, `setState`, `getState`

initial state (`this.state`) vs changed state (`this.setState()`)

`props`, `propTypes`, and `defaultProps`

`props` can be accessed in the children component like so:

```jsx
<div index={props.index}>{props.children}</div>
```

## React State

Passing state to child component

---

## React Props

Props as a static data medium that passed in from component to component.

We can get `props` from parent component then use it in child component as `props` or `props.children`

---

## React Render

Display `state`/`props`/`variable` inside `render` function

Handle `undefined` or unstructured variable with condtional `if`/`||`

Conditional rendering

Looped rendering using `map`/`filter`

---

## React Stateless Component

React component can use modern `class` or just a `function` (stateless component).

---

## React Method

Custom method and `.bind(this)` in constructor.

```jsx
class Name extends React.Component {
  constructor(props) {
    super(props);

    this.actionName = this.actionName.bind(this);
  }

  actionName() {
    console.log("Action!");
  }

  render() {
    return <div onClick={this.actionName}>Box</div>;
  }
}
```

If we want to use a parameter in the method, don't call it directly.

```jsx
/* do this */
<div
  onClick={() => {
    this.actionName(param);
  }}
/>;

/* not this */
<div onClick={this.actionName(param)} />;
```

---

## React Toolkit

Editor Packages:

* atom `react`
* atom `jsx`

Browser Extensions:

* [React Developer Tools](https://github.com/facebook/react-devtools)
  * [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [React Sight - Live view of the component hierarchy tree of your React application](https://github.com/React-Sight/React-Sight)
  * [React Sight Chrome Extension](https://chrome.google.com/webstore/detail/react-sight/aalppolilappfakpmdfdkpppdnhpgifn)

---

## React Trivia

Component-based design and development.

Each component has a [complete lifecycle](https://reactjs.org/docs/react-component.html) we can use. Complete guide is in [Component Lifecycle Simulators](https://reactarmory.com/guides/lifecycle-simulators)

Element and component naming in React should follow `TitleCase` convention instead of `camelCase` or `lowercase` only. So we should use `ComponentName.js` and `class ComponentName {}`

Class-based components vs Stateless functional components.

Parent and child relationship between components.

Build system with Webpack.

Transpilation with Babel.

---

## Glossary

* JSX — Allows us to write HTML like syntax which gets transformed to lightweightJavaScript objects.
* Virtual DOM — A JavaScript representation of the actual DOM.
* `React.Component` — The way in which you create a new component.
* `render` (method) — Describes what the UI will look like for the particular component.
* `ReactDOM.render` — Renders a React component to a DOM node.
* `state` — The internal data store (object) of a component.
* `constructor` (`this.state`) - The way in which you establish the initial state of a component.
* `setState` — A helper method used for updating the state of a component and re-rendering the UI
* `props` — The data which is passed to the child component from the parent component.
* `propTypes` — Allows you to control the presence, or types of certain props passed to the child component.
* `defaultProps` — Allows you to set default props for your component.

### Component LifeCycle

* `componentWillMount` — Fired before the component mounted/rendered
* `render` - Fired when the actual UI mounted/rendered/changed
* `componentDidMount` — Fired after the component mounted
* `componentWillUnmount` — Fired before the component will unmount
* `getDerivedStateFromProps` - Fired when the component mounts and whenever the props change. Used to update the state of a component when its props change

### Event Handling with Custom Method

* `onClick`
* `onSubmit`
* `onChange`

When using onEventHandler like those, keep in mind if you want to use the method with a parameter or not. The usage are a bit different.

Wihout parameter, we don't call the function directly:

```js
<button onClick={this.actionName} />
```

With parameter, we call the function directly so we need to wrap it inside a function:

```js
<button
  onClick={() => {
    this.actionName(param);
  }}
/>
```

---

## References

### Essentials

* [React - A JavaScript library for building user interfaces](https://facebook.github.io/react)
* [Official React Tutorial: Intro To React](https://reactjs.org/tutorial/tutorial.html)
* [Build with React JS Tutorial](http://buildwithreact.com)
* [React Tutorial: A Comprehensive Guide to learning React.js in 2018 - Tyler McGinnis](https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react)
* [Start Learning React - egghead.io](https://egghead.io/courses/start-learning-react)
* [Learn ReactJS: Part I | Codecademy](https://www.codecademy.com/courses/react-101/lessons/react-jsx-intro/exercises/why-react)
* [`react-howto` - Your guide to the (sometimes overwhelming!) React ecosystem](https://github.com/petehunt/react-howto)
* [Top 5 Tutorials for Getting Started with React](https://www.javascriptstuff.com/getting-started-tutorials)

### Course

* [Learn React by building an app to help you find the best movie to watch](https://sweetpumpkins.codecamps.com)
* [Fullstack React: 30 Levels of React](https://fullstackreact.com/30-days-of-react)
* [Fullstack React 🐬 Book - The Complete Guide to ReactJS and Friends](https://fullstackreact.com)
* [React Nanodegree by Udacity](https://udacity.com/degrees/react-nanodegree--nd019)

### Additionals

* [React Armory - The simplest way to learn React](https://reactarmory.com/)
  * [Lifecycle Simulators](https://reactarmory.com/guides/lifecycle-simulators)
* [Pure React](https://daveceddia.com/pure-react)
  * [Your Timeline for Learning React](https://daveceddia.com/timeline-for-learning-react)
  * [How To Learn React (and what to build along the way)](https://daveceddia.com/how-to-learn-react)
  * [Learning React? Start Small](https://daveceddia.com/learning-react-start-small)
  * [Learning React as an Experienced Developer](https://daveceddia.com/learn-react-as-experienced-developer)
  * [A Visual Guide to State in React](https://daveceddia.com/visual-guide-to-state-in-react)
  * [AJAX Requests in React: How and Where to Fetch Data](https://daveceddia.com/ajax-requests-in-react)
  * [Do I need Node.js in the backend?](https://daveceddia.com/do-i-need-nodejs-backend-for-react-angular)
* [Build with React](http://buildwithreact.com)
* [reactstrap - React Bootstrap 4 components](https://reactstrap.github.io/)
* [Cabin: Thoroughly Learn React and Redux with this example app](http://cabin.getstream.io)
* [8 Key React Component Decisions – freeCodeCamp](https://medium.com/@housecor/8-key-react-component-decisions-cc965db11594)
* [React For Beginners - Learn with Video Tutorials](https://reactforbeginners.com)
* [React Untuk Pemula](https://kandar.id/20-reactjs-untuk-pemula)
* [Stop Using React for EVERYTHING!](https://medium.com/@zackargyle/stop-using-react-for-everything-c8297ac1a644)
* [React Tinkerer Manual](https://github.com/adhywiranata/react-tinkering-manual)
* [React HMR with `create-react-app`](https://daveceddia.com/hot-reloading-create-react-app)

### In Bahasa Indonesia

* [Video Tutorial: React untuk Pemula | DumbWays.id - Screencast](https://dumbways.id/p/react-untuk-pemula)
* [React Dasar](https://www.idrails.com/series/react-dasar)

### Directory and Packages

* [Awesome React - A collection of awesome things regarding React ecosystem](https://github.com/enaqx/awesome-react)
* [JS.coach](https://js.coach)
* [React.parts – A catalog of React components](https://react.parts)
* [React Hot Loader - Tweak React components in real time](http://gaearon.github.io/react-hot-loader)
  * [`react-app-rewire-hot-loader` - Add the `react-hot-loader` to your `create-react-app` app via `react-app-rewired`](https://daveceddia.com/hot-reloading-create-react-app)
  * [Hot reloading with `create-react-app` without ejecting 🔥 ⏏️](https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642)
