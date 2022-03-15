import {
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FAIL,
    PRODUCT_FETCH_FAIL,
    PRODUCT_SUCCESS
  } from '../action/types';
  
  const initialState = { products: [] };
  
  export default function products(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case PRODUCT_SUCCESS:
        return {
          ...state
        };
      case PRODUCT_FAIL:
        return {
          ...state
        };
      case PRODUCT_FETCH_SUCCESS:
        return {
          ...state,
          products: payload.products,
        };
      case PRODUCT_FETCH_FAIL:
        return {
          ...state
        };
      default:
        return state;
    }
  }
  