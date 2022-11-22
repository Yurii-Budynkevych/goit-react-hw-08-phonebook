import axios from 'axios';

axios.defaults.baseURL = `https://63741e8608104a9c5f7aacee.mockapi.io/contacts`;

export const getContacts = async () => {
  const res = await axios.get(`/contacts`);
  return res.data;
};

export const deleteContact = async id => {
  const res = await axios.delete(`/contacts/${id}`);
  return res;
};

export const addContact = async data => {
  const res = await axios.post(`/contacts`, data);
  return res;
};
