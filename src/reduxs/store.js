import { createStore, applyMiddleware } from "redux";
import RootReducers from "reduxs/reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store