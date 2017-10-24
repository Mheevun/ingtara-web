import {getAuth} from "../../duck/rootReducer";
import {createSelector} from "reselect";

export const accessToken = createSelector(getAuth, state => state.access.token)
export const refreshToken = createSelector(getAuth, state => {
        if (state.refresh) {
            return state.refresh.token
        }
    }
)
export const isAccessTokenExpired = createSelector(getAuth, state => {
        if (state.access && state.access.exp) {
            return 1000 * state.access.exp - (new Date()).getTime() < 5000
        }
        return true
    }
)
export const isRefreshTokenExpired = createSelector(getAuth, state => {
        if (state.refresh && state.refresh.exp) {
            return 1000 * state.refresh.exp - (new Date()).getTime() < 5000
        }
        return true
    }
)
export function isAuthenticated(state) {
    return !isRefreshTokenExpired(state)
}
export const authErrors = createSelector(getAuth, state => state.errors)

export function withAuth(headers = {}) {
    return (globalState) => ({
        ...headers,
        'Authorization': `Bearer ${accessToken(globalState)}`
    })
}