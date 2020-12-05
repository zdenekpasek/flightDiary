import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';
import { navigate } from '../navRef';

const missionReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'fetch_missions':
      return {
        ...state,
        missions: {
          ...state.missions,
          data: [...state.missions.data, ...action.payload.missions.docs],
          pageInfo: {
            page: action.payload.missions.page,
            pages: action.payload.missions.pages,
            total: action.payload.missions.total,
          },
        },
      };
    case 'clear_missions':
      return {
        missions: {
          data: [],
          pageInfo: { ...state.missions.pageInfo },
        },
      };
    case 'clear_pageIngo':
      return {
        missions: {
          data: [],
          pageInfo: {},
        },
      };
    case 'fetch_missionById':
      return { ...state, missionById: action.payload };
    default:
      return state;
  }
};

const clearMissions = (dispatch) => async (page) => {
  dispatch({ type: 'clear_missions' });
};

const clearPageInfo = (dispatch) => async (page) => {
  dispatch({ type: 'clear_pageIngo' });
};

const fetchMissions = (dispatch) => async (page) => {
  const response = await fdApi.get('/mission', {
    params: { page, limit: 10 },
  });
  dispatch({ type: 'fetch_missions', payload: response.data });
};

const fetchMissionById = (dispatch) => async ({ _id }) => {
  const response = await fdApi.get(`/mission/${_id}`);
  dispatch({ type: 'fetch_missionById', payload: response.data });
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
  try {
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
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong.',
    });
  }
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
  try {
    await fdApi.put(`/mission/${_id}`, {
      missionName,
      uav,
      missionStart,
      missionEnd,
      usedBatteries,
      desc,
    });
    navigate('MissionDetail', { edited: true });
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
  {
    fetchMissions,
    createMission,
    editMission,
    deleteMission,
    clearMissions,
    clearPageInfo,
    fetchMissionById,
  },
  {
    errorMessage: '',
    missions: {
      data: [],
      pageInfo: {},
    },
    missionById: {},
  }
);
