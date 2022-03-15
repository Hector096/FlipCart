import axios from 'axios';
import authHeader from './header';

const API_URL = 'https://flipcart03.herokuapp.com';

// eslint-disable-next-line
const fetchProducts = () => axios.get(`${API_URL}/products`);

// eslint-disable-next-line
const addProducts = (values) => axios.post(`${API_URL}/products`,values,{headers: authHeader()});

// eslint-disable-next-linproducts
const fetchCategory = () => axios.get(`${API_URL}/categories`);

// eslint-disable-next-line
const addCategory = (values) => axios.post(`${API_URL}/categories`,values,{headers: authHeader()});

// eslint-disable-next-line
const fetchOrders = () => axios.get(`${API_URL}/orders`,null,{headers: authHeader()});

// eslint-disable-next-line
const addOrders = (values) => axios.post(`${API_URL}/orders`,values,{headers: authHeader()});

export default {
  fetchCategory,
  fetchOrders,
  fetchProducts,
  addCategory,
  addOrders,
  addProducts,
};
