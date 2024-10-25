import axios from 'axios';

// Placeholder API base URL
const API_URL = 'https://jsonplaceholder.typicode.com';

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(`${API_URL}/todos`, task);
  return response.data;
};

export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/todos/${id}`);
  return response.data;
};
