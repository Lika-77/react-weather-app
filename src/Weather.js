import React, { useState } from "react";

import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "63214c4281922e3bb72fdf12dada7734";
    let city = "Kyiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="weather-app-wrapper">
          <div className="card">
            <div className="card-body"></div>
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Search for city..."
                    autofocus="on"
                    autocomplete="off"
                    className="form-control"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-light w-100"
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Current location"
                    className="btn btn-primary w-6"
                  />
                </div>
              </div>
            </form>
            <br />
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
