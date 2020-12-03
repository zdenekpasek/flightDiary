import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';
import { navigate } from '../navRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_err':
      return { ...state, errorMsg: action.payload };
    case 'signup':
      return {
        errorMsg: '',
        token: action.payload.token,
      };
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
      payload: 'Something went wrong with login',
    });
  }
};

const tryLocalLogin = (dispatch) => async () => {
  try {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch({ type: 'signup', payload: token });
      navigate('mainFlow');
    } else {
      navigate('Main');
    }
  } catch (err) {
    console.log(err);
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
  { token: null, errorMsg: '' }
);
