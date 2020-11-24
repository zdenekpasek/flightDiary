import { useState } from 'react';
import openWeatherApi from '../services/api/openWeatherApi';
import config from '../config';

export default () => {
  const [results, setResults] = useState([]);
  const [tmp, setTmp] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [positionName, setPositionName] = useState(null);

  const getWeather = async (lat, long) => {
    try {
      const endpoint = `?lat=${lat}&lon=${long}&units=metric&appid=${config.API_KEY_W}`;
      const response = await openWeatherApi.get(endpoint);
      const iconName = response.data.weather[0].icon;
      setResults(response.data);
      setTmp(response.data.main.temp);
      setWind(response.data.wind.speed);
      setIcon(iconName);
      setPositionName(response.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  return [getWeather, results, icon, tmp, wind, positionName];
};
