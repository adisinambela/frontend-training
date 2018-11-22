import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import TodoDetail from "./TodoDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputDescription: "",
      inputSearch: "",
      filteredTodos: []
    };
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos = () => {
    axios
      .get("https://ib-api-todo-list.herokuapp.com/todos")
      .then(res =>
        this.setState({
          todos: res.data.data
        })
      )
      .catch(err => console.log(err));
  };

  deleteTodo = async index => {
    await axios
      .delete(`https://ib-api-todo-list.herokuapp.com/todos/${index}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.getAllTodos();
  };

  submitTodo = async () => {
    await axios
      .post("https://ib-api-todo-list.herokuapp.com/todos", {
        description: this.state.inputDescription,
        done: false
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.getAllTodos();
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearch = async (e) => {
    await this.handleOnChange(e)
    axios
      .get(
        `https://ib-api-todo-list.herokuapp.com/todos/search?description=${
          this.state.inputSearch
        }`
      )
      .then(res => {
        console.log(res);
        this.setState({
          filteredTodos: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        Description :
        <input
          type="text"
          name="inputDescription"
          value={this.state.inputDescription}
          onChange={this.handleOnChange}
        />
        &nbsp;
        <button onClick={() => this.submitTodo()}>Submit</button>
        <br />
        Search :
        <input
          type="text"
          name="inputSearch"
          value={this.state.inputSearch}
          onChange={this.handleSearch}
        />
        &nbsp;
        {/* <button onClick={() => this.handleSearch()}>Search</button> */}
        <br />
        <br />
        {this.state.inputSearch !== "" &&
          this.state.filteredTodos.map((todo, index) => (
            <TodoDetail
              description={todo.description}
              done={todo.done}
              key={index}
              index={index}
              deleteTodo={this.deleteTodo}
            />
          ))}
        {this.state.inputSearch === "" &&
          this.state.todos.map((todo, index) => (
            <TodoDetail
              description={todo.description}
              done={todo.done}
              key={index}
              index={index}
              deleteTodo={this.deleteTodo}
            />
          ))}
      </div>
    );
  }
}

export default App;
