import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6479a034a455e257fa6371cc.mockapi.io';

export const fetchTweets = createAsyncThunk(
  'users/fetchTweets',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users', {
        params: {
          page: page,
          limit: 6,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateFollowers = createAsyncThunk(
  'users/updateFollowers',
  async ({ id, ...body }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${id}`, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
