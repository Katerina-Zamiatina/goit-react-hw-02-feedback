import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // storage for one session
import feedbackReducer from './feedback/reducer';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const persistConfig = {
//   key: 'feedback',
//   storage,
// };

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
  // middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
