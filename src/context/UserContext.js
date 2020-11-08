import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';
import { navigate } from '../navRef';

const userReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'fetch_user':
      return action.payload;
    default:
      return state;
  }
};

const fetchUser = (dispatch) => async () => {
  const response = await fdApi.get('/user');
  dispatch({ type: 'fetch_user', payload: response.data });
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

export const { Provider, Context } = createDataContext(
  userReducer,
  { fetchUser, clearErrorMessage },
  { errorMessage: '', user: { name: '', email: '' } }
);
