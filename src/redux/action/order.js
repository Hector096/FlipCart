/* eslint-disable no-console */
import {
  ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_FETCH_FAIL,
  ORDER_FETCH_SUCCESS,
  ORDER_DELETE_FAIL,
  ORDER_DELETE_SUCCESS,
  SET_MESSAGE,
} from './types';

import UserService from '../../service/user.service';

// eslint-disable-next-line max-len
export const addOrder = (values) => (dispatch) => UserService.addOrders(values).then(
  (response) => {
    dispatch({
      type: ORDER_SUCCESS,
      payload: response.data.orders,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    });

    return Promise.resolve();
  },
  (error) => {
    const message = (error.response
              && error.response.data
              && error.response.data.message)
            || error.message
            || error.toString();
    dispatch({
      type: ORDER_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const fetchOrders = () => (dispatch) => UserService.fetchOrders().then(
  (response) => {
    dispatch({
      type: ORDER_FETCH_SUCCESS,
      payload: { orders: response.data.orders },
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
      type: ORDER_FETCH_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const deleteOrders = (id) => (dispatch) => UserService.deleteOrders(id).then(
  // eslint-disable-next-line
  (response) => {
    dispatch({
      type: ORDER_DELETE_SUCCESS,
      payload: id,
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
      type: ORDER_DELETE_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);
