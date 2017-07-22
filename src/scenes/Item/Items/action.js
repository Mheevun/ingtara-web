import {Observable} from 'rxjs/Observable'

const REQUEST_OBSERVE = "items/REQUEST_OBSERVE"
export const STARTING = "items/STARTING"
export const ADDED = "items/ADDED"
export const REMOVED = "items/REMOVED"
export const CHANGED = "items/CHANGED"
const startObserve = {type: STARTING}
const createAction = (item) => ({
    type: ADDED,
    item
})

export const observeItems = (ref) => {
    return dispatch => {
        dispatch({
            type: REQUEST_OBSERVE,
            ref
        })
    }
}

export function observeItemsEpic(action$) {
    return action$.ofType(REQUEST_OBSERVE)
        .mergeMap(action => mergeItemEvent(action.ref))
}


const mergeItemEvent = (ref) => (
    Observable.merge(
        observeItemAdded(ref),
    ).startWith(startObserve)
)

const observeItemAdded = (ref) => (
    Observable.fromEvent(ref, 'child_added')
        .do(snap => {
            console.log(`observeItemAdded: ${snap.key}`)
            console.log(snap.val())
        })
        .map(snap => createAction(snap.val()))
)



