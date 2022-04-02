import { createSlice } from "@reduxjs/toolkit";
import { compare } from "../../utils/compare";
import { productList } from "../productList";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    filteredList: productList,
    displayedList: [],
    pages: [],
    pageToShow: 1,
  },
  reducers: {
    setSearch: (state, action) => {
      state.filteredList = productList;
      if (action.payload !== "") {
        state.filteredList = state.filteredList.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    getPages: (state) => {
      state.pages = [];
      for (
        let index = 0;
        index < Math.round(state.filteredList.length / 6);
        index++
      ) {
        state.pages.push(index + 1);
      }
    },
    showContent: (state, action) => {
      state.displayedList = [];
      var page = action.payload;
      for (let index = (page - 1) * 6; index <= page * 6 - 1; index++) {
        const product = state.filteredList[index];
        if (product != null) {
          state.displayedList.push(product);
        }
      }
    },
    setPageToShow: (state, action) => {
      state.pageToShow = action.payload;
    },
    setPageWithArrow: (state, action) => {
      if (action.payload) {
        if (state.pageToShow + 1 <= state.pages.length) {
          state.pageToShow++;
        }
      } else {
        if (state.pageToShow - 1 >= 1) {
          state.pageToShow--;
        }
      }
    },
    setFilter: (state, action) => {
      switch (action.payload) {
        case 0:
          state.filteredList.sort(compare("price"));
          break;
        case 1:
          state.filteredList.sort(compare("price", -1));
          break;
        case 2:
          state.filteredList.sort(compare("title"));
          break;
        case 3:
          state.filteredList.sort(compare("title", -1));
          break;
        default:
          state.filteredList = productList;
          break;
      }
    },
  },
});

export const {
  getPages,
  setSearch,
  showContent,
  setPageToShow,

  setFilter,
  setPageWithArrow,
} = catalogSlice.actions;

export const selectPages = (state) => state.catalog.pages;
export const selectFilteredList = (state) => state.catalog.filteredList;
export const selectDisplayedList = (state) => state.catalog.displayedList;
export const selectPageToShow = (state) => state.catalog.pageToShow;

export default catalogSlice.reducer;
