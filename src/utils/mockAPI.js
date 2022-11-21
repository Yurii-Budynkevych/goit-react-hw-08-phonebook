import axios from 'axios';

axios.defaults.baseURL = `https://63741e8608104a9c5f7aacee.mockapi.io/contacts`;

export const getContacts = () => {
  return axios.get(`/contacts`).then(res => res.data);
};

export const deleteContact = id => {
  return axios.delete(`/contacts/${id}`).then(res => console.log(res));
};

export const addContact = data => {
  return axios.post(`/contacts`, data).then(res => console.log(res));
};
