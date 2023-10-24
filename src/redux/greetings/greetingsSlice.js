import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greeting');
    if (!response.ok) {
      return Promise.reject(new Error('Network response was not ok'));
    }
    const json = await response.json();
    return json;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        const { greeting } = action.payload;
        return {
          ...state,
          greeting: greeting.greetings,
          loading: false,
        };
      })
      .addCase(fetchGreetings.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        loading: false,
      }));
  },
});

export default greetingsSlice.reducer;
