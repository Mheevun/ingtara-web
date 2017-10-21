import {createStore, compose, applyMiddleware} from "redux"
import rootMiddleware from "./rootMiddleware"
import rootReducer from "./rootReducer"
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import {createFilter} from "redux-persist-transform-filter";

export default (history) => {
    const persistedFilter = createFilter('auth', ['access', 'refresh']);
    const reducer = persistReducer(
        {
            key: 'polls',
            storage: storage,
            whitelist: ['auth'],
            transforms: [persistedFilter]
        },
        rootReducer)
    const initialState = {}
    const composedEnhancers = compose(
        applyMiddleware(...rootMiddleware(history)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )

    const store = createStore(
        reducer,
        initialState,
        composedEnhancers
    )

    persistStore(store)
    return store
}
// const store = createStore(
//     rootReducer,
//     initialState,
//     composedEnhancers
// )
//
// export default store