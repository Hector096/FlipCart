/* eslint-disable no-console */
import {
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_FETCH_FAIL,
  CATEGORY_FAIL,
  CATEGORY_SUCCESS,
  SET_MESSAGE,
} from './types';

import UserService from '../../service/user.service';

// eslint-disable-next-line max-len
export const addCategory = (values) => (dispatch) => UserService.addCategory(values).then(
  (response) => {
    dispatch({
      type: CATEGORY_SUCCESS,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    });

    return Promise.resolve();
  },
  (error) => {
    console.log(error.response);
    const message = (error.response
              && error.response.data
              && error.response.data.message)
            || error.message
            || error.toString();
    dispatch({
      type: CATEGORY_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

// eslint-disable-next-line max-len
export const fetchCategory = () => (dispatch) => UserService.fetchCategory().then(
  (response) => {
    dispatch({
      type: CATEGORY_FETCH_SUCCESS,
      payload: { categories: response.data.categories },
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    });

    return Promise.resolve();
  },
  (error) => {
    console.log(error.response);
    const message = (error.response
              && error.response.data
              && error.response.data.message)
            || error.message
            || error.toString();
    dispatch({
      type: CATEGORY_FETCH_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);
