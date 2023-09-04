export const REDUX_LS_KEY = "REDUX_LS_KEY";

export const getQueryKeyBoardgames = (searchValue, sortValue) => [
  "BoardgamesFetch",
  searchValue,
  sortValue,
];
