import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk(
  "tours/fetchBlogs",
  async (page = 1) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog/posts/?page=${page}`
    );
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
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
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage } = blogsSlice.actions;
export default blogsSlice.reducer;
