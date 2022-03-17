import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import orders from './order';
import products from './product';
import categories from './category';

export default combineReducers({
  auth,
  message,
  orders,
  products,
  categories,
});
