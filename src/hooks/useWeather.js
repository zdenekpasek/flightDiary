import { useEffect, useState } from 'react';
import openWeatherApi from '../services/api/openWeatherApi';
import config from '../config';

export default () => {
  const [results, setResults] = useState([]);
  const [tmp, setTmp] = useState('');
  const [wind, setWind] = useState('');
  const [icon, setIcon] = useState();

  const getWeather = async () => {
    try {
      const endpoint = `?q=London&units=metric&appid=${config.API_KEY_W}`;
      const response = await openWeatherApi.get(endpoint);
      const iconName = response.data.weather[0].icon;
      setResults(response.data);
      setTmp(response.data.main.temp);
      setWind(response.data.wind.speed);
      setIcon(iconName);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return [getWeather, results, icon, tmp, wind];
};
