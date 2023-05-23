import React from "react";
import "./index.scss";

const CardInput = ({ onSearchCity, setOnSearchCity, city, weatherData }) => {
  return (
    <React.Fragment>
      <div className="content">
        <div className="contentContainer">
          <div className="contentContainer__boxOut">
            <h5>{weatherData.location.name}</h5>
            <i className="fa-solid fa-xmark"></i>
          </div>
          {weatherData && (
            <div className="contentContainer__boxClimate">
              <h1 className="contentContainer__boxClimate--climate">
                {weatherData.current.condition.text}
              </h1>
              <h1 className="contentContainer__boxClimate--temperature">
                {weatherData.current.temp_c}°C
              </h1>
            </div>
          )}
          {weatherData && (
            <div className="contentContainer__Container">
              <div className="contentContainer__Container--boxLeft">
                <div className="contentContainer__Container--boxLeft__box">
                  <h3>{weatherData.forecast.forecastday[0].day.mintemp_c}°C</h3>
                  <i className="fa-solid fa-arrow-down blue"></i>
                  <h3>{weatherData.forecast.forecastday[0].day.maxtemp_c}°C</h3>
                  <i className="fa-solid fa-arrow-up red"></i>
                </div>
                <h4>Vento: {weatherData.current.wind_kph}k/h</h4>
              </div>
              <div className="contentContainer__Container--boxRight">
                <h4>Sensação: {weatherData.current.feelslike_c}°C</h4>
                <h4>Umidade: {weatherData.current.humidity}%</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardInput;
