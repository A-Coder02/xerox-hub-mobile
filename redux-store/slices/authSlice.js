import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Initial State
const initialState = {
  user: null, // Holds user data
  token: null, // Holds authentication token
  loading: false, // For async actions
  error: null, // To handle errors
};

// Slice for authentication state
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators
export const { setCredentials, logout, setLoading, setError } = authSlice.actions;

// Reducer
export default authSlice.reducer;

// Thunk to load token from AsyncStorage (for persistence)
export const loadUserFromStorage = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      // Optionally fetch user data using the token here and dispatch setCredentials
      dispatch(setCredentials({ token }));
    }
  } catch (error) {
    console.error('Error loading user from storage or no data found', error);
  }
};
