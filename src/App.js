import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [], value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  callAPI() {
    fetch("https://testingnrt.herokuapp.com/?n=" + this.state.value)
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value > 2) {
      this.callAPI();
    } else {
      this.setState({ apiResponse: "Enter a value greater than 2" });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter a number <br />
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <h1 className="App-title">{this.state.apiResponse}</h1>
        </header>
      </div>
    );
  }
}

export default App;
