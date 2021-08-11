import axios from "axios";
const API_BASE = process.env.REACT_APP_APIBASE;

export const userLogin = params => {
  return axios
    .post(`${API_BASE}`, params)
    .then(e => e)
    .catch(e => e);
};