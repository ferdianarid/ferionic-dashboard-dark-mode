import { FETCH_NEWS_LOADING, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR } from "reduxs/constants"
import axios from "axios"
import { REACT_APP_API_KEY } from "apis"

export const FetchNewsLoading = () => {
    return {
        type: FETCH_NEWS_LOADING,
        loading: true
    }
}

export const FetchNewsSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news,
    }
}

export const FetchNewsFailed = (error) => {
    return {
        type: FETCH_NEWS_ERROR,
        payload: error
    }
}

export const FetchNewsRequest = () => {
    return function(dispatch) {
        dispatch(FetchNewsLoading())
        axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2022-04-21&sortBy=popularity&apiKey=${REACT_APP_API_KEY}`)
            .then(response => {
                // Store response data
                console.log(response.data)
                const newsList = response.data.articles
                console.log(newsList)
                    // Dispatch Response type and payload(name)
                dispatch(FetchNewsSuccess(newsList))
            }).catch(error => {
                console.log(error)
                    // store error message || type and error payload
                const errorMessage = error.message
                dispatch(FetchNewsFailed(errorMessage))
            })
    }
}