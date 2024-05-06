import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initState.favorites,
  reducers: {
    setFavorites(state, action) {
      return {
        ...state,
        favList: action.payload,
      };
    },

    addItemToFavorites(state, action) {
      return {
        ...state,
        favList: [...state.favList, action.payload.id ? action.payload : { id: action.payload.boardGame.id, boardGame: action.payload.boardGame }],
      };
    },

    removeItemFromFavorites(state, action) {
      return {
        ...state,
        favList: state.favList.filter((item) => item.id !== action.payload),
      };
    },

    removeAllItemsFromFavorites(state) {
      return {
        ...state,
        favList: [],
      };
    },
  },
});

export const {
  setFavorites,
  addItemToFavorites,
  removeItemFromFavorites,
  removeAllItemsFromFavorites,
} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const getFavoritesItemsSelector = (state) => {
  return state.favorites.favList;
};
export const getFavoriteItemIdById = id => (state) => {
  if (state.favorites.favList.filter((prod) => prod.boardGame.id === id)[0])
    return state.favorites.favList.filter((prod) => prod.boardGame.id === id)[0]
      .id;
  return null;
};
export const isProductInFavorites = id => (state) => {
  if (state.favorites.favList.length === 0) return false;
  const filteredFavList = state.favorites.favList.filter(
    (item) => item.boardGame.id === id
  );
  return filteredFavList.length !== 0;
};
export const getFavoritesIdsArray = state => state.favorites.favList.map(el =>{return {productId: el.boardGame.id}})
