import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';


// Configure the store
const store = configureStore({
  reducer: {
    auth: authReducer, // Use the persisted reducer
  },
});

export default store;
