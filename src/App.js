import React, { Component } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import Header from "./components/Header/Header";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
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

  getTodaysDate() {
    return new Date();
  }

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    const country = e.target.elements.country.value.trim();

    if (city && country) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`;
      const apiResponse = await fetch(url);
      const data = await apiResponse.json();
      // debugger;
      if (data.cod === "404") {
        this.setState({ error: "data not found" });
      } else {
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          error: undefined,
          today: this.getTodaysDate(),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          minTemp: data.main.temp_min, 
          maxTemp: data.main.temp_max
        });
      }
    } else {
      this.setState({ error: "Enter Input Values" });
    }
    console.log(this.state);
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
        <SearchForm getWeather={this.getWeather} />
        <WeatherInfo
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          error={this.state.error}
          description={this.state.description}
          icon={this.state.icon}
          humidity={this.state.humidity}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          today={this.state.today}
        />
      </div>
    );
  }
}

export default App;
