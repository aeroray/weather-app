import React, { FC } from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const celsius = (data.main.temp - 273.15).toFixed(1);

  return (
    <section className="section">
      <h1 className="title has-text-centered weather-title">
        {data.name} - {data.sys.country}
      </h1>
      <div className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">{data.weather[0].main}</p>
            <p className="title">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt=""
              />
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">temp</p>
            <p className="title">
              {celsius} <sup>&#8451;</sup>
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">humidity</p>
            <p className="title">
              {data.main.humidity} <sup>%</sup>
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">pressure</p>
            <p className="title">
              {data.main.pressure} <sup>hPa</sup>
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">wind</p>
            <p className="title">
              {data.wind.speed} <sup>m/s</sup>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
