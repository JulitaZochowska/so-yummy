import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchCategoryRecipes = createAsyncThunk(
  'recipes/FETCH_CATEGORY',
  async (categoryId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.get('/recipes/category/' + categoryId);
      return response.data;
    } catch (error) {
      console.log(error, 'error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  'RECIPES/ADD',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/ownRecipes/add', body, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().users.token}`,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategoriesList = createAsyncThunk(
  'recipes/FETCH_CATEGORIES_LIST',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.get('/recipes/category-list');
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
