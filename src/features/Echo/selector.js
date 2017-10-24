import {getEcho} from "../../duck/rootReducer";
import {createSelector} from "reselect";
export const serverMessage = createSelector([getEcho], (state) => state.message)