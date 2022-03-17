import axios from 'axios';

const API_URL = 'https://flipcart03.herokuapp.com';

const register = (values) => axios.post(`${API_URL}/signup`, { user: values })
  .then((response) => {
    if (response.data.user) {
      if (response.headers.authorization) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', JSON.stringify(response.headers.authorization));
      }
      return response;
    }
    throw response.data.message;
  });

const login = (email, password) => axios
  .post(`${API_URL}/login`, {
    user: {
      email,
      password,
    },
  })
  .then((response) => {
    if (response.headers.authorization) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', JSON.stringify(response.headers.authorization));
    }

    return response.data.user;
  });

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

export default {
  register,
  login,
  logout,
};
