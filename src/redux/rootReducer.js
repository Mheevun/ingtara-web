import {combineReducers} from "redux"
import  {routerReducer}  from 'react-router-redux'
import roomFeeReducer from "../scenes/RoomFee/reducer"
import dataReducer from "../data/reducer"
import itemListReducer from "../scenes/Item/Items/reducer";

export default combineReducers({
    routing: routerReducer,
    roomFeeReducer,
    dataReducer,
    itemListReducer
});