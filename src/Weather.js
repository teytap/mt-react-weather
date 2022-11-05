import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  let [city, setCity] = useState();
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function submitCity(event) {
    event.preventDefault();
    let apiKey = "1223d92fc1f5a88dccf0859beb3b3425";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <form onSubmit={submitCity}>
        <input type="text" placeholder="Search a city" onChange={updateCity} />
        <input type="submit" value="Search" />
        <ul>
          <li>{city}</li>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </form>
    );
  } else {
    return (
      <form onSubmit={submitCity}>
        <input type="text" placeholder="Search a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
