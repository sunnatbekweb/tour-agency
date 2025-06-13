import { configureStore } from "@reduxjs/toolkit";
import toursReducer from "../features/tours/toursSlice";
import blogsReducer from "../features/blogs/blogsSlice";
export const store = configureStore({
  reducer: {
    tours: toursReducer,
    blogs: blogsReducer,
  },
});
