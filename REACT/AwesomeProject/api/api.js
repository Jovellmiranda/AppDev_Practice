// FinEase/src/api.js
import axios from 'axios';

const API_URL = '192.168.1.12:8081'; // Replace with your Django backend URL

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/`, {
      username,
      password,
    });

    // Handle the response, such as storing tokens or navigating to a new screen on success
    console.log('Login successful:', response.data);
    return response.data;
  } catch (error) {
    // Handle the error, such as displaying an error message
    console.error('Login failed:', error.message);
    throw error;
  }
};
