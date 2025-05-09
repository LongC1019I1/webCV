// src/store/postSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {api} from "../Data/api";
// Cho phép truyền categoryId động vào
export const fetchPostsByCategory = createAsyncThunk(
  "posts/fetchByCategory",
  async (categoryId) => {
    const response = await axios.get(
      `${api}/wp-json/wp/v2/posts?categories=${categoryId}&_embed`
    );
    return {
      categoryId,
      posts: response.data,
    };
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    dataByCategory: {}, // 👈 lưu theo từng category
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsByCategory.fulfilled, (state, action) => {
        const { categoryId, posts } = action.payload;
        state.loading = false;
        state.dataByCategory[categoryId] = posts;
      })
      .addCase(fetchPostsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default postSlice.reducer;
