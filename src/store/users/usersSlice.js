import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchTweets, updateFollowers } from './usersOperations';

const initialState = {
  items: [],
  page: 1,
  filter: 'showAll',
  error: null,
  loading: false,
};

const getActions = type => extraActions.map(action => action[type]);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    incrementPage: state => {
      return initialState;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.page = 1;
    },
    clearUsers: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload];
      })
      .addCase(updateFollowers.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.loading = false;
};

export const { incrementPage, setFilter, clearUsers } = usersSlice.actions;
const extraActions = [fetchTweets, updateFollowers];
