import {routerMiddleware}  from 'react-router-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import epicMiddleware from './rootEpicMiddleware'
import authMiddleware from "../features/Login/authMiddleware";

export default (history) => {
    return [
        thunk,
        authMiddleware,
        routerMiddleware(history),
        createLogger(),
        epicMiddleware
    ]
}

