import axios from 'axios';

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
