import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';
import { navigate } from '../navRef';

const missionReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_missions':
      return action.payload;
    default:
      return state;
  }
};

const fetchMissions = (dispatch) => async () => {
  const response = await fdApi.get('/mission');
  dispatch({ type: 'fetch_missions', payload: response.data });
};

// TODO: change inputs
const createMission = (dispatch) => async ({
  uavName,
  weight,
  category,
  uav,
  okNumber,
}) => {
  await fdApi.post('/mission', { uavName, weight, category, uav, okNumber });
  navigate('MissionList');
};

export const { Provider, Context } = createDataContext(
  missionReducer,
  { fetchMissions, createMission },
  {}
);
