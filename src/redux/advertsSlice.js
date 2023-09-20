import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, fetchFilterAdverts } from "./advertsOperation";

const initialState = {
  allAdverts: [],
  currentPage: 1,
  favorits: [],
  isFilter: false
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    incrementPage: (state) => {
      if (state.currentPage <= 5) {
        state.currentPage += 1;
      }
    },
    addFavorits: (state, action) => {
      state.favorits.push(action.payload);
    },
    removeFavorits: (state, action) => {
      state.favorits = state.favorits.filter((elem) => elem.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.allAdverts = [...state.allAdverts, ...action.payload];
        state.isFilter = false;
      })
      .addCase(fetchFilterAdverts.fulfilled, (state, action) => {
        state.allAdverts = action.payload;
        state.isFilter = true;
      });
  },
});

export const { incrementPage, addFavorits, removeFavorits} = advertsSlice.actions;

export default advertsSlice.reducer