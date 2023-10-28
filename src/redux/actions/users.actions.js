import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'AUTH/REGISTER',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      setHeader(data.token);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 409') {
        toast.error('This email address is already registered', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const signIn = createAsyncThunk(
  'AUTH/SIGNIN',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signin', credentials);
      setHeader(data.token);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        toast.error('Incorrect email or password', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
