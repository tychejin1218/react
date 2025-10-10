import axios from 'axios';

const API_BASE_URL = 'http://localhost:9091/api'; // 기본 URL (쿼리 없는 상태)

export const getTodos = async (filters = {}) => {
  try {
    const { title, completed } = filters;
    const response = await axios.get(API_BASE_URL + '/todos', {
      params: {
        title,
        completed,
      },
    });

    const { statusCode, data, message } = response.data;

    if (statusCode !== '200') {
      throw new Error(message);
    }

    return data;
  } catch (error) {
    console.error('Error fetching todos:', error.message || error);
    throw error;
  }
};

export const getTodoById = async (id) => {
  try {
    const response = await axios.get(API_BASE_URL + `/todo/${id}`);
    const { statusCode, data, message } = response.data;

    if (statusCode !== '200') {
      throw new Error(message);
    }

    return data;
  } catch (error) {
    console.error('Error fetching todo:', error.message || error);
    throw error;
  }
};
