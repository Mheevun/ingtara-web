import {combineReducers} from "redux"
import  {routerReducer}  from 'react-router-redux'
import roomFeeReducer from "../features/RoomFee/reducer"
import dataReducer from "../data/reducer"
import itemListReducer from "../features/Item/Items/reducer";
import echoReducer from "../features/Echo/reducer";
import authReducer from "../features/Login/loginReducer";

export default combineReducers({
    auth: authReducer,
    echo: echoReducer,
    router: routerReducer,
    roomFeeReducer,
    dataReducer,
    itemListReducer,
});

export const getAuth = (state) => state.auth
export const getEcho = (state) => state.echo