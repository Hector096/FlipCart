import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_FETCH_FAIL,
  PRODUCT_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_SUCCESS,
} from '../action/types';

const initialState = { products: [] };

export default function products(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case PRODUCT_FAIL:
      return {
        ...state,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== payload),
      };
    case PRODUCT_DELETE_FAIL:
      return {
        ...state,
      };
    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        products: payload.products,
      };
    case PRODUCT_FETCH_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
