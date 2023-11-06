import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getRecipesByQuery = createAsyncThunk(
  'search/getRecipesByQuery',
  async (query, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `recipes/title?title=${query}&page=1&limit=8`
      );
      setHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
