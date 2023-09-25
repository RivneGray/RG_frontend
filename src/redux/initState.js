import { REDUX_LS_KEY } from "../utils/constants"

export const initState = {
    filters: {
        minProductPrice: 0,
        maxProductPrice: 0,
        minGameDuration: 0,
        maxGameDuration: 0,
        minAges: [],
        boardGameMechanics: [],
        boardGameLanguages: [],
        boardGameGenres: [],
        // partyTime: [],
        playerCounts: [],
    },
    sortValue: '',
    searchValue: '',
    paginationValue: 1,
    cart: [],
    user: {
        token: "",
    }
}

export const getInitState = () => {
    const dataFromLS = window.localStorage.getItem(REDUX_LS_KEY);
    return dataFromLS ? JSON.parse(dataFromLS) : initState
} 