import createDataContext from './createDataContext';
import openWeatherApi from '../services/api/openWeatherApi';
import config from '../config';

const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'fetch_weather':
      return action.payload;
    default:
      return state;
  }
};

const fetchWeather = (dispatch) => async () => {
  const endpoint = `?q=London&units=metric&appid=${config.API_KEY_W}`;
  const response = await openWeatherApi.get(endpoint);
  const iconName = response.data.weather[0].icon;
  dispatch({ type: 'fetch_weather', payload: response.data });
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

export const { Provider, Context } = createDataContext(
  weatherReducer,
  { fetchWeather, clearErrorMessage },
  { errorMessage: '', weather: {} }
);
