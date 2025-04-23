// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import postReducer from "./postSlice";
const store = configureStore({
  reducer: {
    categories: categoryReducer,
    posts: postReducer,
  },
});

export default store;
