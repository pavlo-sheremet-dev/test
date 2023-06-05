import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './users/usersSlice';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { tweetSlice } from './tweets/tweetSlice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const TweetsPersistConfig = {
  key: 'tweets',
  storage,
};

const persistedTweetReducer = persistReducer(
  TweetsPersistConfig,
  tweetSlice.reducer
);

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    tweets: persistedTweetReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
