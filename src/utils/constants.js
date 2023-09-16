export const REDUX_LS_KEY = "REDUX_LS_KEY";
export const LEFT_PAGE = 'LEFT';
export const RIGHT_PAGE = 'RIGHT';

export const getQueryKeyBoardgames = (searchValue, sortValue, filteredValues, paginationValue) => [
  "BoardgamesFetch",
  searchValue,
  sortValue,
  filteredValues,
  paginationValue,
];
