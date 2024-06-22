import axios from 'axios';

const API_URL = 'http://localhost:3000/api/accounts';

export const getAccounts = () => {
  return axios.get(API_URL);
};
