import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { token: action.payload.token, errorMsg: '' };
    case 'add_err':
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ name, email, password }) => {
  try {
    const response = await fdApi.post('/signup', { name, email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      action: 'signup',
      payload: response.data.token,
    });
  } catch (err) {
    dispatch({
      action: 'add_err',
      payload: 'Something went wrong',
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup },
  { errorMsg: '', token: null }
);
