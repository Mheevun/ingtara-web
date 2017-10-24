import * as echo from "./action";

const initialState = {
    message: ""
}
export default (state = initialState, action) => {
    switch (action.type) {
        case echo.ECHO_SUCCESS:
            return {message: action.payload.message}
        case echo.ECHO_FAILURE:
            return {message: "Echo fail"}
        case echo.ECHO_REQUEST:
            return {message: "Echo requesting"}
        default:
            return state
    }
}
