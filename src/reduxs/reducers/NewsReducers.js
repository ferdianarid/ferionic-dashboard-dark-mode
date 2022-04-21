import { FETCH_NEWS_LOADING, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR } from "reduxs/constants"

const initialState = {
    loading: false,
    news: [],
    error: null
}

const NewsReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload
            }
        case FETCH_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default NewsReducers