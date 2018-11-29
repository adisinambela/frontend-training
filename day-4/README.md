# React Router

## Installation

```sh
npm install react-router-dom
```

## How to use React Router

The 3 components you will interact the most when working with React Router are:

* `BrowserRouter`, usually aliased as `Router` : wraps all your Route components.

```jsx
render() {
    return (
      <Router>
        <div>Hello React Router ! ...</div>
      </Router>
    );
  }
```

* Link : used to generate links to your routes

```jsx
return (
      <Router>
        <div>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/about">About</Link>
        </div>
      </Router>
    );
```

* Route :  responsible for showing - or hiding - the components they contain.

```jsx
const Dashboard = porps => {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
    </div>
  );
};

const About = porps => {
  return (
    <div>
      <h1>About</h1>
      <hr />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/about">About</Link>
          <Route exact path="/" component={Dashboard} />
          <Route path="/about" component={About} />

          
        </div>
      </Router>
    );
  }
}
```

## Pass props to child using react router

* inside render function : 
```jsx
<Route path="/about" render={() => <About company_name="nestle" />} />
```

* about component :

```jsx
const About = props => {
  return (
    <div>
      <h1>About</h1>
      <div>Name : {props.company_name}</div>
      <hr />
    </div>
  );
};
```

[Code Sample](https://codesandbox.io/s/nn51jk4744)






