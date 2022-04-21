import { combineReducers } from "redux"
import NewsReducers from "reduxs/reducers/NewsReducers"

const RootReducers = combineReducers({
    newsReducers: NewsReducers
})

export default RootReducers