import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info-wrapper">
      {props.error && <div className="error-message">{props.error}</div>}
      {props.temperature && (
        <div>
          <div className="weather-info-temperature">
            {props.temperature} &deg;
          </div>
          <div className="weather-info-description">
            <div>
              <div>Humidity</div>
              <div> {props.humidity} </div>
            </div>
            <div>
              <div>Min</div>
              <div> {props.minTemp} </div>
            </div>
            <div>
              <div>Max</div>
              <div> {props.maxTemp} </div>
            </div>
            <div>
              <div>Description</div>
              <div> {props.description} </div>
            </div>
            <div>
              <img
                className="weather-info-icon"
                src={"http://openweathermap.org/img/w/${props.icon}.png"}
                alt="weather-icon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
