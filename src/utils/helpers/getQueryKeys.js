export const getQueryKeyBoardgames = (searchValue, sortValue, filteredValues, paginationValue) => [
  "BoardgamesFetch",
  searchValue,
  sortValue,
  filteredValues,
  paginationValue,
];

export const getQueryKeyPriceBounds = () => ["PriceBoundsFetch"];
export const getQueryKeyGameDurationBounds = () => ["GameDurationBoundsFetch"];