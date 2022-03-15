/* eslint-disable no-console */
import {
    ORDER_SUCCESS,
    ORDER_FAIL,
    ORDER_FETCH_FAIL,
    ORDER_FETCH_SUCCESS,
    SET_MESSAGE,
  } from './types';
  
  import AuthService from '../../service/auth';
  
  // eslint-disable-next-line max-len
  export const addOrder = (values) => (dispatch) => AuthService.addOrder(values).then(
    (response) => {
      dispatch({
        type: ORDER_SUCCESS,
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
        type: ORDER_FAIL,
      });
  
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
  
      return Promise.reject();
    },
  );


  export const fetchOrders = () => (dispatch) => AuthService.fetchOrders().then(
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