// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/themeSlice.js';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
