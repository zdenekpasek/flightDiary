import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';
import { navigate } from '../navRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { token: action.payload.token, errorMsg: '' };
    case 'add_err':
      return { ...state, errorMsg: action.payload };
    case 'logout':
      return { token: null, errorMsg: '' };
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
    navigate('mainFlow');
  } catch (err) {
    dispatch({
      action: 'add_err',
      payload: 'Something went wrong with signup!',
    });
  }
};

const login = (dispatch) => async ({ email, password }) => {
  try {
    const response = await fdApi.post('/login', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      action: 'signup',
      payload: response.data.token,
    });
    navigate('mainFlow');
  } catch (err) {
    dispatch({
      action: 'add_err',
      payload: 'Something went wrong with login!',
    });
  }
};

const tryLocalLogin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signup', payload: token });
    navigate('mainFlow');
  } else {
    dispatch({
      type: 'add_err',
      payload: 'invalid local login ',
    });
    navigate('Main');
  }
};

const signout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: 'logout',
    });
    navigate('Main');
  } catch (err) {
    console.log(err);
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, tryLocalLogin, signout },
  { errorMsg: '', token: null }
);
