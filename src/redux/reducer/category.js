import {
  CATEGORY_FAIL,
  CATEGORY_FETCH_FAIL,
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_SUCCESS,
} from '../action/types';

const initialState = { categories: [] };

export default function categories(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    case CATEGORY_FAIL:
      return {
        ...state,
      };
    case CATEGORY_FETCH_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
      };
    case CATEGORY_FETCH_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
