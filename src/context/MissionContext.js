import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';
import { navigate } from '../navRef';

const missionReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
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

const createMission = (dispatch) => async ({
  missionName,
  uav,
  gps,
  missionStart,
  missionEnd,
  usedBatteries,
  tmp,
  wind,
  desc,
}) => {
  await fdApi.post('/mission', {
    missionName,
    uav,
    gps,
    missionStart,
    missionEnd,
    usedBatteries,
    tmp,
    wind,
    desc,
  });
  navigate('MissionList');
};

const editMission = (dispatch) => async ({
  _id,
  missionName,
  uav,
  missionStart,
  missionEnd,
  usedBatteries,
  desc,
}) => {
  console.log(missionStart);
  console.log(missionEnd);
  try {
    await fdApi.put(`/mission/${_id}`, {
      missionName,
      uav,
      missionStart,
      missionEnd,
      usedBatteries,
      desc,
    });
    navigate('MissionList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong.',
    });
  }
};

const deleteMission = (dispatch) => async ({ _id }) => {
  try {
    await fdApi.delete(`/mission/${_id}`);
    navigate('MissionList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong.',
    });
  }
};

export const { Provider, Context } = createDataContext(
  missionReducer,
  { fetchMissions, createMission, editMission, deleteMission },
  { errorMessage: '' }
);
