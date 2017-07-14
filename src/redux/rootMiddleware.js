import {routerMiddleware}  from 'react-router-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import epicMiddleware from './rootEpicMiddleware'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()
export default  [
    thunk,
    routerMiddleware(history),
    createLogger(),
    epicMiddleware
]