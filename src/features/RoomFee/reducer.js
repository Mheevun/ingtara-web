import {REQUEST_ROOM_INFO, FETCHING_FEES} from "./action"

export default (state= [], action) => {
    switch (action.type){
        case REQUEST_ROOM_INFO:
            return {...state, roomId: action.roomId}
        case FETCHING_FEES:
            return {...state,
                isLoading: action.isLoading,
                fees: action.data,
                error: action.error
            }
        default:
            return state
    }
}


