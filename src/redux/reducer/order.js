import {
  ORDER_FAIL,
  ORDER_FETCH_FAIL,
  ORDER_FETCH_SUCCESS,
  ORDER_SUCCESS,
} from '../action/types';

const initialState = { orders: [] };

export default function orders(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ORDER_SUCCESS:
      return {
        ...state,
      };
    case ORDER_FAIL:
      return {
        ...state,
      };
    case ORDER_FETCH_SUCCESS:
      return {
        ...state,
        orders: payload.orders,
      };
    case ORDER_FETCH_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
