/**
 * Created by cnr on 7/1/2017.
 */

import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules/index'
import * as Redux from "redux"

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = Redux.compose(
    Redux.applyMiddleware(...middleware),
    ...enhancers
)

const store = Redux.createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store