import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const filtersSlice = createSlice({
  name: "filters",
  initialState: initState.filters,
  reducers: {
    selectFilter(state, action) {
      const nameCategory = action.payload.nameCategoryDev;
      const nameFilter = action.payload.nameFilterUI;

      state[nameCategory].push(nameFilter);
    },
    deleteFilter(state, action) {
      const nameCategory = action.payload.nameCategoryDev;
      const nameFilter = action.payload.nameFilterUI;

      return {
        ...state,
        [nameCategory]: state[nameCategory].filter(
          (name) => name !== nameFilter
        ),
      };
    },
    setMinPrice(state, action) {
      state.minProductPrice = action.payload;
    },
    setMaxPrice(state, action) {
      state.maxProductPrice = action.payload;
    },
    setMinPartyTime(state, action) {
      state.minGameDuration = action.payload;
    },
    setMaxPartyTime(state, action) {
      state.maxGameDuration = action.payload;
    },
    clearFilters() {
      return initState.filters;
    },
  },
});

export const {
  selectFilter,
  deleteFilter,
  setMinPrice,
  setMaxPrice,
  clearFilters,
  setMinPartyTime,
  setMaxPartyTime,
} = filtersSlice.actions;
export const filtersReduce = filtersSlice.reducer;

export const getFiltersSelector = (state) => state.filters;
export const getMinProductPriceSelector = (state) => state.filters.minProductPrice;
export const getMaxProductPriceSelector = (state) => state.filters.maxProductPrice;
export const getMinGameDurationSelector = (state) => state.filters.minGameDuration;
export const getMaxGameDurationSelector = (state) => state.filters.maxGameDuration;