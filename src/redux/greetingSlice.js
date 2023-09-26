import { createSlice } from '@reduxjs/toolkit';
import fetchRandomGreeting from './fetchdata';

const initialState = {
  greeting: '',
  isLoading: false,
  isError: null,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload.greeting.content;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.isError = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
