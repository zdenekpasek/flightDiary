import * as WebBrowser from 'expo-web-browser';
import createDataContext from './createDataContext';
import fdApi from '../services/api/fdApi';
import { navigate } from '../navRef';

const pdfReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'fetch_pdf':
      return action.payload;
    default:
      return state;
  }
};

const fetchPdf = (dispatch) => async () => {};

const createPdf = (dispatch) => async () => {
  try {
    const response = await fdApi.post('/createPdf');
    console.log(response.data.fileUrl);
    await WebBrowser.openBrowserAsync(`${response.data.fileUrl}`);
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
  pdfReducer,
  { createPdf, fetchPdf, clearErrorMessage },
  { errorMessage: '' }
);
