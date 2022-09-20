import axios from 'axios';

axios.defaults.baseURL = 'https://6325875670c3fa390f89c800.mockapi.io';
const url = '/api/contacts';
export const getItems = async function () {
  const { data } = await axios.get(url);
  return data;
};

export const postItem = async function (contact) {
  const { data } = await axios.post(url, contact);
  return data;
};

export const deleteItem = async function (id) {
  await axios.delete(`${url}/${id}`);
  return id;
};
