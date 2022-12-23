import axios from "axios";
import wind from "../media/wind.png";
import cloud from "../media/cloud_sun.png";
import drops from "../media/drops.png";
import therm from "../media/thermometer.png";
import loc from "../media/loc.png";
import "../styles/weather.css";
import { Loading } from "./Loading";
import "../styles/loading.css";
import { useQuery } from "react-query";

export const Weather = (props) => {
  const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: { city: props.city },
    headers: {
      "X-RapidAPI-Key": "e0b6052bacmshcfe5da2fca3f2e5p14d484jsn5c655e5224c5",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const {
    data: weather,
    isLoading,
    isError,
  } = useQuery(["weather"], async () => {
    return axios.request(options).then((res) => res.data);
  });

  if (!isLoading && !isError) {
    return (
      <div className="weather">
        <p className="city">
          <img src={loc} alt="location icon"/>
          {props.city}
        </p>
        <div className="hero">
          <div className="temp">
            <img src={cloud} alt="cloud icon"/>
            <span>{weather.temp}</span>&#8451;
          </div>
          <div className="other">
            <p>
              <img src={therm} alt="thermometer icon"/>
              Feels like {weather.feels_like}
            </p>
            <p>
              <img src={drops} alt="water drop icon"/>
              Humidity: {weather.humidity}
            </p>
            <p>
              <img src={wind} alt="wind blowing icon"/>
              Wind: {weather.wind_speed}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    <Loading />
  }
};
