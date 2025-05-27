import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTours = createAsyncThunk(
  'tours/fetchTours',
  async (page = 1) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tour/tour-cards/?page=${page}`
    );
    return response.data;
  }
);

const toursSlice = createSlice({
  name: 'tours',
  initialState: {
    list: [],
    count: 0,
    loading: false,
    error: null,
    currentPage: 1,
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage } = toursSlice.actions;
export default toursSlice.reducer;
