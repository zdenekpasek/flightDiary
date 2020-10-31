import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';
import { navigate } from '../navRef';

const uavReducer = (state, action) => {
  switch (action.type) {
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
  await fdApi.post('/uav', { uavName, weight, category, uav, okNumber });
  navigate('UAVList');
};

export const { Provider, Context } = createDataContext(
  uavReducer,
  { fetchUavs, createUav },
  {}
);
