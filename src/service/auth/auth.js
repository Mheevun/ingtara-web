
import * as authHelper from "./helper";

export const isAuthenticated =
    state => authHelper.isAuthenticated(state.auth)
export const accessToken =
    state => authHelper.accessToken(state.auth)
export const isAccessTokenExpired =
    state => authHelper.isAccessTokenExpired(state.auth)
export const refreshToken =
    state => authHelper.refreshToken(state.auth)
export const isRefreshTokenExpired =
    state => authHelper.isRefreshTokenExpired(state.auth)
export const authErrors =
    state => authHelper.errors(state.auth)