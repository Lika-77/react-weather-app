import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          <a
            href="https://github.com/Lika-77/react-weather-app"
            target="_blank"
          >
            Open-source code
          </a>
          by Anzhelika Kovtun
        </footer>
      </div>
    </div>
  );
}
