import React from "react";

import "./Weather.css";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          <a
            href="https://github.com/Lika-77/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          by Anzhelika Kovtun
        </footer>
      </div>
    </div>
  );
}
