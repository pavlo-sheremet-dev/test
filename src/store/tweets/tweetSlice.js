import { createSlice } from '@reduxjs/toolkit';

export const tweetSlice = createSlice({
  name: 'tweets',
  initialState: {
    followersIds: [],
    isFollowing: false,
  },
  reducers: {
    follow: (state, action) => {
      state.followersIds.push(action.payload);
      state.isFollowing = true;
    },
    unfollow: (state, action) => {
      state.followersIds = state.followersIds.filter(
        id => id !== action.payload
      );
      state.isFollowing = false;
    },
  },
});

export const { follow, unfollow } = tweetSlice.actions;
