import axios from 'axios';

const BASE_URL = 'https://justbeerapp.com/api/v8/';

export const justBeerApi = axios.create({
  baseURL: BASE_URL,
  crossDomain: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  },
});
