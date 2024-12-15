import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For React Native
import authReducer from './slices/authSlice';

// Redux Persist configuration
const persistConfig = {
  key: 'root', // Key in storage where data is saved
  storage: AsyncStorage, // Use AsyncStorage for React Native
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Configure the store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use the persisted reducer
  },
});

export const persistor = persistStore(store);
export default store;
