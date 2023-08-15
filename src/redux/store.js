import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initState";
import { filtersReduce } from "./slices/filtersSlice";
import { REDUX_LS_KEY } from "../constants";

export const store = configureStore({
    preloadedState: getInitState(),
    reducer: {
        filters: filtersReduce
    },
})

store.subscribe(() => {
    window.localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState()));
})