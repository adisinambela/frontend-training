import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import AddressBookDetail from "./AddressBookDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "Budi",
          address: "Jl.Kemang Raya. No 7"
        },
        {
          name: "Jono",
          address: "Jl.Kebon Jeruk Raya. No 7"
        }
      ],
      filteredPeople: [],
      inputName: "",
      inputAddress: "",
      inputSearch: ""
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = () => {
    this.setState({
      people: this.state.people.concat({
        name: this.state.inputName,
        address: this.state.inputAddress
      }),
      inputName: "",
      inputAddress: ""
    });
  };

  handleDelete = index => {
    // let newPeople = this.state.people.slice();
    // newPeople.splice(index, 1);
    const newPeople = this.state.people.filter((people, i) => {
      return i !== index;
    });

    this.setState({
      people: newPeople
    });
  };

  handleSearch = async event => {
    await this.handleOnChange(event);

    let newFilteredPeople = this.state.people.filter(people => {
      return (
        people.name === this.state.inputSearch ||
        people.address === this.state.inputSearch
      );
    });

    this.setState({
      filteredPeople: newFilteredPeople
    });
  };

  render() {
    return (
      <div>
        <Header />
        <label htmlFor="inputName">Name :</label>
        <input
          type="text"
          name="inputName"
          value={this.state.inputName}
          onChange={this.handleOnChange}
        />
        <br />
        <br />
        <label htmlFor="inputAddress">Address :</label>
        <input
          type="text"
          name="inputAddress"
          value={this.state.inputAddress}
          onChange={this.handleOnChange}
        />

        <br />
        <button onClick={() => this.handleOnSubmit()}>Submit</button>
        <br />
        <br />

        <label htmlFor="inputSearch">Search :</label>
        <input
          type="text"
          placeholder="Search ..."
          name="inputSearch"
          value={this.state.inputSearch}
          onChange={this.handleSearch}
        />
        <br />
        <br />

        {this.state.inputSearch !== "" &&
          this.state.filteredPeople.map((people, index) => (
            <AddressBookDetail
              key={index}
              name={people.name}
              address={people.address}
              id={index}
              handleDelete={this.handleDelete}
            />
          ))}

        {this.state.inputSearch === "" &&
          this.state.people.map((people, index) => (
            <AddressBookDetail
              key={index}
              name={people.name}
              address={people.address}
              id={index}
              handleDelete={this.handleDelete}
            />
          ))}
      </div>
    );
  }
}

export default App;
