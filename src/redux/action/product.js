/* eslint-disable no-console */
import {
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FAIL,
    PRODUCT_FETCH_FAIL,
    PRODUCT_SUCCESS,
    SET_MESSAGE,
  } from './types';
  
  import AuthService from '../../service/auth';
  
  // eslint-disable-next-line max-len
  export const addProduct = (values) => (dispatch) => AuthService.addProduct(values).then(
    (response) => {
      dispatch({
        type: PRODUCT_SUCCESS,
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
        type: PRODUCT_FAIL,
      });
  
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
  
      return Promise.reject();
    },
  );


  export const fetchProducts = () => (dispatch) => AuthService.fetchProducts().then(
    (response) => {
      dispatch({
        type: PRODUCT_FETCH_SUCCESS,
        payload: { products: response.data.products },
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
        type: PRODUCT_FETCH_FAIL,
      });
  
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
  
      return Promise.reject();
    },
  );