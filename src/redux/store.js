import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initState";
import { filtersReduce } from "./slices/filtersSlice";
import { REDUX_LS_KEY } from "../utils/constants";
import { sortValueReducer } from "./slices/sortSlice";

export const store = configureStore({
    preloadedState: getInitState(),
    reducer: {
        filters: filtersReduce,
        sortValue: sortValueReducer,
    },
})

store.subscribe(() => {
    window.localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState()));
})