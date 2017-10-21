import {routerMiddleware}  from 'react-router-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import epicMiddleware from './rootEpicMiddleware'
import { apiMiddleware } from 'redux-api-middleware';

export default (history) => {
    return [
        thunk,
        apiMiddleware,
        routerMiddleware(history),
        createLogger(),
        epicMiddleware
    ]
}