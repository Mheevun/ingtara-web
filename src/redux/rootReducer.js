import {combineReducers} from "redux"
import  {routerReducer}  from 'react-router-redux'
import roomFeeReducer from "../scenes/RoomFee/reducer"
import dataReducer from "../data/reducer"

export default combineReducers({
    routing: routerReducer,
    roomFeeReducer,
    dataReducer
});