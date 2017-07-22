import {ADDED} from "./action";

const INITIAL_STATE = {items: []}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDED:
            const items = [...state.items, action.item]
            return {...state, items}

        default:
            return state
    }
}