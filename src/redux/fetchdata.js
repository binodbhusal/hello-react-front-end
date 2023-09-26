import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseAPI = 'http://localhost:3000/greetings/random';

const fetchRandomGreeting = createAsyncThunk('greetings/fetchGreeting', async () => {
  try {
    const response = await axios.get(baseAPI);
    return response.data;
  } catch (error) {
    throw error.message;
  }
});
export default fetchRandomGreeting;
