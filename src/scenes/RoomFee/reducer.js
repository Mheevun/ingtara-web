import {REQUEST_ROOM_INFO, FETCHING_CONTRACTS} from "./action"

export default (state= [], action) => {
    switch (action.type){
        case REQUEST_ROOM_INFO:
            return {...state, roomId: action.roomId}
        case FETCHING_CONTRACTS:
            return {...state,
                isLoading: action.isLoading,
                contracts: action.data,
                error: action.error
            }
        default:
            return state
    }
}


