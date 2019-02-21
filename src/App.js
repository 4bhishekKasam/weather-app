import React, { Component } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import Header from "./components/Header/Header";
import "./App.css";

const API_KEY = "e1fa1058d81ff910c3bef4a951a0c038";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    error: undefined,
    today: undefined,
    description: undefined,
    icon: undefined,
    humidity: undefined,
    minTemp: undefined,
    maxTemp: undefined
  };

  getGradient = temp => {
    if (temp < 0) return "linear-gradient(to right, #3E5151 ,#DECBA4)";
    else if (temp > 0 && temp < 20)
      return "linear-gradient(to right, #bdc3c7, #2c3e50)";
    else if (temp > 20 && temp < 30)
      return "linear-gradient(to right, #6E86A1, #203543)";
    else if (temp > 30)
      return "linear-gradient(to right, rgb(201, 109, 52), rgb(195, 56, 75))";
    else return "linear-gradient(to right, #5f2c82, #49a09d)";
  };

  render() {
    return (
      <div
        className="wrapper"
        style={{ backgroundImage: this.getGradient(this.state.temperature) }}
      >
        <Header />
        <SearchForm />
      </div>
    );
  }
}

export default App;
