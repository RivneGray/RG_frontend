import {createSlice} from "@reduxjs/toolkit";
import {initState} from "../initState";
//
// [
//     {
//         "id": 141201,
//         "boardGame": {
//             "id": 0,
//             "productName": "Колонизаторы",
//             "productNameInEnglish": "Catan",
//             "productPrice": 1400,
//             "productQuantityInStock": 0,
//             "productImageURL": img
//         }
//     }
//]

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initState.favorites,
    reducers: {
        setFavorites(state, action) {
            return {
                ...state,
                favList: action.payload
            }
        },
        addItemToFavorites(state, action) {
            const newProductInFavorites = {
                id: state.favList.length,
                boardGame: action.payload
            }
            return {
                ...state,
                favList: [...state.favList, newProductInFavorites]
            }
        },
        removeItemFromFavorites(state, action) {
            return {
                ...state,
                favList: state.favList.filter(item => item.id !== action.payload)
            }
        },
        removeAllItemsFromFavorites(state) {
            return {
                ...state,
                favList: []
            }
        }
    }
})

export const {
    setFavorites,
    addItemToFavorites,
    removeItemFromFavorites,
    removeAllItemsFromFavorites
} = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
export const getFavoritesItemsSelector = state => {
    return state.favorites.favList
}
export const getFavoriteItemIdById = id => state => {
    if (state.favorites.favList.filter(prod => prod.boardGame.id === id)[0]) return state.favorites.favList.filter(prod => prod.boardGame.id === id)[0].id
    return null
}
