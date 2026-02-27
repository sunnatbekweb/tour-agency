import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTours = createAsyncThunk(
  "tours/fetchTours",
  async ({ page = 1, filters = {} }) => {
    const params = new URLSearchParams({ page });

    if (filters.trip_theme) {
      params.append("trip_theme", filters.trip_theme);
    }
    if (filters.destination) {
      params.append("destination", filters.destination);
    }
    if (filters.duration) {
      params.append("duration", filters.duration);
    }
    if (filters.year) {
      params.append("year", filters.year);
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tour/tour-cards/search/?${params.toString()}`
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
    filters: {
      trip_theme: "",
      destination: "",
      duration: "",
      year: "",
    },
  },
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
      state.currentPage = 1;
    },
    setTripTheme(state, action) {
      state.filters.trip_theme = action.payload;
      state.currentPage = 1;
    },
    setDestination(state, action) {
      state.filters.destination = action.payload;
      state.currentPage = 1;
    },
    setDuration(state, action) {
      state.filters.duration = action.payload;
      state.currentPage = 1;
    },
    setYear(state, action) {
      state.filters.year = action.payload;
      state.currentPage = 1;
    },
    resetFilters(state) {
      state.filters = {
        trip_theme: "",
        destination: "",
        duration: "",
        year: "",
      };
      state.currentPage = 1;
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
export const {
  setPage,
  setFilters,
  setTripTheme,
  setDestination,
  setDuration,
  setYear,
  resetFilters,
} = toursSlice.actions;
export default toursSlice.reducer;