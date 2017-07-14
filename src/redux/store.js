import {createStore, compose, applyMiddleware} from "redux"
import rootMiddleware from "./rootMiddleware"
import rootReducer from "./rootReducer"

const initialState = {}

const composedEnhancers = compose(
    applyMiddleware(...rootMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store