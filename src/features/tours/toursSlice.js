import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTours = createAsyncThunk(
  "tours/fetchTours",
  async ({ page = 1, filters = {} }) => {
    const params = new URLSearchParams({ page });

    if (filters.destination) params.append("destination", filters.destination);
    if (filters.trip_type) params.append("trip_theme", filters.trip_type); // предполагается соответствие
    if (filters.duration) params.append("duration", filters.duration);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tour/tour-cards/search/?${params}`
    );
    return response.data;
  }
);

const toursSlice = createSlice({
  name: "tours",
  initialState: {
    list: [],
    count: 0,
    loading: false,
    error: null,
    currentPage: 1,
    filters: {}, // добавим сюда
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
      state.currentPage = 1; // сбрасываем на первую страницу при новом поиске
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

export const { setPage, setFilters } = toursSlice.actions;
export default toursSlice.reducer;
