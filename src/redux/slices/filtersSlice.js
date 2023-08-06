import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState"

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initState.filters,
    reducers: {
        selectFilter(state, action) {
            const nameCategory = action.payload.nameCategoryDev;
            const nameFilter = action.payload.nameFilterUI;

            state[nameCategory].push(nameFilter)
        },
        deleteFilter(state, action) {
            const nameCategory = action.payload.nameCategoryDev;
            const nameFilter = action.payload.nameFilterUI;

            return {
                ...state,
                [nameCategory]: state[nameCategory].filter(name => name !== nameFilter)
            }
        }
    }
})

export const {selectFilter, deleteFilter} = filtersSlice.actions;
export const filtersReduce = filtersSlice.reducer;