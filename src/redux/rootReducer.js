import {combineReducers} from "redux"
import  {routerReducer}  from 'react-router-redux'
import roomFeeReducer from "../scenes/RoomFee/reducer"
import dataReducer from "../data/reducer"
import itemListReducer from "../scenes/Item/Items/reducer";
import authReducer from "../service/auth/reducer"
import echoReducer from "../service/echo/reducer";

export default combineReducers({
    auth: authReducer,
    routing: routerReducer,
    roomFeeReducer,
    dataReducer,
    itemListReducer,
    echoReducer
});