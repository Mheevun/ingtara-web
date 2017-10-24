import {RSAA} from "redux-api-middleware";
import {withAuth} from "../Login/loginSelector";

export const ECHO_REQUEST = '@@Echo/ECHO_REQUEST';
export const ECHO_SUCCESS = '@@Echo/ECHO_SUCCESS';
export const ECHO_FAILURE = '@@Echo/ECHO_FAILURE';

export const echo = (message) => ({
    [RSAA]: {
        endpoint: '/api/echo/',
        method: 'POST',
        body: JSON.stringify({message: message}),
        headers: withAuth({ 'Content-Type': 'application/json' }),
        types: [
            ECHO_REQUEST, ECHO_SUCCESS, ECHO_FAILURE
        ]
    }
})