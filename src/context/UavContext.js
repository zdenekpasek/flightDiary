import { showMessage, hideMessage } from 'react-native-flash-message';
import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';
import { navigate } from '../navRef';

const uavReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'fetch_uavs':
      return action.payload;
    default:
      return state;
  }
};

const fetchUavs = (dispatch) => async () => {
  const response = await fdApi.get('/uav');
  dispatch({ type: 'fetch_uavs', payload: response.data });
};

const createUav = (dispatch) => async ({
  uavName,
  weight,
  category,
  uav,
  okNumber,
}) => {
  try {
    await fdApi.post('/uav', { uavName, weight, category, uav, okNumber });
    navigate('UAVList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong.',
    });
  }
};

const editUav = (dispatch) => async ({
  _id,
  uavName,
  weight,
  category,
  uav,
  okNumber,
}) => {
  try {
    await fdApi.put(`/uav/${_id}`, {
      uavName,
      weight,
      category,
      uav,
      okNumber,
    });
    navigate('UAVList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong.',
    });
  }
};

const deleteUav = (dispatch) => async ({ _id }) => {
  try {
    await fdApi.delete(`/uav/${_id}`);
    navigate('UAVList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong.',
    });
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

export const { Provider, Context } = createDataContext(
  uavReducer,
  { fetchUavs, createUav, editUav, deleteUav, clearErrorMessage },
  { errorMessage: '' }
);
