import { configureStore } from "@reduxjs/toolkit";
import { initState } from "./initState";
import { filtersReduce } from "./slices/filtersSlice";

export const store = configureStore({
    preloadedState: initState,
    reducer: {
        filters: filtersReduce
    },
})